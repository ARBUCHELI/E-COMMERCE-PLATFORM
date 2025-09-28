-- First, add some categories if they don't exist
INSERT INTO public.categories (id, name, slug, description) VALUES 
  ('550e8400-e29b-41d4-a716-446655440001', 'Electronics', 'electronics', 'Latest electronic devices and gadgets'),
  ('550e8400-e29b-41d4-a716-446655440002', 'Clothing', 'clothing', 'Fashion and apparel for all occasions'),
  ('550e8400-e29b-41d4-a716-446655440003', 'Home & Garden', 'home-garden', 'Home decor and garden essentials'),
  ('550e8400-e29b-41d4-a716-446655440004', 'Sports & Fitness', 'sports-fitness', 'Sports equipment and fitness gear')
ON CONFLICT (slug) DO NOTHING;

-- Add sample products
INSERT INTO public.products (
  name, 
  description, 
  price, 
  original_price, 
  image_url, 
  category_id, 
  is_featured, 
  is_active, 
  inventory_count,
  sku
) VALUES 
  (
    'Wireless Bluetooth Headphones',
    'Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    199.99,
    249.99,
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    '550e8400-e29b-41d4-a716-446655440001',
    true,
    true,
    50,
    'WBH-001'
  ),
  (
    'Smart Fitness Watch',
    'Advanced fitness tracker with heart rate monitor, GPS, and 7-day battery life. Track your health and fitness goals.',
    299.99,
    399.99,
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    '550e8400-e29b-41d4-a716-446655440001',
    true,
    true,
    25,
    'SFW-002'
  ),
  (
    'Organic Cotton T-Shirt',
    'Comfortable and sustainable organic cotton t-shirt available in multiple colors. Perfect for everyday wear.',
    29.99,
    39.99,
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    '550e8400-e29b-41d4-a716-446655440002',
    false,
    true,
    100,
    'OCT-001'
  ),
  (
    'Premium Yoga Mat',
    'Non-slip premium yoga mat made from eco-friendly materials. Includes carrying strap and alignment guides.',
    79.99,
    99.99,
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    '550e8400-e29b-41d4-a716-446655440004',
    true,
    true,
    35,
    'PYM-001'
  ),
  (
    'Ceramic Plant Pot Set',
    'Beautiful set of 3 ceramic plant pots in different sizes. Perfect for indoor plants and home decoration.',
    49.99,
    NULL,
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop',
    '550e8400-e29b-41d4-a716-446655440003',
    false,
    true,
    60,
    'CPP-001'
  ),
  (
    'Wireless Gaming Mouse',
    'High-precision wireless gaming mouse with RGB lighting and programmable buttons. Perfect for gamers.',
    89.99,
    119.99,
    'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    '550e8400-e29b-41d4-a716-446655440001',
    false,
    true,
    40,
    'WGM-001'
  ),
  (
    'Designer Sunglasses',
    'Stylish designer sunglasses with UV protection. Classic design that never goes out of style.',
    149.99,
    199.99,
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    '550e8400-e29b-41d4-a716-446655440002',
    true,
    true,
    20,
    'DSG-001'
  ),
  (
    'Stainless Steel Water Bottle',
    'Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    34.99,
    44.99,
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    '550e8400-e29b-41d4-a716-446655440004',
    false,
    true,
    80,
    'SSWB-001'
  );