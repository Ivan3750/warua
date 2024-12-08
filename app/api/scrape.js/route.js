// pages/api/scrape.js
import axios from 'axios';

const HISTORY_URL = 'https://deepstatemap.live/api/history/';

const OCCUPIED_KEYS = [
    'Окупований Крим /// Occupied Crimea',
    'Окуповано /// Occupied',
    'ОРДЛО /// CADR and CALR',
    'Окуповано',
];

const fetchGeoJsonData = async (id) => {
    try {
        const response = await axios.get(`${HISTORY_URL}/${id}/geojson`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const calculateOccupiedArea = (features) => {
    // You can implement the area calculation logic here or use GeoPandas in a backend server.
    return features.reduce((total, feature) => {
        // Filter based on the occupied region names
        if (OCCUPIED_KEYS.includes(feature.properties.name)) {
            total += 1; // Dummy value for area, replace with actual geometry area calculation
        }
        return total;
    }, 0);
};

export default async function handler(req, res) {
    const { ids } = req.query;

    try {
        const data = await Promise.all(ids.map(id => fetchGeoJsonData(id)));
        const areas = data.map((item, idx) => {
            const area = calculateOccupiedArea(item.features);
            return { id: ids[idx], area };
        });
        res.status(200).json(areas);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
s