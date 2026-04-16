const users = [
  { name: "Riya Sharma", email: "riya@example.com", password: "pass123" },
  { name: "Aarav Mehta", email: "aarav@example.com", password: "pass123" },
  { name: "Sanya Gupta", email: "sanya@example.com", password: "pass123" },
  { name: "Karan Singh", email: "karan@example.com", password: "pass123" },
  { name: "Ananya Kapoor", email: "ananya@example.com", password: "pass123" }
];

const shops = [
  {
    shopName: "Elegant Fabrics",
    address: "Chandni Chowk, Delhi",
    owner: "Mrs. Meena",
    shopImage: "https://images.unsplash.com/photo-1672352868475-4a8733d5409b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBzaG9wcyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    shopName: "Silk & Cotton",
    address: "Karol Bagh, Delhi",
    owner: "Mr. Rohit",
    shopImage: "https://images.unsplash.com/photo-1695060341084-b622f9533946?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpYyUyMHNob3BzJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  },
  {
    shopName: "Royal Threads",
    address: "Mumbai",
    owner: "Mrs. Priya",
    shopImage: "https://images.unsplash.com/photo-1763888476700-aaf0881361da?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhYnJpYyUyMHNob3BzJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  },
  {
    shopName: "Textile House",
    address: "Bangalore",
    owner: "Mr. Amit",
    shopImage: "https://images.unsplash.com/photo-1545206085-d0e519bdcecd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhYnJpYyUyMHNob3BzJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  },

  {
    shopName: "Lehenga Boutique",
    address: "Chandni Chowk,Delhi",
    owner: "Mrs. Simran",
    shopImage: "https://images.unsplash.com/photo-1728312169443-9dd078b3e392?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZhYnJpYyUyMHNob3BzJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  },
  {
    shopName: "Chhabra555",
    address: "Chandni Chowk , Delhi",
    owner: "Mrs. Kavita",
    shopImage: "https://content.jdmagicbox.com/v2/comp/delhi/s8/011pxx11.xx11.171005144345.g3s8/catalogue/chhabra-555-fashions-pvt-ltd-chandni-chowk-delhi-saree-retailers-2rtw956.jpg"
  },
  {
    shopName: "Indo-Western Styles",
    address: "Pune",
    owner: "Mr. Raj",
    shopImage: "https://images.unsplash.com/photo-1761549924624-6a00e5dfabb7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyZWUlMjBzaG9wc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    shopName: "Suit Central",
    address: "Mumbai",
    owner: "Mr. Vikram",
    shopImage: "https://images.unsplash.com/photo-1551201602-3f9456f0fbf8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VpdHMlMjBzaG9wfGVufDB8fDB8fHww"
  },
  {
    shopName: "Bridal Dreams",
    address: "Delhi",
    owner: "Mrs. Anjali",
    shopImage: "https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    shopName: "Fashion Hub",
    address: "Kolkata",
    owner: "Mrs. Radhika",
    shopImage: "https://images.unsplash.com/photo-1762424361791-573a591a3941?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhYnJpYyUyMHNob3BzJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  }
];


const products = [
  // Shop 1
  { name: "Silk Fabric Roll", category: "Fabric", price: 1200, images: ["https://images.unsplash.com/photo-1771098403201-8d0d32e2a062?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2lsayUyMGZhYnJpYyUyMHJvbGx8ZW58MHx8MHx8fDA%3D"], shopRef: "69bf968ef3c70f825afb3ae1" },
  { name: "Cotton Fabric Roll", category: "Fabric", price: 900, images: ["https://cdn2.zohoecommerce.com/product-images/wide-cotton1.jpg/1818778000001257483/600x600?storefront_domain=www.threadshop.in"], shopRef: "69bf968ef3c70f825afb3ae1" },
  { name: "Chiffon Fabric Roll", category: "Fabric", price: 1500, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_Wp0LbS9IQdiQdh8Be6TbOmqJEEVPcwNMg&s"], shopRef: "69bf968ef3c70f825afb3ae1" },
  { name: "Linen Fabric Roll", category: "Fabric", price: 1100, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzoongJtvGrgy1OEC6OJflSmTgBQieKyNIg&s"], shopRef: "69bf968ef3c70f825afb3ae1" },
  { name: "Velvet Fabric Roll", category: "Fabric", price: 1800, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXX-0zH9Q2M3pTQZzLPVAn8at4M77S3iq4LQ&s"], shopRef: "69bf968ef3c70f825afb3ae1" },

  // Shop 2
  { name: "Silk Roll 2", category: "Fabric", price: 1250, images: ["https://images.unsplash.com/photo-1771098403201-58cdbbd1f03f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2lsayUyMGZhYnJpYyUyMHJvbGx8ZW58MHx8MHx8fDA%3D"], shopRef: "69bf968ef3c70f825afb3ae2" },
  { name: "Cotton Roll 2", category: "Fabric", price: 950, images: ["https://image.made-in-china.com/202f0j00dVoqASiGfRgh/Hebei-Manufacturers-Cotton-Fabric-Roll-Textile-100-Cotton-245GSM-Woven-Uniform-Fabric.webp"], shopRef: "69bf968ef3c70f825afb3ae2" },
  { name: "Chiffon Roll 2", category: "Fabric", price: 1550, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5JFjdZG05D0AQdX6X4R_L-Z9OP-JaRSp1g&s"], shopRef: "69bf968ef3c70f825afb3ae2" },
  { name: "Linen Roll 2", category: "Fabric", price: 1150, images: ["https://tiimg.tistatic.com/fp/1/006/950/plain-cotton-linen-fabric-153.jpg"], shopRef: "69bf968ef3c70f825afb3ae2" },
  { name: "Velvet Roll 2", category: "Fabric", price: 1850, images: ["https://5.imimg.com/data5/SELLER/Default/2022/9/EO/FB/IK/122063534/mosha-velvet-fabric-500x500.jpeg"], shopRef: "69bf968ef3c70f825afb3ae2" },

  // Shop 3
  { name: "Silk Roll 3", category: "Fabric", price: 1220, images: ["https://images.unsplash.com/photo-1771098206724-8cf3018e2d90?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpbGslMjBmYWJyaWMlMjByb2xsfGVufDB8fDB8fHww"], shopRef: "69bf968ef3c70f825afb3ae3" },
  { name: "Cotton Roll 3", category: "Fabric", price: 980, images: ["https://poundfabrics.co.uk/cdn/shop/collections/rolls_and_bolts_81f709ef-e4a7-4673-832d-b86a3c0bdb5a.png?v=1751041309"], shopRef: "69bf968ef3c70f825afb3ae3" },
  { name: "Chiffon Roll 3", category: "Fabric", price: 1520, images: ["https://poundfabrics.co.uk/cdn/shop/files/image_c65e3ed6-5da5-4245-a043-8492e5d410c2_1200x.jpg?v=1726619141"], shopRef: "69bf968ef3c70f825afb3ae3" },
  { name: "Linen Roll 3", category: "Fabric", price: 1120, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsSoRGuBn5wMNsyurnvqUUeBhT0jalF8AOw&s"], shopRef: "69bf968ef3c70f825afb3ae3" },
  { name: "Velvet Roll 3", category: "Fabric", price: 1820, images: ["https://s.alicdn.com/@sc04/kf/H4359940ecd4e4129927dad09d26af8d2o/10m-1.5m-0.8mm-Velvet-Suede-Fabric-PVC-Synthetic-Self-Adhesive-Leather-Sticker-Roll-Faux-Artificial-Upholstery-for-Car-Interior.jpg"], shopRef: "69bf968ef3c70f825afb3ae3" },

  // Shop 4
  { name: "Silk Roll 4", category: "Fabric", price: 1210, images: ["https://media.istockphoto.com/id/2224449506/photo/a-stunning-collection-of-exquisite-silk-cloth-meticulously-crafted-with-detailed-patterns.webp?a=1&b=1&s=612x612&w=0&k=20&c=5hbA48oRoEk9PsPhDRPfClRgi6bo-SGLYgCPmE6csqA="], shopRef: "69bf968ef3c70f825afb3ae4" },
  { name: "Cotton Roll 4", category: "Fabric", price: 970, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-YBMFchfL5pdj83W4cxAYcTlfvVi6oC50Q&s"], shopRef: "69bf968ef3c70f825afb3ae4" },
  { name: "Chiffon Roll 4", category: "Fabric", price: 1510, images: ["https://tiimg.tistatic.com/fp/1/005/170/best-quality-silk-chiffon-fabric--319.jpg"], shopRef: "69bf968ef3c70f825afb3ae4" },
  { name: "Linen Roll 4", category: "Fabric", price: 1110, images: ["https://www.mh-chine.com/templates/yootheme/cache/df/bolt_linen-2-df224dec.jpeg"], shopRef: "69bf968ef3c70f825afb3ae4" },
  { name: "Velvet Roll 4", category: "Fabric", price: 1810, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1k7B9lTBWWOW99yVsDodrTJyKX4PGCdayGw&s"], shopRef: "69bf968ef3c70f825afb3ae4" },

  // Shop 5 (clothes)
  { name: "Red Lehenga", category: "Lehenga", price: 5500, images: ["https://amrut.co/cdn/shop/files/22_367fdfde-5c16-4f3e-8e35-753154d3979f.jpg?v=1736749224"], shopRef: "69bf968ef3c70f825afb3ae5" },
  { name: "Blue Saree", category: "Saree", price: 3200, images: ["https://ivalinmabia.com/cdn/shop/files/maanvi-maheswari-silk-cotton-saree-teal-blue-and-royal-sarees-888.webp?v=1735047904&width=3840"], shopRef: "69bf968ef3c70f825afb3ae5" },
  { name: "Indo-Western Dress", category: "Indo-Western", price: 4500, images: ["https://source.unsplash.com/400x400/?indowestern"], shopRef: "69bf968ef3c70f825afb3ae5" },
  { name: "Silk Suit", category: "Suit", price: 5000, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MAVF5-gZXh6jSqE3PcID0qqNnAPaOBDgjQ&s"], shopRef: "69bf968ef3c70f825afb3ae5" },
  { name: "Embroidered Lehenga", category: "Lehenga", price: 6000, images: ["https://source.unsplash.com/400x400/?lehenga"], shopRef: "69bf968ef3c70f825afb3ae5" },

  // Shop 6 (clothes)
  { name: "Green Saree", category: "Saree", price: 3100, images: ["https://source.unsplash.com/400x400/?saree"], shopRef: "69bf968ef3c70f825afb3ae6" },
  { name: "Pink Lehenga", category: "Lehenga", price: 5400, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbO9pFpE_W-ut37GTFr3grMONlt4LDuOLwQ&s"], shopRef: "69bf968ef3c70f825afb3ae6" },
  { name: "Indo-Western Gown", category: "Indo-Western", price: 4700, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CndOnoKIbiGibKHpc-eEnQmyZ0vlTCfNqw&s"], shopRef: "69bf968ef3c70f825afb3ae6" },
  { name: "Designer Suit", category: "Suit", price: 5200, images: ["https://www.libas.in/cdn/shop/files/maroon-printed-chinon-straight-suit-set-with-dupatta-95058.jpg?v=1763030271&width=1080"], shopRef: "69bf968ef3c70f825afb3ae6" },
  { name: "Orange Lehenga", category: "Lehenga", price: 5800, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzZhNU_r39Un-SLgERVI1l0WZvrdyS8toNg&s"], shopRef: "69bf968ef3c70f825afb3ae6" },

  // Shop 7 (clothes)
  { name: "Yellow Saree", category: "Saree", price: 3300, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbf6BCIGO-debUorHF8P_p4Cp2Z7-lV53pg&s"], shopRef: "69bf968ef3c70f825afb3ae7" },
  { name: "Royal Lehenga", category: "Lehenga", price: 5600, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYeH0a9PH5bAwHXBbtLGpljSqTPz3g36PrQ&s"], shopRef: "69bf968ef3c70f825afb3ae7" },
  { name: "Indo-Western Skirt", category: "Indo-Western", price: 4600, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh4sCnWNVhCDLs4BlfYNLNBPZq5KB--L7WQ&s"], shopRef: "69bf968ef3c70f825afb3ae7" },
  { name: "Silk Suit 2", category: "Suit", price: 5100, images: ["https://source.unsplash.com/400x400/?suit"], shopRef: "69bf968ef3c70f825afb3ae7" },
  { name: "Magenta Lehenga", category: "Lehenga", price: 5900, images: ["https://img.perniaspopupshop.com/catalog/product/a/m/AMRIN072557_1.jpg?impolicy=detailimageprod"], shopRef: "69bf968ef3c70f825afb3ae7" },

  // Shop 8 (clothes)
  { name: "Purple Saree", category: "Saree", price: 3400, images: ["https://www.nidhikashekhar.in/cdn/shop/files/NS_16th_2396.jpg?v=1757593304&width=2048"], shopRef: "69bf968ef3c70f825afb3ae8" },
  { name: "Pastel Lehenga", category: "Lehenga", price: 5700, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqxZC7B3Zf0FT1h9u857pX3KeiljtzN5_LQ&s"], shopRef: "69bf968ef3c70f825afb3ae8" },
  { name: "Indo-Western Top", category: "Indo-Western", price: 4800, images: ["https://source.unsplash.com/400x400/?indowestern"], shopRef: "69bf968ef3c70f825afb3ae8" },
  { name: "Grey Suit", category: "Suit", price: 5300, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYE7iRB_DUGrE4eqV2VIgoT03RsiP7r3FFyA&s"], shopRef: "69bf968ef3c70f825afb3ae8" },
  { name: "Lehenga with Embroidery", category: "Lehenga", price: 6000, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97It2SlthKTRcaNjx_RhOihDv3SMSWICwSg&s"], shopRef: "69bf968ef3c70f825afb3ae8" },

  // Shop 9 (clothes)
  { name: "Maroon Saree", category: "Saree", price: 3500, images: ["https://swtantra.com/cdn/shop/files/04_4abdb072-1264-49bd-ba98-cdb8396373bf.jpg?v=1734803827&width=2048"], shopRef: "69bf968ef3c70f825afb3ae9" },
  { name: "Peach Lehenga", category: "Lehenga", price: 5800, images: ["https://source.unsplash.com/400x400/?lehenga"], shopRef: "69bf968ef3c70f825afb3ae9" },
  { name: "Indo-Western Dress 2", category: "Indo-Western", price: 4900, images: ["https://queenscouture.in/cdn/shop/files/PSP-5072.jpg?v=1753747965&width=1946"], shopRef: "69bf968ef3c70f825afb3ae9" },
  { name: "Blue Suit", category: "Suit", price: 5400, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAA5z4Zl44Xtv1-6cbCXeY2L-erIkY-mSHQ&s"], shopRef: "69bf968ef3c70f825afb3ae9" },
  { name: "Golden Lehenga", category: "Lehenga", price: 6100, images: ["https://amrut.co/cdn/shop/files/37_008912ae-0dbf-45b2-af2b-20f3aa701af0.jpg?v=1736753024"], shopRef: "69bf968ef3c70f825afb3aea" },

  // Shop 10 (clothes)
  { name: "Silver Saree", category: "Saree", price: 3600, images: ["https://trendoye.com/cdn/shop/files/grey-designer-netborder-fancy-silk-sareeTrendOye-TSNJ-HFT-SW-1115-E_2400x.jpg?v=1710228961"], shopRef: "69bf968ef3c70f825afb3aea" },
  { name: "Light Pink Lehenga", category: "Lehenga", price: 5900, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqzNee5L63Q1g_AKh2bc9q551UXeBucKYLg&s"], shopRef: "69bf968ef3c70f825afb3aea" },
  { name: "Indo-Western Skirt 2", category: "Indo-Western", price: 5000, images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTaazE-iT8BD2kSUdaA8oMihY5HEESfcy4Ow&s"], shopRef: "69bf968ef3c70f825afb3aea" },
  { name: "Black Suit", category: "Suit", price: 5500, images: ["https://urbanstree.com/cdn/shop/products/DSC_1235.jpg?v=1756462566"], shopRef: "69bf968ef3c70f825afb3aea" },
  { name: "Lehenga with Sequins", category: "Lehenga", price: 6200, images: ["https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/6/3688lg09-161.jpg"], shopRef: "69bf968ef3c70f825afb3aea" }
];



module.exports = {users,shops,products};