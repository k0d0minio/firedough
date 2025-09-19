// Static data imports
import { restaurantData, menuItems } from '../data/restaurantData';

// Simulate async behavior for compatibility
export async function getAllDataWithSlug() {
  // Return menu items with slugs for dynamic routing
  return menuItems.map(item => ({
    slug: item.slug,
    title: item.title
  }));
}

export async function getDataFromBucket(preview) {
  // Return all restaurant data
  return restaurantData;
}