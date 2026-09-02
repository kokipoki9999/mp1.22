import React from 'react';
import { ShoppingCart } from 'lucide-react';

export function CatalogPage() {
  React.useEffect(() => {
    document.title = 'Catalog | Maison Pācem';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center justify-center">
              <img 
                src="/pacempp.jpg" 
                alt="Maison Pācem" 
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section - Full Width */}
        <div className="mb-8">
          <h3 className="text-sm font-bold mb-4 tracking-wide">WELCOME</h3>
          <p className="text-xs leading-relaxed max-w-4xl">
            Welcome ladies. Here is the catalog I've been raving about on my pinterest pins... and tiktoks. I thought browsing a page like this would be better and just easier than scrolling through my pins, not being sure which one of the items in the picture would be linked this time. As you know, everything here is from Amazon. <strong>Nothing below a 4-star rating.</strong> Happy shopping, happy decorating. <em>- Sayce</em>
          </p>
          <p className="text-xs italic text-gray-500 mt-2">
            *Commissions may be earned.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className="hidden md:block w-64 pr-8">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">CATÉGORIES</h3>
              <div className="space-y-2 text-sm">
                <div>"LA SÉLECTION VARIÉE"</div>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-end mb-8">
              <div className="text-sm">
                <span className="mr-4">TRIER</span>
                <select className="border-none bg-transparent text-sm">
                  <option>Most Recent</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* First Product - Tabletop Water Fountain */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/fancyfountaindecor.jpg"
                    alt="Tabletop Water Fountain"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Tabletop Water Fountain</p>
                <a 
                  href="https://www.amazon.com/Homedics-Tabletop-Water-Fountain-Soothing/dp/B000QTUJXS?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=7dd5629259de22b5b7f63a9c965ecc3e&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Second Product - Bubble Throw Blanket */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/rabbitfurthrow.png"
                    alt="The Yearly Favorite: The Bubble Throw Blanket"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Plush Throw Blanket</p>
                <a 
                  href="https://www.amazon.com/BENVWE-Blanket-Fleece-Bubble-Fluffy/dp/B0CGM57YFQ?pd_rd_w=LbhLW&content-id=amzn1.sym.679481c3-2bf4-4843-80c0-ffb319282e84%3Aamzn1.symc.c3d5766d-b606-46b8-ab07-1d9d1da0638a&pf_rd_p=679481c3-2bf4-4843-80c0-ffb319282e84&pf_rd_r=W103DQ19YNVZ8AQHX7Q3&pd_rd_wg=HWQoW&pd_rd_r=86571db8-2fd2-416e-9185-21f055141e5d&pd_rd_i=B0CGM57YFQ&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=d414ac45b70c97f71920cdfe3158591b&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Empty product containers */}
              {/* Third Product - L'Olivier */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/theolivetreefinal.png"
                    alt="L'Olivier"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Faux Olive Tree, Natural Trunk</p>
                <a 
                  href="https://www.amazon.com/Kazeila-Artificial-Office-Natural-Lifelike/dp/B0BKRFBSTF?crid=2HRCQ2K70RQSV&dib=eyJ2IjoiMSJ9.sC_u9ScCO97iF2uE4mjUTheu0-zSuN-fEY4XIdt7QyY6jO3vkM4OpmwAWBs4R5yVZUvIC4Zf8Sp85Xxz_Yhuc77pBm-Ek0idYs1YsAlKCfo.AYBHMo1VauNHY9dab4uhTkM_FiwtIw_j_INtWg8MfWk&dib_tag=se&keywords=kazeil%2Bfaux%2Btree%2Bolivier&qid=1754943935&sprefix=kazeil%2Bfaux%2Btree%2Bolivier%2B%2Caps%2C82&sr=8-6&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=71beb6d1e54b94ccc21491ab70da007b&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Fourth Product - The Basket */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/largestoragebasket.png"
                    alt="The Basket"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Large Storage Basket</p>
                <a 
                  href="https://www.amazon.com/KAKAMAY-Blanket-Baskets-storage-Laundry/dp/B09Z2SYJQD?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=7b1f7e7f221e1d5f45c2f434f888da9b&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Fifth Product - The Small Trio */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/triominivase.png"
                    alt="The Small Trio"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Matte Vase Set, 3pcs</p>
                <a 
                  href="https://www.amazon.com/Smiletag-Ceramic-Farmhouse-Bookshelf-Entryway/dp/B0BD7FG9HX?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=d8099c8e991ebda0c644a81a43a24da5&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Sixth Product - Marble Bowl */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/marblebowl.png"
                    alt="100% Natural, Heavy Marble Ruffle Bowl"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Ruffle Bowl</p>
                <a 
                  href="https://www.amazon.com/Marble-Fruit-Decorative-Ruffle-Floral/dp/B0BW7QLRXY?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=fa0df63704f80aa00921fe260f3bd8ff&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Seventh Product - Large Ceramic Rustic Vase */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/vaseluxenoir.png"
                    alt="Large Ceramic Rustic Vase"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Bronze Vase</p>
                <a 
                  href="https://www.amazon.com/Vaseking-Minimalist-Decorative-Farmhouse-Decoration/dp/B0CW2JG3JN?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=6770b4f8221cdf6f3ecd13c212483e83&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Eighth Product - Large Contemporary Mushroom Lamp */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/lampeclasse.png"
                    alt="Large, Contemporary Mushroom Lamp (Brass)"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Venus Mushroom Table Lamp</p>
                <a 
                  href="https://www.amazon.com/Brightech-Contemporary-Mushroom-Dimmable-Bedroom/dp/B0C2VT9TJY?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=570f5a4bd14f7625b9bef13f5cf24c17&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Ninth Product - Cream White Pillow Cases */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/pillowcovers.png"
                    alt="Cream White, Soft Corduroy Pillow Cases"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Corduroy Throw Pillow Covers</p>
                <a 
                  href="https://www.amazon.com/MIULEE-Corduroy-Decorative-Striped-Farmhouse/dp/B0CVVW727H?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=52a598a13c608cd7dafadeb942f7da0e&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Tenth Product - Cream White Bathroom Countertop Accessories */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/bathroomset.png"
                    alt="Cream White, Bathroom Countertop Accessories"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Bathroom Accessories Set, 4pcs</p>
                <a 
                  href="https://www.amazon.com/Ceramic-Bathroom-Accessories-Set-Pcs/dp/B0DJM6FMSP?ie=UTF8&linkCode=ll1&tag=maisonpacem05-20&linkId=b63c66b0fe29f6dea31324e7710a5c29&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Eleventh Product - Cream White, Accent Throw Pillow */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/ballaccent.png"
                    alt="Cream White, Accent Throw Pillow"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Ball Throw Pillow</p>
                <a 
                  href="https://www.amazon.com/Gerlisay-Spherical-Pillows-Cushion-Ornament/dp/B0CJ2NGZL4?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=a15c28540e48a9f3ac2a9a53c6b4f6f4&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Twelfth Product - "Swirl" Soy Wax Decor Candle */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/swirlcandle.png"
                    alt='"Swirl" Soy Wax Decor Candle'
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Sculptural Swirl Candle</p>
                <a 
                  href="https://www.amazon.com/LAWA-Swirl-Candle-Beautiful-Housewarming/dp/B0BY3WCJ1K?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=65f7ae7a207235a01f6a6436855cb755&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Thirteenth Product - Heavy Ceramic Table Lamp */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/wide-belly-table-vase.png"
                    alt="The Heart Vase"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Wide-Belly 'Heart' Vase</p>
                <a 
                  href="https://www.amazon.com/Ceramic-Vintage-Terracotta-Farmhouse-Fireplace/dp/B0GBWZWLCH?pd_rd_i=B0GBWZWLCH&pd_rd_w=t2Z0G&content-id=amzn1.sym.4a6480f2-00b3-4e33-a59d-ae768449426b&pf_rd_p=4a6480f2-00b3-4e33-a59d-ae768449426b&pf_rd_r=WSTT3CEVMNS9RNFSZK0K&pd_rd_wg=mPVwF&pd_rd_r=5ffdd193-7ff4-487d-8051-b4b8226d00eb&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=733379e917aa87859ca72844d7fccebb&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Fourteenth Product - Accent Chair */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/simplechair.png"
                    alt="Accent Chair"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Accent Chair</p>
                <a 
                  href="https://www.amazon.com/Safavieh-Collection-Portland-Pillow-Accent/dp/B08C7XV7MS?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=3b36a8250ab26e283ecb98094f5ef83d&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Fifteenth Product - Chunky Knit Throw Blanket */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img 
                    src="/chunky-knit-blanket.png"
                    alt="Chunky Knit Throw Blanket"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Chunky Knit Throw Blanket</p>
                <a 
                  href="https://www.amazon.com/Adyrescia-Chunky-Blanket-Throw-Chenille/dp/B09BC4YFJM?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=05231935b6ca4cdeb9cd4d29d1db1a83&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
              
              {/* Sixteenth Product - Irregular Flannel-Wrapped Mirror */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/funflannelmirror.png"
                    alt="Irregular Flannel-Wrapped Mirror"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Irregular Flannel-Wrapped Mirror</p>
                <a 
                  href="https://www.amazon.com/Honyee-Flannel-Wrapped-Irregular-Cloakroom/dp/B0BKGCMKJJ?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=cf8509a314881308881c2c972312b6aa&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Seventeenth Product - Scented Ribbed Pillar Candle Set */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/ribbed-pillar-candle-set.png"
                    alt="Scented Ribbed Pillar Candle Set"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Scented Pillar Candle Set, 2 pcs</p>
                <a
                  href="https://www.amazon.com/Aesthetic-Sandalwood-Minimalist-Geometric-Sculptural/dp/B0FX9L5RLQ?crid=13YKI5EU8RLYX&dib=eyJ2IjoiMSJ9.Mk_ImbgVMK-106KFLrOnAy04HptVR37jV2XI0m6K_RLcFU-ZpsP6bpNuMZBOLxKxXGahFZkbqOrHzFeWuUlN9IcWPCidlnzwe4f_2vjIt9bDeE43EyBuuzSA1J14kLd567iyjtPUiOzTUYA_vd1AhtmwuZb00RAf2NugyRZtq5x6LBGP8dabjsV4zWjFWqRkdvBggFht2LbCDYGrsxm38ak5VQX7H_8iul247gH3GabN32dTbKcRPZmhF_sIj-WnTheo5VjYIfEz4L3KeLYFV2Cd1cdgtJwLdm0-fR49FW4.0WDxi9gl2izFvbr0vQDDJ9SpZsbpayt7Ks0X3pA3sPs&dib_tag=se&keywords=lawa+hourglass+pillar+candle+-+large+beautiful+handmade+pillar+scented+soy+wax+elegant+bubble+aesthetic+candle+housewarming+gift+home+room+shelf+decor+idea+-+white+%28set+of+2%29&nsdOptOutParam=true&qid=1779398420&sprefix=%2Caps%2C246&sr=8-13&linkCode=ll2&tag=maisonpacem05-20&linkId=d0f7fbc7f8341a05b40fe7f30faa0b1c&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Eighteenth Product - Travertine Stone Candle Holders */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/candleholders.png"
                    alt="100% Travertine Stone Candle Holders From Turkey (Set of 2)"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Travertine Candle Holder Set, 2 pcs</p>
                <a
                  href="https://www.amazon.com/WORHE-Holders-Natural-Travertine-Candlestick/dp/B094QCMTJJ?crid=9GCCXL76PQJR&dib=eyJ2IjoiMSJ9.a8_by3yxuPjorhUAlbffBtoE6vIilIyDIjU1BrsJAMRwMlDYoqpD0qGuanMVkEGYNZRw_2I-361O4e5WySYvk2E54O9T6HzFT4TsMaF_FTYUI2OX5N4ZvxqJB9wPnTtJH-Ke-FtUhoctEf-H0MrL0KGnQCAI674VQsI71D0ZxKPqc1kEjhQdTogmL_eeZHencTwyA-7rqZLWGzy0tSMOEp9J7NJTibrXP_CITxu22NZwxscMAHmn1VvZmrDX8_--PtLQFux_oCqTkfSaAL1sv468axS3lurDaIPvPsMXoNM.lrR25tJDmPsnHsDodnXRE9ufGAPctREYRP9sUZnnhN4&dib_tag=se&keywords=True%2BNatural%2BTravertine%2BStone&qid=1779739506&sprefix=true%2Bnatural%2Btravertine%2Bstone%2Caps%2C114&sr=8-6&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=960c078ca8e8b0ef6f8c562f3cb17838&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Nineteenth Product - Lifelike Tulip Stems */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/tulip-stems-decor.jpg"
                    alt="Lifelike Tulip Stems"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Faux Tulips, 20 pcs</p>
                <a
                  href="https://www.amazon.com/Mandys-Flowers-Artificial-Kitchen-Decorations/dp/B09BYKKLTX?_encoding=UTF8&pd_rd_w=htAGn&content-id=amzn1.sym.a6dce754-9901-41a6-a629-a32800521c61%3Aamzn1.symc.5a16118f-86f0-44cd-8e3e-6c5f82df43d0&pf_rd_p=a6dce754-9901-41a6-a629-a32800521c61&pf_rd_r=A9JHMQBQGTJETMREH404&pd_rd_wg=MEKrJ&pd_rd_r=545995b8-45e9-404f-95fc-ee0878a2c522&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=a9103b1443c296edf65d4494e006bb38&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twentieth Product - The Vintage Mirror */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/vintage-mirror copy.jpg"
                    alt="The Vintage Mirror"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Gold Vintage Mirror</p>
                <a
                  href="https://www.amazon.com/WallBeyond-Vintage-Bathroom-Fireplace-Entryway/dp/B0DDBNYGK8?crid=F3LZYXHVCGD7&dib=eyJ2IjoiMSJ9.6hfDJ8UAD1LH6yi_5h7Uh7BIDWXAklI991xK12H9xeWRKgF2Ee-BDCJ14nrfGcuGMH87JRXAFpRNQf_xGH4GHDT4_vWx3d4CwFPLs3kT_p80S6VZ84CUA0XqUnQknejyR-2Xm-GwS-usV3Ze3sBzFQozLDsUgmuGSRNGokwPVh7hOWqxWVI4DZPusOsMCTahCviTX4M589DI8YsYEcdW2Hsic0NiTrhjx_uw_K0A19zy8s0wOb-DV-zXEv2WDHl3QYdPQHeaCo14Ho41Z2XmPLM62FcKkF1-VyB03GMhb80.ypxMs363WitH_i0G9xaIODij1F5KgT55dOplG7FfAhI&dib_tag=se&keywords=vWallBeyond%2BGold%2BVintage%2BMirror%2Bfor%2BVanity%2B22x30%2BInch%2C%2BGold%2BAntique%2BMirror%2Bwith%2BOrnate%2BFrame%2C%2BArched%2BVintage%2BWall%2Bfor%2BBathroom%2C%2BLiving%2BRoom%2C%2BFireplace%2C%2BEntryway&nsdOptOutParam=true&qid=1780343961&sprefix=vwallbeyond%2Bgold%2Bvintage%2Bmirror%2Bfor%2Bvanity%2B22x30%2Binch%2C%2Bgold%2Bantique%2Bmirror%2Bwith%2Bornate%2Bframe%2C%2Barched%2Bvintage%2Bwall%2Bfor%2Bbathroom%2C%2Bliving%2Broom%2C%2Bfireplace%2C%2Bentryway%2Caps%2C611&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=5b530e924ba33e2eba91d45ce77fb909&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twenty-First Product - Faux Silk Peonies */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/faux-silk-peonies-for-decor-bedroom-wedding.png"
                    alt="Faux Silk Peonies"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Faux Peonies</p>
                <a
                  href="https://www.amazon.com/dp/B0G5YFGNW8/ref=sspa_dk_detail_4?pd_rd_i=B0G5YFGNW8&pd_rd_w=bYNBs&content-id=amzn1.sym.af2be12d-373e-4c68-a933-d40df60554fe&pf_rd_p=af2be12d-373e-4c68-a933-d40df60554fe&pf_rd_r=5ZRRGE3ZTZDMWCEMQE3P&pd_rd_wg=r6HY1&pd_rd_r=feb3181b-8d7d-44c2-a66a-141b4b794d5f&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twenty-Second Product - Rustic Terracotta Vase */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/contemporary-rustic-decorative-vase.png"
                    alt="Rustic Terracotta Vase"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Terracotta Textured Vase</p>
                <a
                  href="https://www.amazon.com/Farmhouse-Terracotta-Vintage-Suitable-ZSHLXM/dp/B0DL9HKKH8?crid=18ZCCVVX2TQXW&dib=eyJ2IjoiMSJ9.Z92rMQc1aQ0OpND9oXYw6vLu0IcQFHhT1aCUUssoNgtMyR_Fhdyi5gXIqbYp-P43gSxnkAd0lh3eq-_usxVmetsquJ_YICx3FwlwDu7sUT8o3zZhP8_DcFAXsHxiasxuDsFU9e9cm7yav13U3oSPpIRaGurkD3dQIAcDWNHpa33ay-FALDpeX6V3jMOqRsfLnwt0noWpbnKre8C3G6viSIpG-bT1olxd9HNehGpzLrDUeLsAHfwPe1k41O7iqDqfgMnsSqGWJC16BwnC2cfe_Fj9YA3AW1B3nDere35LyjE.5dj_D7u38IJA_d4zxrceouGest9qZB2STuZU-R8irI4&dib_tag=se&keywords=aesthetic%2Bvase&qid=1782605419&sprefix=aesthetic%2Bvas%2Caps%2C150&sr=8-39&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=a93dbcb0840d9ae6ad399dbe56642eb2&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twenty-Third Product - Smoked Glass Vase */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/contemporary-clear-smoked-plant-glass-vase.png"
                    alt="Smoked Glass Vase"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Smoked Glass Vase</p>
                <a
                  href="https://www.amazon.com/GeLive-Vase-Glass-Clear-Centerpiece/dp/B0BZVN3T6D?crid=35IZ4CBJ0M7VK&dib=eyJ2IjoiMSJ9._M5Kekea99avVSy8wDaN3t8vd4FUvCG0E54mXLcQ3YgIXqKI6kECA7pOmW51687L5xmFjBvvxbdhOLJlKLudiWtkfdl8KCWS2phBAAJ66bMFLr_A7QZpsn494uN4E-arnJBHGR0PyAkSAIbLCFYwpqUr6YvdUmtILVYG3z3P5ilYmHpY0HCSLXbEem7DG6xWnl1duClWNnWDYdnzUsQGTBTEQyt2iiQMfdeV4llmTVvNkDHVGUf73xXXxSwc0aPZtasVXpBuTvs2tygYWkQvXHr77U8Ogm_afLhMEFkPXvQ.MLXkPOyrKutNcZHeH-OCguI5l8lcyXQ-b4p3letmWKE&dib_tag=se&keywords=contemporary%2Bvase&qid=1782674191&sprefix=contemporary%2Bvas%2Caps%2C148&sr=8-6&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=9b2143916657c073349a20c0ec2fa852&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twenty-Fourth Product - Sakura Branches */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/cherry-blossom-stems-decor-contemporary.png"
                    alt="Sakura Branches"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Sakura Branches</p>
                <a
                  href="https://www.amazon.com/dp/B0DRV5P78L/ref=twister_B093CNGXJW?_encoding=UTF8&th=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twenty-Fifth Product - Faux Kiku Flowers & Eucalyptus Arrangement */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/kiku-flowers-decor-minimal-contemporary.png"
                    alt="Faux Kiku Flowers & Eucalyptus Arrangement"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Faux Kiku Flowers & Eucalyptus Arrangement</p>
                <a
                  href="https://www.amazon.com/Artificial-Faux-Kiku-Flower-Chrysanthemum-Arrangements-Centerpiece/dp/B0C9DKD79H?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=e23d98fd0333c628d2a3e17acd2d728a&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twenty-Sixth Product - Set of Tall Single-Stem Vases */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/tall-black-brass-vase-duo.png"
                    alt="Set of Tall Single-Stem Vases"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Tall Single-Stem Vase Set, 2pcs</p>
                <a
                  href="https://www.amazon.com/Sziqiqi-Black-Single-Stem-Vase/dp/B0CH9F6ZWL/ref=cm_cr_arp_d_product_top?ie=UTF8&th=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twenty-Seventh Product - Stone-Look Vase Trio */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/minimalist-accent-vase-trio.png"
                    alt="Stone-Look Vase Trio"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Stone-Look Vase Set, 3pcs</p>
                <a
                  href="https://www.amazon.com/SincereLuxe-Aesthetic-Stone-Look-Minimalist-Decorative/dp/B0FKZHYLFM?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=b7a0d94092909c4b0fcb05dd1c28d2e9&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twenty-Eighth Product - Accent Sideboard */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/contemporary-buffet-sideboard.png"
                    alt="Accent Sideboard"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Brown Buffet Cabinet</p>
                <a
                  href="https://www.amazon.com/Sideboard-Cabinet-Storage-Adjustable-Entryway/dp/B0FLQD585M?pd_rd_w=ovWm9&content-id=amzn1.sym.781fe6e1-9487-4a74-b81e-5a879e5ec273%3Aamzn1.symc.c3d5766d-b606-46b8-ab07-1d9d1da0638a&pf_rd_p=781fe6e1-9487-4a74-b81e-5a879e5ec273&pf_rd_r=YQ1N4S9N25HQWF12JVPQ&pd_rd_wg=YzRKu&pd_rd_r=deaf5964-ce00-4e92-9260-9fe43956c526&pd_rd_i=B0FLQD585M&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=03bddadf28524a24af7c0c84288b997d&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Twenty-Ninth Product - Framed Wall Art Panels */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/wall-art-panels-decor.png"
                    alt="Framed Wall Art Panels"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Framed Wall Art Panels</p>
                <a
                  href="https://www.amazon.com/dp/B0GXJX8659?sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy&utm_medium=organic&content-id=amzn1.sym.953c7d66-4120-4d22-a777-f19dbfa69309&pf_rd_p=953c7d66-4120-4d22-a777-f19dbfa69309&pf_rd_r=XE940CH0M8EQRHDGJDBN&pd_rd_wg=gxLAM&pd_rd_w=goyTK&pd_rd_r=9771e01e-e8cf-490f-bbcd-906bdad40189&utm_source=Pinterest&ar_srct=C&creatorsDisableRedirect=true&ar_su=https%3A%2F%2Fa.co%2Fd%2F0eAA9RT1&ar_mt=EXACT_MATCH&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=08ae88f8522231646580a73ba7580647&language=en_US&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirtieth Product - Sculptural "Coral" Vase */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/art-deco-table-vase-decor.jpg"
                    alt='Sculptural "Coral" Vase'
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Sculptural 'Coral' Vase</p>
                <a
                  href="https://www.amazon.com/Ceramic-Decoration-Sculpture-Bohemian-Bookshelf/dp/B0D2RH6M1Y?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=8ab6b6d5f949ef2fc958e9fba0b3fe8b&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirty-First Product - Lys Calla Flowers */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/calla-lily-faux-flower-decor copy.png"
                    alt="Lys Calla Flowers"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Faux Calla Lilies</p>
                <a
                  href="https://www.amazon.com/Amore-Florals-Artificial-Centerpieces-Arrangements/dp/B0FFSFJ665?_encoding=UTF8&pd_rd_w=eapQR&content-id=amzn1.sym.a6dce754-9901-41a6-a629-a32800521c61%3Aamzn1.symc.5a16118f-86f0-44cd-8e3e-6c5f82df43d0&pf_rd_p=a6dce754-9901-41a6-a629-a32800521c61&pf_rd_r=7X0BTRFJRPQG0FSC1RQJ&pd_rd_wg=F7iV2&pd_rd_r=7a70190d-afd9-45ae-9040-2a34cfe20b99&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=2bab9d674a1a8a41821f0c6029a891ae&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirty-Second Product - Fluted TV Stand */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/modern-tv-stand.png"
                    alt="Fluted TV Stand"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Walker Edison TV Console</p>
                <a
                  href="https://www.amazon.com/Walker-Edison-Walton-Modern-Fluted-Door/dp/B0C54FL3N3?pd_rd_w=g18vP&content-id=amzn1.sym.781fe6e1-9487-4a74-b81e-5a879e5ec273%3Aamzn1.symc.c3d5766d-b606-46b8-ab07-1d9d1da0638a&pf_rd_p=781fe6e1-9487-4a74-b81e-5a879e5ec273&pf_rd_r=0QJ0QGRTRA0N1ZNP0P65&pd_rd_wg=zkPrl&pd_rd_r=fac6ee3f-55b3-4d6f-895b-53b4b0f4a9cb&pd_rd_i=B0C54FL3N3&th=1&utm_source=Pinterest&utm_medium=organic&linkCode=ll2&tag=maisonpacem05-20&linkId=e07a53dd0a00e541c4dca96a350b7a6c&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirty-Third Product - Accent Mirror */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/accent-wall-mirror-contemporary.png"
                    alt="Accent Mirror"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Gold Asymmetrical Mirror</p>
                <a
                  href="https://www.amazon.com/Bathroom-Mirror-Over-Sink-Gold-Decor/dp/B0DX6JPJ9Z?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=7131849c29e1a8550b99099c79e5764d&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirty-Fourth Product - Coral Wall Art */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/wall-decor-contemporary.png"
                    alt="Coral Wall Art"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Textured 'Coral' Wall Art</p>
                <a
                  href="https://www.amazon.com/Creative-Co-Op-Handmade-White-Shaped/dp/B0B34KK89P?ie=UTF8&linkCode=ll2&tag=maisonpacem05-20&linkId=c1da028716b2f08da2ddcd8270e96234&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirty-Fifth Product - Fluted End Table */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/end-table-decor-modern.png"
                    alt="Fluted End Table"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Fluted Side Table</p>
                <a
                  href="https://www.amazon.com/MAHYIZYI-Fluted-Pedestal-Farmhouse-Walnut-2PCS/dp/B0GJS7KN8Y?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=38e3d6faa6006ebb59cac286a80832a2&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirty-Sixth Product - Fluted Coffee Table */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/coffee-table-living-room.png"
                    alt="Fluted Coffee Table"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Fluted Coffee Table</p>
                <a
                  href="https://www.amazon.com/dp/B0GD1FNR1F?pd_rd_i=B0GD1FNR1F&pd_rd_w=N5GuP&content-id=amzn1.sym.3bc66c0a-cc61-4816-aa2d-e53327eaddb6&pf_rd_p=3bc66c0a-cc61-4816-aa2d-e53327eaddb6&pf_rd_r=SDKPV8DQT4XT7QM7TZ42&pd_rd_wg=ww9pj&pd_rd_r=46708b47-3aa6-49b1-8fb6-6da020881032&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=1e3ba0bf685a3d17ce79f3ceebbeb27f&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirty-Seventh Product - Bulb Vases */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/clear-accent-decor-vases.png"
                    alt="Bulb Vases"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Bulb Vases</p>
                <a
                  href="https://www.amazon.com/YANWE1-Flower-Bouquet-Flowers-Wedding/dp/B0FFMMCMRQ?content-id=amzn1.sym.8eb671a2-a903-4c3a-b962-ebb867a4f8f8%3Aamzn1.sym.8eb671a2-a903-4c3a-b962-ebb867a4f8f8&crid=LPBMNFG4SHX8&cv_ct_cx=small%2Bsquare%2Bclear%2Bvase&keywords=small%2Bsquare%2Bclear%2Bvase&pd_rd_i=B0FFMMCMRQ&pd_rd_r=9d4b051d-6a31-4bb3-b586-4a082c1e5991&pd_rd_w=5y385&pd_rd_wg=k8vTK&pf_rd_p=8eb671a2-a903-4c3a-b962-ebb867a4f8f8&pf_rd_r=ZV41NHNP2QGPVBGNGVN5&qid=1787692722&s=home-garden&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=small%2Bsquare%2Bclear%2Bvas%2Cgarden%2C143&sr=1-2-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&aref=BibVZjJ7WK&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=6739064744ee2ec2b96a64d9b6f2e3fe&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirty-Eighth Product - Kova Rattan Sideboard Cabinets */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/rattan-buffet-cabinets.png"
                    alt="'Kova' Rattan Sideboard Cabinets"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">'Kova' Rattan Sideboard Cabinets</p>
                <a
                  href="https://www.amazon.com/-/fr/Nathan-James-buffets-dentr%C3%A9e-Ch%C3%AAne/dp/B0BLG62LS5?th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=28a7692396efbc017170af9c2b2123cf&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Thirty-Ninth Product - Full Length Arched Mirror */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/full-lenght-arched-mirror.png"
                    alt="Full Length Arched Mirror"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Full Length Arched Mirror</p>
                <a
                  href="https://www.amazon.com/HARRITPURE-Arched-Length-Mirror-Mirrors/dp/B0D7CRPNHR?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=a3b8d025437382d095a8b24341321229&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>

              {/* Fortieth Product - Sherpa Accent Chairs */}
              <div className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                  <img
                    src="/sherpa-accent-chairs-set.png"
                    alt="Sherpa Accent Chairs, Set of 2"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1 mb-2">Sherpa Accent Chairs, Set of 2</p>
                <a
                  href="https://www.amazon.com/dp/B09J4Q34QH?asc_item-id=amzn1.ideas.2C7HVIIV6SXN1&th=1&utm_source=Pinterest&utm_medium=organic&linkCode=ll2&tag=maisonpacem05-20&linkId=0a9c963195bf0e36a2254c738a1e769f&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-black underline underline-offset-2 transition-colors hover:text-gray-600"
                >
                  Amazon Link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-16 pb-8">
          <p className="text-xs italic text-gray-500">
            Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
          </p>
        </div>
      </div>
    </div>
  );
}