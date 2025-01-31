import { create } from "./services/product/create.mjs";

const products = [
  {
    name: "Wireless Bluetooth Earbuds",
    description:
      "High-quality noise-canceling earbuds with 20 hours of battery life.",
  },
  {
    name: "Smartphone Stand",
    description: "Adjustable aluminum stand for hands-free smartphone usage.",
  },
  {
    name: "Gaming Keyboard",
    description:
      "Mechanical keyboard with RGB backlighting and anti-ghosting keys.",
  },
  {
    name: "4K Smart TV",
    description:
      "Ultra HD 55-inch smart TV with built-in streaming apps and voice control.",
  },
  {
    name: "Stainless Steel Water Bottle",
    description:
      "Leak-proof, insulated bottle that keeps drinks hot or cold for hours.",
  },
  {
    name: "Wireless Charging Pad",
    description:
      "Fast wireless charger compatible with iPhone and Android devices.",
  },
  {
    name: "Laptop Cooling Pad",
    description:
      "Adjustable cooling pad with dual fans to prevent overheating.",
  },
  {
    name: "Smartwatch",
    description: "Fitness-tracking smartwatch with heart rate monitor and GPS.",
  },
  {
    name: "Portable Power Bank",
    description: "10,000mAh power bank for charging devices on the go.",
  },
  {
    name: "Noise Cancelling Headphones",
    description:
      "Over-ear headphones with active noise cancellation and premium sound quality.",
  },
  {
    name: "Electric Toothbrush",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes.",
  },
  {
    name: "Cordless Vacuum Cleaner",
    description:
      "Lightweight vacuum with powerful suction and long battery life.",
  },
  {
    name: "Smart Home Security Camera",
    description:
      "1080p indoor security camera with motion detection and night vision.",
  },
  {
    name: "LED Desk Lamp",
    description:
      "Dimmable LED lamp with touch controls and adjustable brightness.",
  },
  {
    name: "Ergonomic Office Chair",
    description:
      "Adjustable office chair with lumbar support and breathable mesh.",
  },
  {
    name: "Electric Kettle",
    description:
      "1.5L stainless steel kettle with auto shut-off and fast boiling.",
  },
  {
    name: "USB-C Hub",
    description:
      "Multi-port USB-C adapter with HDMI, USB 3.0, and SD card reader.",
  },
  {
    name: "Smart Light Bulb",
    description:
      "Wi-Fi-enabled smart bulb compatible with Alexa and Google Assistant.",
  },
  {
    name: "Air Purifier",
    description: "HEPA air purifier with 3-speed fan and odor elimination.",
  },
  {
    name: "Car Phone Mount",
    description:
      "Dashboard and windshield phone mount with 360-degree rotation.",
  },
  {
    name: "Yoga Mat",
    description:
      "Non-slip, eco-friendly yoga mat with extra cushioning for comfort.",
  },
  {
    name: "Electric Hair Clipper",
    description: "Rechargeable hair clipper with multiple length attachments.",
  },
  {
    name: "Coffee Grinder",
    description: "Electric burr coffee grinder with adjustable grind settings.",
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI settings.",
  },
  {
    name: "Portable Speaker",
    description:
      "Waterproof Bluetooth speaker with deep bass and 12-hour battery life.",
  },
  {
    name: "Robot Vacuum",
    description:
      "Self-charging robotic vacuum with smart navigation and voice control.",
  },
  {
    name: "Standing Desk",
    description:
      "Height-adjustable standing desk with sturdy frame and spacious tabletop.",
  },
  {
    name: "Mechanical Pencil Set",
    description:
      "Precision mechanical pencils with refillable lead and erasers.",
  },
  {
    name: "Smart Plug",
    description: "Wi-Fi smart plug for remote control of home appliances.",
  },
  {
    name: "Portable Blender",
    description: "USB rechargeable blender for smoothies and shakes on the go.",
  },
  {
    name: "Adjustable Dumbbells",
    description: "Pair of adjustable dumbbells with quick weight selection.",
  },
  {
    name: "Indoor Plant Set",
    description:
      "Set of 3 low-maintenance indoor plants in stylish ceramic pots.",
  },
  {
    name: "Electric Heated Blanket",
    description:
      "Soft fleece heated blanket with adjustable temperature settings.",
  },
  {
    name: "Smart Thermostat",
    description: "Wi-Fi programmable thermostat with energy-saving features.",
  },
  {
    name: "Men's Running Shoes",
    description: "Breathable, lightweight running shoes with cushioned sole.",
  },
  {
    name: "Women's Yoga Pants",
    description:
      "High-waisted, stretchable yoga pants with moisture-wicking fabric.",
  },
  {
    name: "Portable Air Compressor",
    description: "Cordless air compressor for inflating car and bike tires.",
  },
  {
    name: "Electric Shaver",
    description:
      "Waterproof electric shaver with precision blades for a smooth shave.",
  },
  {
    name: "Smart Door Lock",
    description: "Keyless entry smart lock with fingerprint and remote access.",
  },
  {
    name: "Pet Water Fountain",
    description: "Automatic pet water dispenser with filtration system.",
  },
  {
    name: "Smart Notebook",
    description: "Reusable digital notebook with cloud storage integration.",
  },
  {
    name: "Fitness Tracker",
    description:
      "Waterproof fitness tracker with step counter and sleep monitor.",
  },
  {
    name: "Bike Phone Holder",
    description: "Secure and adjustable phone mount for bicycles.",
  },
  {
    name: "Wi-Fi Extender",
    description: "Dual-band Wi-Fi extender for improved wireless coverage.",
  },
  {
    name: "Electric Wine Opener",
    description: "Battery-operated wine opener with foil cutter.",
  },
  {
    name: "Adjustable Laptop Stand",
    description:
      "Foldable laptop stand with ergonomic design and cooling vents.",
  },
  {
    name: "Smart Mirror",
    description: "Touchscreen LED vanity mirror with adjustable brightness.",
  },
  {
    name: "Compact Tool Kit",
    description: "Comprehensive tool set for home repairs and DIY projects.",
  },
  {
    name: "USB Desk Fan",
    description: "Portable USB-powered desk fan with quiet operation.",
  },
  {
    name: "Memory Foam Pillow",
    description: "Ergonomic memory foam pillow for neck and back support.",
  },
  {
    name: "Cordless Electric Screwdriver",
    description: "Rechargeable screwdriver with multiple drill bits.",
  },
  {
    name: "Mini Projector",
    description: "Portable mini projector with 1080p support and HDMI input.",
  },
  {
    name: "Smart Scale",
    description: "Digital body scale with BMI and smartphone app sync.",
  },
  {
    name: "Hair Dryer Brush",
    description:
      "All-in-one styling tool for drying, curling, and straightening.",
  },
  {
    name: "Foldable Treadmill",
    description: "Compact treadmill with speed adjustment and LCD display.",
  },
];

const seed = async () => {
  await Promise.all(products.map((product) => create(product)));
};

seed();
