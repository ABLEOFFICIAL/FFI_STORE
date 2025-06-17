import React, { useEffect, useState } from "react";
import ArrowRight from "../../components/atoms/ArrowRight";
import { NavLink } from "react-router-dom";
import { img, summary } from "framer-motion/client";
import DarkNav from "../../components/molecules/DarkNav";
import Footer from "../../components/organism/Footer";
import Sidebar from "../../components/molecules/Sidebar";

export const features = [
  {
    id: 1,
    title: "Embrace the Power of a Capsule Wardrobe",
    post1:
      "In an age of fast fashion chaos—50% off sales, dopamine-scrolling TikToks, and overflowing closets—the capsule wardrobe stands as a beacon of calm. This isn’t about deprivation; it’s about choice. You intentionally curate 25–35 timeless pieces that mix and match effortlessly—tops, bottoms, outerwear, shoes—creating endless outfits with minimal effort.Imagine waking up, opening your wardrobe, and effortlessly selecting a look because every item complements the rest. No more decision fatigue. No more impulse buying. And no more buyer's remorse.",
    post2:
      "The joy of a capsule wardrobe extends beyond efficiency. It nurtures personal style clarity. You learn what shapes, colors, and textures truly suit you. It saves money in the long run and dramatically reduces wardrobe waste. More importantly, it fosters mindful consumption—embracing quality over quantity, sustainability over wastefulness.This approach isn’t trendy—it’s transformational. When you strip back excess, what remains is your authentic style shining through.",
    img1: "/lady3.jpg",
    img2: "/lady8.avif",
    summary:
      "A capsule wardrobe empowers style simplicity: fewer, better pieces that create more outfits, bolster personal style, reduce waste, and ease daily decisions.",
    quote: "Fashion is the armor to survive the reality of everyday life.",
    quoteAuthor: "— Bill Cunningham",
  },
  {
    id: 2,
    title: "The French Minimalist: Effortless Chic Every Day",
    post1:
      "There’s a special allure to French minimalist fashion—understated elegance, subtle sophistication, and quiet confidence. Picture neutrals: crisp whites, navy stripes, camel coats, well-fitted jeans, ballet flats. Think effortless yet intentionally polished .",
    post2:
      "French minimalist dressing is about quality over quantity. A single striped Breton tee can anchor your entire look when paired with perfectly tailored trousers. A structured blazer makes basics pop. Accessories—like a leather loafer or a silk scarf—elevate simplicity into statement. It’s not about luxury brands, but building a cohesive edit of beautiful, versatile pieces. Behind the aesthetic lies a philosophy: well-made clothes respect you, the environment, and your style. This wardrobe reduces stress and boosts confidence—you always feel “put together,” without overthinking.",
    img1: "/lady1.avif",
    img2: "/lady5.avif",
    summary:
      "French minimalist style is about curated neutrals, timeless tailoring, and quality basics—creating a wardrobe that's effortlessly stylish, sustainable, and stress-free.",
    quote: "Luxury must be comfortable, otherwise it's not luxury.",
    quoteAuthor: "— Coco Chanel",
  },
  {
    id: 3,
    title: "Sustainable Fashion: How to Dress Responsibly",
    post1:
      "As the fashion industry grows, so too does its environmental footprint—water pollution, worker exploitation, landfill waste. But consumers are pushing back, and sustainable fashion is rising from the grassroots to the runways . Sustainable fashion encourages mindful wardrobe choices: investing in ethically made, eco-friendly pieces that last seasons. Secondhand shopping, fabric recycling, supporting local artisans—all are revolutionizing how we view clothes.",
    post2:
      "Start by auditing your wardrobe: mend what’s broken, donate what’s unused, and re-wear what’s undervalued. Next, fill gaps with trusted sustainable brands that align with your values—transparency in sourcing, fair wages, low-impact production. This shift is more than an aesthetic—it's a commitment. It’s about nurturing a wardrobe that reflects your taste and your ethics. And that feels powerful. Because fashion isn’t just what you wear—it’s a reflection of who you are and what you choose to stand for.",
    img1: "/lady2.avif",
    img2: "/lady7.avif",
    summary:
      "Sustainable fashion promotes ethical, eco-friendly clothing—via secondhand finds, mindful investing, and supporting brands with transparent, ethical practices.",
    quote: "Buy less, choose well, make it last.",
    quoteAuthor: "— Vivienne Westwood.",
  },
  {
    id: 4,
    title: "Fashion Tech: The Future of Wearable Innovation",
    post1:
      "Fashion is evolving at the intersection of fabric and innovation. Think smart fabrics that change color, solar-charging jackets, biometric-infused activewear… it's where couture meets code. Imagine a blazer that self-adjusts to your body temperature, or sneakers that track movement and correct your gait. Designers like Anrealage and brands like Google and Levi’s are already experimenting with interactive textiles that respond to environment and user input .",
    post2:
      "But futuristic fashion isn’t just sci-fi—it’s practical. These innovations can enhance comfort, health, and functionality. Jackets that heat via solar panels, workout tops that monitor posture, or bags with integrated GPS trackers—style meets utility in exciting ways. And it’s accessible. Indie labels are expanding, tech integrations are trickling into mainstream activewear. Soon, your wardrobe won’t just look chic—it'll feel intelligent.",
    img1: "/lady4.avif",
    img2: "/lady6.avif",
    summary:
      "Fashion-tech blends design and innovation—integrating smart fabrics, sensors, and functionality for temperature control, health tracking, and interactive style.",
    quote: "Style is a way to say who you are without having to speak.",
    quoteAuthor: " — Rachel Zoe",
  },
];
export const blogPosts = [
  {
    id: 1,
    title: "How to Style Your Wardrobe for Every Season: A Complete Guide",
    point1:
      "The fashion world spins faster than a runway model’s twirl, but your wardrobe doesn’t need to change with every trend. Mastering the art of styling for every season means blending versatility, creativity, and timeless pieces that keep you chic year-round. Whether it’s the blistering heat of summer or the frosty bite of winter, here’s how to make your wardrobe work smarter, not harder, with tips, tricks, and must-have staples to keep you looking effortlessly stylish.",
    point2title: "Why Seasonal Styling Matters",
    point2text:
      "Seasons change, and so do fashion expectations. Dressing for the weather while staying true to your personal style is a balancing act. A well-curated wardrobe saves time, reduces clutter, and ensures you’re ready for any occasion—be it a beach day or a cozy holiday party. Plus, with sustainability in vogue, reusing and restyling pieces is not just smart; it’s eco-conscious. According to McKinsey, the fashion industry is a $2.4 trillion giant, and consumers are increasingly drawn to brands that promote versatile, sustainable choices.",
    point3title: "Spring: Fresh and Floral",
    point3text:
      "Spring is all about renewal, so let your wardrobe bloom. Lightweight fabrics like cotton and linen are your go-to, paired with soft pastels or bold floral prints.",
    point4title: "Must-Have Pieces",
    arr1: [
      "A tailored trench coat for rainy days.",
      "A flowy midi dress in blush or sage green.",
      "White sneakers for casual chic.",
    ],
    point5title: "Styling Tip",
    point5text:
      "Layer a denim jacket over a floral skirt for a playful yet polished look. Add ankle boots for cooler days. Spring’s vibe is carefree—think picnics and brunch dates. Mix textures like lace and denim to stand out.",
    point6: "Sustainable Styling: The Future of Fashion",
    point6text:
      "With 2025’s focus on sustainability, rewear and restyle your pieces. Mix high and low—pair thrift finds with designer items. Social media platforms like Instagram are buzzing with sustainable fashion inspiration, showing how to remix outfits for maximum impact. Try a capsule wardrobe: 30 pieces that create 100+ outfits. It’s budget-friendly and planet-friendly.",
    summary:
      "Master seasonal styling with versatile wardrobe staples that blend fashion and sustainability.",
    author: "Bill Cunningham",
    video: "/WhatsApp Video 2025-06-11 at 01.38.09.mp4",
    img: "/lady1.avif",
  },
  {
    id: 2,
    title: "Building a Timeless Capsule Wardrobe: Your 2025 Style Guide",
    point1:
      "The fashion world can feel like a whirlwind of trends, but a capsule wardrobe keeps you grounded with a curated collection of versatile pieces that never go out of style. In 2025, it’s all about owning fewer, better items that mix and match effortlessly for any occasion. Whether you’re dressing for a boardroom meeting or a weekend getaway, a capsule wardrobe saves time, money, and the planet. Here’s your ultimate guide to building one that’s chic, sustainable, and ready for anything.",
    point2title: "Why a Capsule Wardrobe?",
    point2text:
      "A capsule wardrobe is like a Swiss Army knife for fashion—compact but endlessly functional. With just 30–40 pieces, you can create hundreds of outfits, reducing decision fatigue and closet clutter. It’s also a sustainability win: fewer purchases mean less environmental impact. A 2024 report from the Ellen MacArthur Foundation notes that extending the life of clothes by just nine months can cut carbon emissions by 20%. At [YourBrandName], we’re all about timeless pieces that make every outfit count.",
    point3title: "The Core Pieces",
    point3text:
      "Your capsule starts with essentials that work across seasons and settings. These are the building blocks of endless style.",
    point4title: "Must-Have Pieces",
    arr1: [
      "White Button-Up Shirt: Crisp and versatile, perfect for work or casual looks.",
      "High-Waisted Denim Jeans: A flattering fit for day or night.",
      "Little Black Dress (LBD): From cocktails to coffee dates, it’s a game-changer.",
    ],
    point5title: "Styling Tip",
    point5text:
      "Tuck the white shirt into jeans with a belt for casual Fridays, or pair it with the blazer for a power meeting",
    point6: "Sustainable Choices",
    point6text:
      "In 2025, sustainability is non-negotiable. Opt for eco-friendly materials like organic cotton, recycled polyester, or secondhand finds. Instagram and TikTok are buzzing with capsule wardrobe challenges, showing how to remix pieces creatively. Thrift stores or [YourBrandName]’s sustainable line offer budget-friendly options. A capsule wardrobe isn’t just about style—it’s about making conscious choices that align with a greener future.",
    summary:
      "Build a timeless capsule wardrobe with 30–40 versatile pieces for endless outfits. Core items like a white shirt, jeans, and LBD mix with seasonal add-ons like trench coats and wool sweaters. Accessories like scarves and hoops add flair. Embrace sustainability with eco-friendly materials and thrifting. Start with a closet audit and shop [YourBrandName]’s sustainable line for quality staples. Simplify your style and make every outfit count.",
    author: "Bill Cunningham",
    video: "/WhatsApp Video 2025-06-11 at 01.38.09.mp4",
    img: "/lady2.avif",
  },
  {
    id: 3,
    title: "Mastering the Art of Accessorizing: Elevate Your Look in 2025",
    point1:
      "Accessories are the secret weapon of every fashion lover—they can transform a basic outfit into a head-turning masterpiece. In 2025, it’s all about choosing pieces that add personality, versatility, and a touch of sustainable flair. From statement necklaces to sleek belts, the right accessories make your style pop without breaking the bank. Here’s your guide to mastering accessorizing, with tips and must-haves to keep you shining all year long.",
    point2title: "Why Accessories Matter",
    point2text:
      "Accessories are like the cherry on top of your outfit—they complete the look and express your vibe. A single piece can shift a casual jeans-and-tee combo into something red-carpet-worthy. Plus, they’re a sustainable way to refresh your wardrobe without buying new clothes. Social media platforms like Instagram show how influencers use bold accessories to create viral looks, proving their power in 2025’s fashion scene.",
    point3title: "Statement Jewelry",
    point3text:
      "Jewelry is your outfit’s best friend, adding sparkle and character.",
    point4title: "Must-Have Pieces",
    arr1: [
      "Chunky Gold Necklace: Perfect for layering over a dress or sweater.",
      "Hoop Earrings: Medium-sized for everyday wear, large for drama.",
      "Stackable Rings: Mix metals for a modern edge.",
    ],
    point5title: "Styling Tip",
    point5text:
      "Pair a chunky necklace with a simple white shirt for instant sophistication, or stack rings with a boho dress for festival vibes",
    point6: "Sustainable Accessorizing",
    point6text:
      "In 2025, eco-conscious accessories are trending. Opt for vegan leather bags, recycled metal jewelry, or thrifted scarves. A recent Vogue report highlights how sustainable accessories are gaining traction, with brands like [YourBrandName] leading the charge. Mix high-end and secondhand pieces for a unique, planet-friendly look. Social media is full of inspo—check TikTok for creative ways to style scarves or upcycle jewelry.",
    summary:
      "Accessories transform outfits with minimal effort. In 2025, statement necklaces, leather crossbodies, silk scarves, and strappy heels are must-haves. Balance bold pieces with simple looks and mix textures for depth. Sustainable choices like vegan leather and recycled jewelry are trending. From casual to glam, [YourBrandName]’s accessories elevate your style. Shop our collection and master the art of accessorizing today.",
    author: "Bill Cunningham",
    video: "/WhatsApp Video 2025-06-11 at 01.38.09.mp4",
    img: "/lady3.jpg",
  },
  {
    id: 4,
    title: "How to Style Your Wardrobe for Every Season: A Complete Guide",
    point1:
      "The fashion world spins faster than a runway model’s twirl, but your wardrobe doesn’t need to change with every trend. Mastering the art of styling for every season means blending versatility, creativity, and timeless pieces that keep you chic year-round. Whether it’s the blistering heat of summer or the frosty bite of winter, here’s how to make your wardrobe work smarter, not harder, with tips, tricks, and must-have staples to keep you looking effortlessly stylish.",
    point2title: "Why Seasonal Styling Matters",
    point2text:
      "Seasons change, and so do fashion expectations. Dressing for the weather while staying true to your personal style is a balancing act. A well-curated wardrobe saves time, reduces clutter, and ensures you’re ready for any occasion—be it a beach day or a cozy holiday party. Plus, with sustainability in vogue, reusing and restyling pieces is not just smart; it’s eco-conscious. According to McKinsey, the fashion industry is a $2.4 trillion giant, and consumers are increasingly drawn to brands that promote versatile, sustainable choices.",
    point3title: "Spring: Fresh and Floral",
    point3text:
      "Spring is all about renewal, so let your wardrobe bloom. Lightweight fabrics like cotton and linen are your go-to, paired with soft pastels or bold floral prints.",
    point4title: "Must-Have Pieces",
    arr1: [
      "A tailored trench coat for rainy days.",
      "A flowy midi dress in blush or sage green.",
      "White sneakers for casual chic.",
    ],
    point5title: "Styling Tip",
    point5text:
      "Layer a denim jacket over a floral skirt for a playful yet polished look. Add ankle boots for cooler days. Spring’s vibe is carefree—think picnics and brunch dates. Mix textures like lace and denim to stand out.",
    point6: "Sustainable Styling: The Future of Fashion",
    point6text:
      "With 2025’s focus on sustainability, rewear and restyle your pieces. Mix high and low—pair thrift finds with designer items. Social media platforms like Instagram are buzzing with sustainable fashion inspiration, showing how to remix outfits for maximum impact. Try a capsule wardrobe: 30 pieces that create 100+ outfits. It’s budget-friendly and planet-friendly.",
    summary:
      "Master seasonal styling with versatile wardrobe staples that blend fashion and sustainability.",
    author: "Bill Cunningham",
    video: "/WhatsApp Video 2025-06-11 at 01.38.09.mp4",
    img: "/lady4.avif",
  },
  {
    id: 5,
    title: "Building a Timeless Capsule Wardrobe: Your 2025 Style Guide",
    point1:
      "The fashion world can feel like a whirlwind of trends, but a capsule wardrobe keeps you grounded with a curated collection of versatile pieces that never go out of style. In 2025, it’s all about owning fewer, better items that mix and match effortlessly for any occasion. Whether you’re dressing for a boardroom meeting or a weekend getaway, a capsule wardrobe saves time, money, and the planet. Here’s your ultimate guide to building one that’s chic, sustainable, and ready for anything.",
    point2title: "Why a Capsule Wardrobe?",
    point2text:
      "A capsule wardrobe is like a Swiss Army knife for fashion—compact but endlessly functional. With just 30–40 pieces, you can create hundreds of outfits, reducing decision fatigue and closet clutter. It’s also a sustainability win: fewer purchases mean less environmental impact. A 2024 report from the Ellen MacArthur Foundation notes that extending the life of clothes by just nine months can cut carbon emissions by 20%. At [YourBrandName], we’re all about timeless pieces that make every outfit count.",
    point3title: "The Core Pieces",
    point3text:
      "Your capsule starts with essentials that work across seasons and settings. These are the building blocks of endless style.",
    point4title: "Must-Have Pieces",
    arr1: [
      "White Button-Up Shirt: Crisp and versatile, perfect for work or casual looks.",
      "High-Waisted Denim Jeans: A flattering fit for day or night.",
      "Little Black Dress (LBD): From cocktails to coffee dates, it’s a game-changer.",
    ],
    point5title: "Styling Tip",
    point5text:
      "Tuck the white shirt into jeans with a belt for casual Fridays, or pair it with the blazer for a power meeting",
    point6: "Sustainable Choices",
    point6text:
      "In 2025, sustainability is non-negotiable. Opt for eco-friendly materials like organic cotton, recycled polyester, or secondhand finds. Instagram and TikTok are buzzing with capsule wardrobe challenges, showing how to remix pieces creatively. Thrift stores or [YourBrandName]’s sustainable line offer budget-friendly options. A capsule wardrobe isn’t just about style—it’s about making conscious choices that align with a greener future.",
    summary:
      "Build a timeless capsule wardrobe with 30–40 versatile pieces for endless outfits. Core items like a white shirt, jeans, and LBD mix with seasonal add-ons like trench coats and wool sweaters. Accessories like scarves and hoops add flair. Embrace sustainability with eco-friendly materials and thrifting. Start with a closet audit and shop [YourBrandName]’s sustainable line for quality staples. Simplify your style and make every outfit count.",
    author: "Bill Cunningham",
    video: "/WhatsApp Video 2025-06-11 at 01.38.09.mp4",
    img: "/feel.avif",
  },
  {
    id: 6,
    title: "Mastering the Art of Accessorizing: Elevate Your Look in 2025",
    point1:
      "Accessories are the secret weapon of every fashion lover—they can transform a basic outfit into a head-turning masterpiece. In 2025, it’s all about choosing pieces that add personality, versatility, and a touch of sustainable flair. From statement necklaces to sleek belts, the right accessories make your style pop without breaking the bank. Here’s your guide to mastering accessorizing, with tips and must-haves to keep you shining all year long.",
    point2title: "Why Accessories Matter",
    point2text:
      "Accessories are like the cherry on top of your outfit—they complete the look and express your vibe. A single piece can shift a casual jeans-and-tee combo into something red-carpet-worthy. Plus, they’re a sustainable way to refresh your wardrobe without buying new clothes. Social media platforms like Instagram show how influencers use bold accessories to create viral looks, proving their power in 2025’s fashion scene.",
    point3title: "Statement Jewelry",
    point3text:
      "Jewelry is your outfit’s best friend, adding sparkle and character.",
    point4title: "Must-Have Pieces",
    arr1: [
      "Chunky Gold Necklace: Perfect for layering over a dress or sweater.",
      "Hoop Earrings: Medium-sized for everyday wear, large for drama.",
      "Stackable Rings: Mix metals for a modern edge.",
    ],
    point5title: "Styling Tip",
    point5text:
      "Pair a chunky necklace with a simple white shirt for instant sophistication, or stack rings with a boho dress for festival vibes",
    point6: "Sustainable Accessorizing",
    point6text:
      "In 2025, eco-conscious accessories are trending. Opt for vegan leather bags, recycled metal jewelry, or thrifted scarves. A recent Vogue report highlights how sustainable accessories are gaining traction, with brands like [YourBrandName] leading the charge. Mix high-end and secondhand pieces for a unique, planet-friendly look. Social media is full of inspo—check TikTok for creative ways to style scarves or upcycle jewelry.",
    summary:
      "Accessories transform outfits with minimal effort. In 2025, statement necklaces, leather crossbodies, silk scarves, and strappy heels are must-haves. Balance bold pieces with simple looks and mix textures for depth. Sustainable choices like vegan leather and recycled jewelry are trending. From casual to glam, [YourBrandName]’s accessories elevate your style. Shop our collection and master the art of accessorizing today.",
    author: "Bill Cunningham",
    video: "/WhatsApp Video 2025-06-11 at 01.38.09.mp4",
    img: "/mood.avif",
  },
  {
    id: 7,
    title: "How to Style Your Wardrobe for Every Season: A Complete Guide",
    point1:
      "The fashion world spins faster than a runway model’s twirl, but your wardrobe doesn’t need to change with every trend. Mastering the art of styling for every season means blending versatility, creativity, and timeless pieces that keep you chic year-round. Whether it’s the blistering heat of summer or the frosty bite of winter, here’s how to make your wardrobe work smarter, not harder, with tips, tricks, and must-have staples to keep you looking effortlessly stylish.",
    point2title: "Why Seasonal Styling Matters",
    point2text:
      "Seasons change, and so do fashion expectations. Dressing for the weather while staying true to your personal style is a balancing act. A well-curated wardrobe saves time, reduces clutter, and ensures you’re ready for any occasion—be it a beach day or a cozy holiday party. Plus, with sustainability in vogue, reusing and restyling pieces is not just smart; it’s eco-conscious. According to McKinsey, the fashion industry is a $2.4 trillion giant, and consumers are increasingly drawn to brands that promote versatile, sustainable choices.",
    point3title: "Spring: Fresh and Floral",
    point3text:
      "Spring is all about renewal, so let your wardrobe bloom. Lightweight fabrics like cotton and linen are your go-to, paired with soft pastels or bold floral prints.",
    point4title: "Must-Have Pieces",
    arr1: [
      "A tailored trench coat for rainy days.",
      "A flowy midi dress in blush or sage green.",
      "White sneakers for casual chic.",
    ],
    point5title: "Styling Tip",
    point5text:
      "Layer a denim jacket over a floral skirt for a playful yet polished look. Add ankle boots for cooler days. Spring’s vibe is carefree—think picnics and brunch dates. Mix textures like lace and denim to stand out.",
    point6: "Sustainable Styling: The Future of Fashion",
    point6text:
      "With 2025’s focus on sustainability, rewear and restyle your pieces. Mix high and low—pair thrift finds with designer items. Social media platforms like Instagram are buzzing with sustainable fashion inspiration, showing how to remix outfits for maximum impact. Try a capsule wardrobe: 30 pieces that create 100+ outfits. It’s budget-friendly and planet-friendly.",
    summary:
      "Master seasonal styling with versatile wardrobe staples that blend fashion and sustainability.",
    author: "Bill Cunningham",
    video: "/WhatsApp Video 2025-06-11 at 01.38.09.mp4",
    img: "/sit.jpg",
  },
  {
    id: 8,
    title: "Building a Timeless Capsule Wardrobe: Your 2025 Style Guide",
    point1:
      "The fashion world can feel like a whirlwind of trends, but a capsule wardrobe keeps you grounded with a curated collection of versatile pieces that never go out of style. In 2025, it’s all about owning fewer, better items that mix and match effortlessly for any occasion. Whether you’re dressing for a boardroom meeting or a weekend getaway, a capsule wardrobe saves time, money, and the planet. Here’s your ultimate guide to building one that’s chic, sustainable, and ready for anything.",
    point2title: "Why a Capsule Wardrobe?",
    point2text:
      "A capsule wardrobe is like a Swiss Army knife for fashion—compact but endlessly functional. With just 30–40 pieces, you can create hundreds of outfits, reducing decision fatigue and closet clutter. It’s also a sustainability win: fewer purchases mean less environmental impact. A 2024 report from the Ellen MacArthur Foundation notes that extending the life of clothes by just nine months can cut carbon emissions by 20%. At [YourBrandName], we’re all about timeless pieces that make every outfit count.",
    point3title: "The Core Pieces",
    point3text:
      "Your capsule starts with essentials that work across seasons and settings. These are the building blocks of endless style.",
    point4title: "Must-Have Pieces",
    arr1: [
      "White Button-Up Shirt: Crisp and versatile, perfect for work or casual looks.",
      "High-Waisted Denim Jeans: A flattering fit for day or night.",
      "Little Black Dress (LBD): From cocktails to coffee dates, it’s a game-changer.",
    ],
    point5title: "Styling Tip",
    point5text:
      "Tuck the white shirt into jeans with a belt for casual Fridays, or pair it with the blazer for a power meeting",
    point6: "Sustainable Choices",
    point6text:
      "In 2025, sustainability is non-negotiable. Opt for eco-friendly materials like organic cotton, recycled polyester, or secondhand finds. Instagram and TikTok are buzzing with capsule wardrobe challenges, showing how to remix pieces creatively. Thrift stores or [YourBrandName]’s sustainable line offer budget-friendly options. A capsule wardrobe isn’t just about style—it’s about making conscious choices that align with a greener future.",
    summary:
      "Build a timeless capsule wardrobe with 30–40 versatile pieces for endless outfits. Core items like a white shirt, jeans, and LBD mix with seasonal add-ons like trench coats and wool sweaters. Accessories like scarves and hoops add flair. Embrace sustainability with eco-friendly materials and thrifting. Start with a closet audit and shop [YourBrandName]’s sustainable line for quality staples. Simplify your style and make every outfit count.",
    author: "Bill Cunningham",
    video: "/WhatsApp Video 2025-06-11 at 01.38.09.mp4",
    img: "/step.jpg",
  },
  {
    id: 9,
    title: "Mastering the Art of Accessorizing: Elevate Your Look in 2025",
    point1:
      "Accessories are the secret weapon of every fashion lover—they can transform a basic outfit into a head-turning masterpiece. In 2025, it’s all about choosing pieces that add personality, versatility, and a touch of sustainable flair. From statement necklaces to sleek belts, the right accessories make your style pop without breaking the bank. Here’s your guide to mastering accessorizing, with tips and must-haves to keep you shining all year long.",
    point2title: "Why Accessories Matter",
    point2text:
      "Accessories are like the cherry on top of your outfit—they complete the look and express your vibe. A single piece can shift a casual jeans-and-tee combo into something red-carpet-worthy. Plus, they’re a sustainable way to refresh your wardrobe without buying new clothes. Social media platforms like Instagram show how influencers use bold accessories to create viral looks, proving their power in 2025’s fashion scene.",
    point3title: "Statement Jewelry",
    point3text:
      "Jewelry is your outfit’s best friend, adding sparkle and character.",
    point4title: "Must-Have Pieces",
    arr1: [
      "Chunky Gold Necklace: Perfect for layering over a dress or sweater.",
      "Hoop Earrings: Medium-sized for everyday wear, large for drama.",
      "Stackable Rings: Mix metals for a modern edge.",
    ],
    point5title: "Styling Tip",
    point5text:
      "Pair a chunky necklace with a simple white shirt for instant sophistication, or stack rings with a boho dress for festival vibes",
    point6: "Sustainable Accessorizing",
    point6text:
      "In 2025, eco-conscious accessories are trending. Opt for vegan leather bags, recycled metal jewelry, or thrifted scarves. A recent Vogue report highlights how sustainable accessories are gaining traction, with brands like [YourBrandName] leading the charge. Mix high-end and secondhand pieces for a unique, planet-friendly look. Social media is full of inspo—check TikTok for creative ways to style scarves or upcycle jewelry.",
    summary:
      "Accessories transform outfits with minimal effort. In 2025, statement necklaces, leather crossbodies, silk scarves, and strappy heels are must-haves. Balance bold pieces with simple looks and mix textures for depth. Sustainable choices like vegan leather and recycled jewelry are trending. From casual to glam, [YourBrandName]’s accessories elevate your style. Shop our collection and master the art of accessorizing today.",
    author: "Bill Cunningham",
    video: "/WhatsApp Video 2025-06-11 at 01.38.09.mp4",
    img: "/elegant-handfan.webp",
  },
];

