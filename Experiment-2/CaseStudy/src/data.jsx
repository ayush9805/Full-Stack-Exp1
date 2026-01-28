// src/data.js
export const ROLE_DATA = {
  // --- ENGINEERING & DEVOPS ---
  engineering: {
    label: "DevOps & Engineering",
    icon: "Code",
    description: "High-performance machines for heavy compilation, virtualization, and full-stack development.",
    items: [
      {
        id: 'eng_1',
        title: 'MacBook Pro 16" M3 Max',
        subtitle: 'Apple Flagship Workstation',
        price: '$3,999',
        description: "The ultimate machine for full-stack development. Handles Docker containers, heavy compilation, and virtual environments effortlessly.",
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80',
        specs: ['M3 Max (16-core)', '96GB Unified Memory', '2TB NVMe SSD', '16.2" XDR (120Hz)', '22hr Battery', '3x Thunderbolt 4'],
        color: '#3b82f6'
      },
      {
        id: 'eng_2',
        title: 'Dell XPS 15',
        subtitle: 'Linux Developer Edition',
        price: '$2,650',
        description: "A developer-first machine featuring official Ubuntu support, a premium aluminum build, and a high-resolution infinity-edge display.",
        image: 'https://m.media-amazon.com/images/I/719CAihgtTL.jpg',
        specs: ['Intel i9-13900H', '32GB DDR5 RAM', '1TB Gen4 SSD', '15.6" OLED 3.5K', 'NVIDIA RTX 4050', 'Ubuntu 22.04 LTS'],
        color: '#60a5fa' 
      },
      {
        id: 'eng_3',
        title: 'ThinkPad P16 Gen 2',
        subtitle: 'Mobile Workstation',
        price: '$3,200',
        description: "Desktop-class performance in a portable chassis. Certified for ISV applications and built to run complex backend microservices.",
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=80',
        specs: ['Intel i9-13980HX', '128GB ECC RAM', '4TB RAID 0', 'RTX 4000 Ada', '4K OLED Touch', 'ISV Certified'],
        color: '#1d4ed8'
      },
      {
        id: 'eng_4',
        title: 'Samsung Galaxy Book3 Ultra',
        subtitle: 'Ultra-Thin Performance',
        price: '$2,400',
        description: "Ultra-thin, ultra-light, yet incredibly powerful. Features a stunning AMOLED display that reduces eye strain.",
        image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=80',
        specs: ['Intel Core i9-13900H', '32GB LPDDR5', '1TB SSD', '16" 3K AMOLED', 'RTX 4070', '1.79kg Ultralight'],
        color: '#2563eb'
      }
    ]
  },

  // --- CREATIVE & DESIGN ---
  creative: {
    label: "Media and Production",
    icon: "Brush",
    description: "UI/UX, video editing, color-critical work, and studio setups.",
    items: [
      {
        id: 'des_1',
        title: 'Mac Studio + Display',
        subtitle: 'Professional Studio Setup',
        price: '$4,200',
        description: "Extremely accurate displays (P3 / AdobeRGB). Optimized for Final Cut, Adobe Suite, and DaVinci Resolve.",
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80',
        specs: ['M2 Ultra (24-core)', '128GB Unified RAM', '4TB SSD', '27" 5K Retina', '10Gb Ethernet', 'Silent Cooling'],
        color: '#a855f7'
      },
      {
        id: 'des_2',
        title: 'Surface Laptop Studio 2',
        subtitle: 'Hybrid Convertible',
        price: '$2,499',
        description: "Features touchscreen + pen support. Ideal for Figma, Illustrator, Photoshop, and concept art.",
        image: 'https://m.media-amazon.com/images/I/61vqI0vw94L._AC_SL1500_.jpg',
        specs: ['Intel i7-13700H', '64GB RAM', 'RTX 4060', '14.4" 120Hz Touch', 'Surface Pen 2', 'Dynamic Woven Hinge'],
        color: '#d8b4fe'
      },
      {
        id: 'des_3',
        title: 'ASUS ProArt Studiobook',
        subtitle: '3D Render Workstation',
        price: '$4,500',
        description: "Powered by RTX 4090 GPUs with high-refresh OLED displays. Features strong cooling for long renders.",
        image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=1000&q=80',
        specs: ['Intel i9-13980HX', '64GB DDR5', 'RTX 4070 8GB', '16" OLED 3.2K', 'ASUS Dial Control', 'Color Calibrated'],
        color: '#7e22ce'
      },
      {
        id: 'des_4',
        title: 'Dell XPS 16 OLED',
        subtitle: 'Cinema Grade Laptop',
        price: '$3,200',
        description: "OLED precision for color grading. 4K+ resolution ensuring pixel-perfect accuracy for high-end video production.",
        image: 'https://i.pcmag.com/imagery/reviews/04x4MxMTbqOwi2Q7Q1e5V6K-2.fit_scale.size_1028x578.v1708123401.jpg',
        specs: ['Intel Core Ultra 9', '32GB LPDDR5x', 'RTX 4070', '16.3" 4K+ OLED', 'Glass Touchpad', 'Quad Speakers'],
        color: '#c084fc'
      }
    ]
  },

  // --- GAMING & HIGH PERFORMANCE ---
  gaming: {
    label: "Gaming",
    icon: "SportsEsports",
    description: "Raw graphical power for AAA gaming, streaming, and GPU-intensive tasks.",
    items: [
      {
        id: 'gam_1',
        title: 'Razer Blade 16',
        subtitle: 'High-Performance OLED',
        price: '$3,400',
        description: "The perfect balance of power and portability, featuring a stunning 240Hz OLED panel for competitive gaming.",
        image: 'https://m.media-amazon.com/images/I/61fK50nQiTL._AC_UF1000,1000_QL80_.jpg',
        specs: ['Intel i9-14900HX', 'RTX 4090 (175W)', '32GB DDR5 5600', '16" Dual-Mode Mini-LED', 'CNC Aluminum', 'Chroma RGB'],
        color: '#f43f5e'
      },
      {
        id: 'gam_2',
        title: 'ASUS ROG Zephyrus G14',
        subtitle: 'Compact Powerhouse',
        price: '$2,100',
        description: "Anime Matrix capability with raw Ryzen power in a compact 14-inch form factor. Ideal for travel.",
        image: 'https://images.hindustantimes.com/tech/img/2024/06/04/1600x900/asusssss_1717529843464_1717529850549.jpg',
        specs: ['Ryzen 9 8945HS', 'RTX 4070', '32GB LPDDR5X', '14" 3K OLED 120Hz', '1.5kg Weight', 'AniMe Matrix'],
        color: '#fb7185'
      },
      {
        id: 'gam_3',
        title: 'Custom Liquid Cooled PC',
        subtitle: 'Extreme Desktop Config',
        price: '$7,200',
        description: "Maximum thermal headroom for sustained overclocking and silent operation under load.",
        image: 'https://i.pcmag.com/imagery/reviews/043DROGFihmSgG7S6LUb006-12.fit_lim.size_1050x.jpg',
        specs: ['Intel i9-14900KS', 'RTX 4090 Liquid', '64GB DDR5 7200MHz', '2TB Gen5 SSD', 'Hyper-Loop Cooling', '1200W Platinum PSU'],
        color: '#be123c'
      },
      {
        id: 'gam_4',
        title: 'Alienware Aurora R16',
        subtitle: 'Premium Gaming Tower',
        price: '$3,800',
        description: "Iconic design meeting industrial-grade cooling for the ultimate battlestation.",
        image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/aa16250/media-gallery/laptop-alienware-aa16250nt-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3589&hei=2503&qlt=100,1&resMode=sharp2&size=3589,2503&chrss=full&imwidth=5000',
        specs: ['Intel i9-14900KF', 'RTX 4090 24GB', '64GB Dual Channel', '2TB NVMe', 'Cryo-Tech Liquid', 'Clear Side Panel'],
        color: '#fda4af'
      }
    ]
  }
};