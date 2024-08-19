import { useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: '1',
      brand_name: 'VitalEssence',
      product_name: 'Vitality Shots',
      category: 'drink',
      discountedPrice: 15.99,
      realPrice: 19.99,
      image_link:
        'https://images.unsplash.com/photo-1524638067-feba7e8ed70f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '2',
      brand_name: 'EcoGear',
      product_name: 'Rucksack Bag',
      category: 'clothing',
      discountedPrice: 45.0,
      realPrice: 55.0,
      image_link:
        'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '3',
      brand_name: 'PureNaturals',
      product_name: 'Coco Oil',
      category: 'cosmetics',
      discountedPrice: 12.49,
      realPrice: 14.99,
      image_link:
        'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '4',
      brand_name: 'SunSleek',
      product_name: 'Sun Glasses',
      category: 'clothing',
      discountedPrice: 29.99,
      realPrice: 39.99,
      image_link:
        'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '5',
      brand_name: 'GlowCare',
      product_name: 'Moisturizer',
      category: 'cosmetics',
      discountedPrice: 8.99,
      realPrice: 12.99,
      image_link:
        'https://images.unsplash.com/photo-1556228578-567ba127e37f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: '6',
      brand_name: 'StridePro',
      product_name: 'Running Shoes',
      category: 'clothing',
      discountedPrice: 49.99,
      realPrice: 69.99,
      image_link:
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '7',
      brand_name: 'VitalEssence',
      product_name: 'Fresh Juice',
      category: 'drink',
      discountedPrice: 3.49,
      realPrice: 4.99,
      image_link:
        'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxwcm9kdWN0fGVufDB8fDB8fHww',
    },
    {
      id: '8',
      brand_name: 'GlowCare',
      product_name: 'Face Cream',
      category: 'cosmetics',
      discountedPrice: 16.99,
      realPrice: 24.99,
      image_link:
        'https://images.unsplash.com/photo-1552046122-03184de85e08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxwcm9kdWN0fGVufDB8fDB8fHww',
    },
    {
      id: '9',
      brand_name: 'PureScent',
      product_name: 'Luxury Perfume',
      category: 'cosmetics',
      discountedPrice: 54.99,
      realPrice: 79.99,
      image_link:
        'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '10',
      brand_name: 'GlowCare',
      product_name: 'Face Serum',
      category: 'cosmetics',
      discountedPrice: 18.99,
      realPrice: 25.99,
      image_link:
        'https://images.unsplash.com/photo-1564278047230-a632a9d6acf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '11',
      brand_name: 'HairGlow',
      product_name: 'Hair Serum',
      category: 'cosmetics',
      discountedPrice: 14.99,
      realPrice: 19.99,
      image_link:
        'https://plus.unsplash.com/premium_photo-1684407616836-7943cf1f3192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '12',
      brand_name: 'VitalEssence',
      product_name: 'Pineapple Drink',
      category: 'drink',
      discountedPrice: 2.99,
      realPrice: 4.49,
      image_link:
        'https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '13',
      brand_name: 'GlowCare',
      product_name: 'Body Lotion',
      category: 'cosmetics',
      discountedPrice: 9.99,
      realPrice: 14.99,
      image_link:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '14',
      brand_name: 'StridePro',
      product_name: 'Casual Shoes',
      category: 'clothing',
      discountedPrice: 44.99,
      realPrice: 64.99,
      image_link:
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '15',
      brand_name: 'TimeKeeper',
      product_name: 'Classic Watch',
      category: 'clothing',
      discountedPrice: 79.99,
      realPrice: 109.99,
      image_link:
        'https://unsplash.com/photos/person-holding-round-black-analog-watch-0iIV1goIodE',
    },
    {
      id: '16',
      brand_name: 'SoundWave',
      product_name: 'Noise-Canceling Headphones',
      category: 'clothing',
      discountedPrice: 59.99,
      realPrice: 89.99,
      image_link:
        'https://images.unsplash.com/photo-1605874952020-56b3dc0d6d03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '17',
      brand_name: 'SmileBright',
      product_name: 'Herbal Toothpaste',
      category: 'cosmetics',
      discountedPrice: 4.99,
      realPrice: 6.99,
      image_link:
        'https://images.unsplash.com/photo-1556228725-071f3b59fb98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvb3RocGFzdGV8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '18',
      brand_name: 'PureFlow',
      product_name: 'Drinking Water',
      category: 'drink',
      discountedPrice: 0.99,
      realPrice: 1.49,
      image_link:
        'https://images.unsplash.com/photo-1527751171275-7606f0903af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRhcGUlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: '19',
      brand_name: 'GlowCare',
      product_name: 'Gentle Face Wash',
      category: 'cosmetics',
      discountedPrice: 7.99,
      realPrice: 10.99,
      image_link:
        'https://images.unsplash.com/photo-1617642999901-5096f040e3b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '20',
      brand_name: 'GlowCare',
      product_name: 'Daily Face Wash',
      category: 'cosmetics',
      discountedPrice: 6.99,
      realPrice: 9.99,
      image_link:
        'https://images.unsplash.com/photo-1594633314902-8309df02dbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '21',
      brand_name: 'VitalEssence',
      product_name: 'Fruit Drink',
      category: 'drink',
      discountedPrice: 3.49,
      realPrice: 4.49,
      image_link:
        'https://images.unsplash.com/photo-1601198177916-d4fc9792b22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxwcm9kdWN0fGVufDB8fDB8fHww',
    },
    {
      id: '22',
      brand_name: 'VitalEssence',
      product_name: 'Fruit Beer',
      category: 'drink',
      discountedPrice: 2.49,
      realPrice: 3.49,
      image_link:
        'https://images.unsplash.com/photo-1551022377-2a44d63f0857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxwcm9kdWN0fGVufDB8fDB8fHww',
    },
    {
      id: '23',
      brand_name: 'VitalEssence',
      product_name: 'Fruit Juice Combo Pack',
      category: 'drink',
      discountedPrice: 9.99,
      realPrice: 12.99,
      image_link:
        'https://images.unsplash.com/photo-1568125369775-662f089b3ee3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    },
  ];

  const paginatedItems = () => {
    const itemsPerPage = 9;
    if (currentIndex + itemsPerPage < products.length) {
      return products.slice(currentIndex, currentIndex + itemsPerPage);
    } else {
      return products.slice(currentIndex, products.length);
    }
  };

  const product_items = paginatedItems();

  const next = () => {
    const itemsPerPage = 9;

    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  return (
    <section className="w-full h-screen">
      <Navbar></Navbar>
      <div className=" w-fit grid grid-cols-1  mx-auto md:grid-cols-2 lg:grid-cols-3  justify-items-center  justify-center  gap-x-14 gap-y-10 mt-10 mb-5">
        {product_items.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
}

export default App;