const Blog = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showBlogs, setShowBlogs] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % features.length;
        return nextIndex;
      });
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const handleCLick = () => {
    setSelectedIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % features.length;
      return nextIndex;
    });
  };
  const visibleBlog = showBlogs ? blogPosts : blogPosts.slice(0, 6);
  const handleSeeMore = () => {
    setShowBlogs((prev) => !prev);
  };
  return (
    <div className="">
      <DarkNav />
      <Sidebar />
      {/* features */}
      {features && (
        <>
          <section className="w-screen m-auto h-[50vh] overflow-auto">
            <div className="flex w-max">
              {features.map((ft, idx) => {
                return selectedIndex === idx ? (
                  <NavLink
                    to={`/featureBlog/${ft.id}`}
                    key={ft.id}
                    style={{ backgroundImage: `url('${ft.img1}')` }}
                    className="h-[49vh] w-screen bg-center bg-cover text-[#f7f1e8] relative"
                  >
                    <div className="bg-linear-to-b from-neutral-900/0 via-neutral-900/50  to-neutral-900/50 absolute left-0 top-0 w-full h-full flex justify-between items-end  px-4 py-3">
                      <div className="w-[80%] flex flex-col gap-4">
                        <h2 className="font-semibold text-2xl">{ft.title}</h2>
                        <p className="text-base font-medium">
                          {ft.summary.slice(0, 100)}...
                        </p>
                      </div>
                    </div>
                  </NavLink>
                ) : null;
              })}
            </div>
          </section>
          <div className="flex justify-around w-[90%] mx-auto items-center">
            <div className="w-6 h-4"></div>
            {/* try looping balls */}
            <div className="w-18 m-auto mt-3 flex justify-between items-center">
              {features.map((_, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center w-2 h-2 bg-[#4a4741] rounded-full"
                >
                  {selectedIndex === idx ? (
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  ) : null}
                </div>
              ))}
            </div>
            <span>
              <ArrowRight
                onclick={handleCLick}
                classname={
                  "size-10 p-2 bg-[#4a4741] text-[#f7f1e8] rounded-full"
                }
              />
            </span>
          </div>
        </>
      )}
      {/* blog news */}
      <section className="px-5 pb-10">
        <h1 className="text-3xl font-extralight pt-20">Recent Blog Posts</h1>
        <div className="grid grid-cols-1">
          {visibleBlog &&
            visibleBlog.map((blog) => {
              return (
                <NavLink
                  to={`/blog-details/${blog.id}`}
                  key={blog.id}
                  className="flex flex-col gap-8 py-10"
                >
                  <img
                    src={blog.img}
                    className="rounded-2xl w-full max-h-[40vh] object-cover object-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="flex flex-col gap-3 w-[94%]">
                    <h2 className="text-2xl">{blog.title}</h2>
                    <p>{blog.summary.slice(0, 50)}...</p>
                  </div>
                </NavLink>
              );
            })}
        </div>
        <button
          onClick={handleSeeMore}
          className="bg-[#4a4741] text-[#f7f1e8] text-sm rounded-3xl px-5 py-3 block ml-auto"
        >
          {showBlogs ? "see Less" : "see more"}
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
/* f7f1e8 */
/* 4a4741 */
