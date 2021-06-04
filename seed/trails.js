const db = require('../db')
const Trail = require('../models/trail')
const Comment = require('../models/comment')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const trails = [
    {
      name: 'Mount Katahdin and Hamlin Peak Loop',
      length: 10.9,
      elevationGain: 4475,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2932912.4757996458!2d-72.0626807!3d44.1210673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cbac339f9023783%3A0x785cdbabea23bd6f!2sChimney%20Pond%20Trail%2C%20Millinocket%2C%20ME%2004462!5e0!3m2!1sen!2sus!4v1622811710967!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Loop',
      description:
        'Baxter Peak is the northern terminus of the Appalachian Trail and is the high point of the state. In total you will be climbing 3 distinct mountains on this loop hike including a side trip to Chimney Pond nestled in the center of your alpine loop trip. All trail junctures have been detailed in this guide. If you want to fully appreciate Mt. Katahdin in all its glory, this is the loop hike to make. It can be done in one long day with an early start.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/30536668/large_570c08f82c5fe9735a9668e392c9516c.jpg'
    },
    {
      name: 'Mount Bigelow via Appalachian Trail and Fire Warden Trail',
      length: 12.5,
      elevationGain: 3920,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6036827.834289941!2d-74.9601129!3d42.370875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb11e06c88b5f59%3A0xace5a99c35557d07!2sCar%20Spot!5e0!3m2!1sen!2sus!4v1622812144250!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Loop',
      description:
        'Mount Bigelow via Appalachian Trail and Fire Warden Trail is a 12.5 mile moderately trafficked loop trail located near Kingfield, Maine that features a lake and is rated as difficult. The trail is primarily used for hiking, camping, bird watching, and backpacking.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/33374654/large_8548227d932e64f76820dd65b68e3763.jpg'
    },
    {
      name: 'Cadillac North Ridge Trail',
      length: 4.0,
      elevationGain: 1118,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2959690.09181717!2d-71.9166469!3d43.5790015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caebf9f9200cc7d%3A0xd4485d305af484d1!2sCadillac%20North%20Ridge%20Trail%20Parking!5e0!3m2!1sen!2sus!4v1622812242329!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Out & Back',
      description:
        "Acadia National Park charges a fee to enter. Fees are per vehicle or per motorcycle. If entering on foot, horse, or bike the fee is per person. Users can also purchase a park-specific annual pass. Please check with the park's website for current rate information. This trail goes to the highest point in Acadia National Park. To get to the start of the hike, you may need to park before a closed section of the park loop road nearest the trailhead. From there, you take the Kebo Trail for a little bit, and then there's a sign to the start of the Cadillac North Ridge Trail. You will stay on this trail until you reach the summit. This hike has a steady, gradual incline and generally takes about an hour to reach the top. There are a few sets of stone staircases. You will pass Great Hill on the way.  If you need, there is also a paved road with nice views that goes all the way up. The road is more sheltered from the wind than the trail.",
      image:
        'https://www.maineterrain.com/wp-content/uploads/2019/05/sunrise-2074431.jpg'
    },
    {
      name: 'Tumbledown Mountain Trail',
      length: 5.3,
      elevationGain: 1952,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2933843.84719894!2d-72.2990446!3d44.1023024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb16bbafcaddcb1%3A0xddc421bacf6d99b6!2sWest%20Central%20Franklin%2C%20ME!5e0!3m2!1sen!2sus!4v1622812304606!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Loop',
      description:
        'This trail is not recommended for dogs due to the presence of a ladder and multiple sections that may require you to lift your dog. Loop trail is a bit strenuous and much more technical (Hiking over large rocks and climbing up through cavernous boulders). For a fairly easy and family friendly trail, take Brook Trail up to Crater Lake. Byron road turns into a snowmobile trail in the winter.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/26531854/extra_large_e5cc93492ffb8de0652b3d8de6f3369e.jpg'
    },
    {
      name: 'Precipice, Orange and Black and Champlain North Ridge Trail Loop',
      length: 2.1,
      elevationGain: 1053,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2959690.09181717!2d-71.8958423!3d43.5790015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caeb9323d121d83%3A0xec550f0ca71569db!2sPrecipice%20trailhead!5e0!3m2!1sen!2sus!4v1622812478682!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Loop',
      description:
        "The Precipice Trail is a difficult and very steep loop trail using iron rungs and ladders on exposed cliffs providing spectacular views of Acadia National Park. The hike is not recommended during wet conditions, or if you experience vertigo; also not recommended for small children. The trail starts up steps and through some boulder scrambles. While officially a non-technical hike due to strategically placed iron rungs, ladders and rock ledges, this is really a climb that requires you to be able to navigate some tricky spots by pulling yourself up (e.g. the very first example of this might even be the hardest). If you are careful and pay attention, this will be a great and thrilling experience. Leave hiking poles behind, as you won't need them and they'll just get in the way. One of the very best short hikes in Acadia, similar to what you get on Katahdin's Knife Edge.",
      image:
        'https://www.citrusmilo.com/acadia2018/joebraun_precipicetrail01.jpg'
    },
    {
      name: 'South Turner Mountain Via Sandy Stream Pond Trail',
      length: 3.5,
      elevationGain: 1597,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2932918.2392393877!2d-72.0626807!3d44.1209512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cbac339fa1466c7%3A0xad5f4eb68a7d6f14!2sChimney%20Pond%20Trail!5e0!3m2!1sen!2sus!4v1622812531600!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Out & Back',
      description:
        'South Turner Mountain Via Sandy Stream Pond Trail is a 3.5 mile out and back trail located near Millinocket, Maine that features a lake. The trail is rated as moderate and is primarily used for hiking and running.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/23618288/extra_large_414c5fd214570811dae80cb8ed68f02a.jpg'
    },
    {
      name: 'Mount Battie Trail',
      length: 1.1,
      elevationGain: 590,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1486266.5914885558!2d-71.2124895!3d43.3170972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cadd79e3b5b6721%3A0xde77ed62a0aa89de!2sMt.%20Battie%20Trailhead!5e0!3m2!1sen!2sus!4v1622812588220!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Out & Back',
      description:
        'Front trail is a great little hike! Some scrambling needed, but really accessible to everyone. You can also DRIVE up to the top from the Camden Hills State Park (Route 1 North) side if you wish. Great view of Penobscot bay and downtown Camden. The front trail is a little off the road so not a lot of people use it. It has a very small parking lot.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/32628325/extra_large_35dca10341747e254d15d45eda135994.jpg'
    },
    {
      name: 'The Beehive Loop Trail',
      length: 1.5,
      elevationGain: 508,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2959625.303982877!2d-71.8713387!3d43.5803195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caeb94083479e97%3A0xf08169e77dd0b145!2sParking%20lot%2C%20Bar%20Harbor%2C%20ME%2004609!5e0!3m2!1sen!2sus!4v1622812632517!5m2!1sen!2sus"',
      difficulty: 'hard',
      routeType: 'Loop',
      description:
        'The Beehive Trail Loop is a must-do hike for all visitors to Acadia National Park. This popular loop offers incredible views, with some challenging rung and ladder sections. This loop starts at the Sand Beach Parking Lot, traverses over the Beehive, reaches the Bowl Pond, and then loops back on the Bowl Trail. Although the loop could technically be done in either direction, the counterclockwise way is highly recommended. Going counterclockwise, you go up the rungs and ladders, which is much easier than going down them. Also, this way you get the climb out of the way early, and the rest is smooth sailing.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/36767423/extra_large_f2b4f7127bc022249a52960a898ee1f9.jpg'
    },
    {
      name: 'Sugarloaf Mountain via Appalachian Trail',
      length: 6.1,
      elevationGain: 2299,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5953950.976047791!2d-73.3492101!3d43.2262112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb102e765f4b65d%3A0x53dec0d2f2928d12!2sCarrabassett%20Valley%2C%20ME%2004947!5e0!3m2!1sen!2sus!4v1622812671761!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Out & back',
      description:
        'Sugarloaf Mountain via Appalachian Trail is a 6.1 mile moderately trafficked out and back trail located near Kingfield, Maine that features a great forest setting and is rated as difficult. The trail is primarily used for hiking and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/30538901/extra_large_7b2629061ab14c24124be1415f3dd627.jpg'
    },
    {
      name: 'Pleasant Mountain via Ledges Trail',
      length: 3.3,
      elevationGain: 1512,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1489346.459799472!2d-71.9023947!3d43.1910328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb3ab0781c5d1e9%3A0x7d356151e7b1c26b!2sLedges%20Trail%20-%20Pleasant%20Mountain!5e0!3m2!1sen!2sus!4v1622812811913!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Out & back',
      description:
        'Pleasant Mountain via Ledges Trail is a 3.3 mile heavily trafficked out and back trail located near Denmark, Maine that features a lake and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/36568611/extra_large_1186b6bd450b39758432d2b4dc8c9b4e.jpg'
    },
    {
      name: 'Moxie Falls Trail',
      length: 1.7,
      elevationGain: 226,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946861.276885188!2d-72.6019648034016!3d43.839364643107075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb08b57755126cf%3A0xe7ddf72b7908153a!2sParking%20lot%2C%20Northeast%20Somerset%2C%20ME%2004985!5e0!3m2!1sen!2sus!4v1622812915340!5m2!1sen!2sus',
      difficulty: 'easy',
      routeType: 'Out & back',
      description:
        'Moxie Falls Trail is a 1.7 mile moderately trafficked out and back trail located near West Forks, Maine that features a waterfall and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.',
      image:
        'https://cdn.elebase.io/dbcc75a2-4b9f-4a0e-8e4b-cfa273624e10/9c64caa1-1171-4b40-bd2e-9a379eea8513-vtm6f91a3ef07a3fe7d1.jpg?i=true&q=85&w=420'
    },
    {
      name: 'Mount Kineo',
      length: 3.4,
      elevationGain: 905,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2937423.111616358!2d-72.4251488!3d44.0301297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cba797fe73d459f%3A0xc63bc27106fb5c0!2sGreenville%2C%20ME%2004441!5e0!3m2!1sen!2sus!4v1622812950702!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Loop',
      description:
        'Exciting cliffs on island surrounded by expansive lake. A wonderful hike combining mountain vistas with a lake backdrop.  Starts flat along an old road under the flint cliffs.  Flint can be gathered here.  Indian trail ascends along edge of cliff and provides stellar views and strong heart beats. The only view available from the summit is atop a very tall fire tower.  It has stairs but they are metal slats.  Those afraid of heights should avoid this hike.',
      image:
        'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/mt-kineo-1504-guy-whiteley.jpg'
    },
    {
      name: 'Saddleback Mountain via Ski Lodge',
      length: 5.9,
      elevationGain: 1742,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2933462.5842718016!2d-71.6610077!3d44.1099847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb117acaf2ac87b%3A0x4d51f409c1537b08!2sRangeley%2C%20ME%2004970!5e0!3m2!1sen!2sus!4v1622812982943!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Out & Back',
      description:
        'Saddleback Mountain via Ski Lodge is a 5.9 mile moderately trafficked out and back trail located near Rangeley, Maine that features a great forest setting and is rated as difficult. The trail is primarily used for hiking, cross country skiing, and snowshoeing. Dogs are also able to use this trail.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/33754855/extra_large_6085651ac3a72174bf271788d664ee6e.jpg'
    },
    {
      name: 'Sunday River Loop',
      length: 5.2,
      elevationGain: 1453,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2944624.853649545!2d-71.2759193!3d43.8846271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb3de91038896f5%3A0x378c902b5876fa91!2sNewry%2C%20ME%2004261!5e0!3m2!1sen!2sus!4v1622813016789!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Loop',
      description:
        'Sunday River Loop is a 5.2 mile moderately trafficked loop trail located near Newry, Maine that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, running, and nature trips and is best used from April until October.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/29088515/extra_large_0b20809da96281d5103e28a75237d91b.jpg'
    },
    {
      name: 'Old Speck Mountain Trail',
      length: 7.4,
      elevationGain: 2870,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d90961.67117173152!2d-70.9692633!3d44.5652686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb15f5653fd1255%3A0xbbec4a9cabe9290f!2sNorth%20Oxford%2C%20ME%2004261!5e0!3m2!1sen!2sus!4v1622813052933!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Out & Back',
      description:
        "Just east of the New Hampshire border, this is Maine's 4th highest mountain and 5th highest peak. It's the highest and most northeastern peak in the Mahoosuc Range of the White Mountains. This is an easily accessible mountain as it is only 4 miles from a main highway through Grafton Notch State Park. It is part of the Mahoosuc Range. You'll want the crampons as the trail is very steep in places and gets icy. There is an old firetower on top that may or may not be accessible to climb depending on the season and time of the week. ",
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/11072641/extra_large_c15316bbb93b0e097c8a845126c19624.jpg'
    },
    {
      name: 'Bradbury Mountain Summit and Northern Loop Trail',
      length: 1.4,
      elevationGain: 209,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1490893.028676168!2d-71.7332686!3d43.1276175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb27cef13c5e6e5%3A0xb9edc100d1a93a55!2sParking%20Lot%2C%20Hallowell%20Rd%2C%20Pownal%2C%20ME%2004069!5e0!3m2!1sen!2sus!4v1622813090237!5m2!1sen!2sus',
      difficulty: 'easy',
      routeType: 'Loop',
      description:
        "Bradbury Mountain is a great little peak for a few reasons - namely it is very family oriented.  It is very clean.  Easy access for parking & even camping. Upon entrance you'll see a well maintain children's play area including slides, swings and picnic tables. You can hold events there or just an impromptu cookout. There are several routes up to the peak.  The Summit Trail is the steepest route for the best work out.  It's only 0.3 miles up and is beautiful all the way.  Great spot for family photos.  After a snack at the top and some bird watching (this is a popular spot for bird watchers - lots of hawks & falcons spotted up there) and points of interest locating (the ocean - where is what town from the peak) head down the Northern Loop which is easy going down - great for expending your kids remaining energy.",
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/31802332/extra_large_40d15a0f1e59feaffc8a48c1fa9a59d8.jpg'
    },
    {
      name: 'Caribou Mountain via Bog Road',
      length: 5.6,
      elevationGain: 1961,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1484545.6565310278!2d-71.8309739!3d43.3874101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb3c7ab20da097b%3A0xdb68bf33f526cb1a!2sSouth%20Oxford%2C%20ME%2004217!5e0!3m2!1sen!2sus!4v1622813171933!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Out & Back',
      description:
        'Caribou Mountain via Bog Road is a 5.6 mile moderately trafficked out and back trail located near Bethel, Maine that offers the chance to see wildlife and is rated as difficult. The trail is primarily used for hiking, running, and nature trips and is best used from April until November. Dogs are also able to use this trail but must be kept on leash.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/30428991/extra_large_62d7f543f0f461342a427920595c14b6.jpg'
    },
    {
      name: 'Jordan Pond Full Loop Trail',
      length: 3.4,
      elevationGain: 95,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2959690.09181717!2d-71.9169524!3d43.5790015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caebc26564b3787%3A0xd387a9786765d740!2sSeal%20Harbor%2C%20ME%2004675!5e0!3m2!1sen!2sus!4v1622813211561!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Loop',
      description:
        'Great views on a lot of the walk around the lake. This trail can get crowded at points, especially on the parts where there were narrower wooden walkways for paths. Go early, as it can be difficult to find a parking spot due to its traffic. The backdrop of the pond and bubbles are beautiful as you meander through the woods along the pond. The boardwalks are unique, and outside of a couple muddy spots, a trail that is very enjoyable and easy.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/37070215/extra_large_ba1f59a4bacf61c8b2c0b4f9c83fd4b4.jpg'
    },
    {
      name: "French's Mountain Trail",
      length: 0.8,
      elevationGain: 183,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1464137.5790477607!2d-71.0924362!3d44.214404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb1ed5d63eac2af%3A0x3281ab3378cec812!2sFrench%20Mountain!5e0!3m2!1sen!2sus!4v1622813248819!5m2!1sen!2sus',
      difficulty: 'easy',
      routeType: 'Loop',
      description:
        "French Mountain, managed by the Belgrade Regional Conservation Alliance, is a great 0.8 mile interpretive trail in Rome, ME.  Bring your cell phone for an audio tour of the mountain's natural history!  From Watson Pond Road the trail immediately heads east then swings south, climbing the ridge of French Mountain (716′) to reach a rocky precipice with stunning views of Long Pond. As the trail opens up near the summit, the first views are of tiny Whittier Pond to the east with Rome Corner behind it, Mount Phillip to the northeast, and Long Pond to the southeast. The trail continues along the open rocks until its terminus above steep cliffs overlooking the northern end of Long Pond. From here you can also see Great Pond, The Mountain, and Belgrade Lakes Village. Turkey vultures usually roost in French Mountain’s rocky face and often can be seen riding the thermals overhead and looking for a meal.",
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/30516184/extra_large_f4460f6c3ac848f678681d35e7d111f6.jpg'
    },
    {
      name: 'Harpswell Cliff Trail',
      length: 2.1,
      elevationGain: 262,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1490688.04812214!2d-71.6513425!3d43.1360268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cad833e58847955%3A0xe67831e882e02015!2s263%20Mountain%20Rd%2C%20Harpswell%2C%20ME%2004079!5e0!3m2!1sen!2sus!4v1622813284485!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Loop',
      description:
        'Cliff Trail is a 2.1 mile moderately trafficked loop trail located near Harpswell, Maine that features a waterfall and is rated as moderate. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/36672380/extra_large_617157257f92c918553e94075cf754b3.jpg'
    },
    {
      name: 'Mackworth Island Hiking Trail',
      length: 1.4,
      elevationGain: 45,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d743806.7444184149!2d-70.8000454!3d43.2620026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb29c9453a62541%3A0x9bebae52a8eeb489!2sMackworth%20Island%20Trail%2C%20Falmouth%2C%20ME%2004105!5e0!3m2!1sen!2sus!4v1622813319872!5m2!1sen!2sus',
      difficulty: 'easy',
      routeType: 'Loop',
      description:
        'Mackworth Island Hiking Trail is a 1.4 mile heavily trafficked loop trail located near Falmouth, Maine that features a great forest setting and is good for all skill levels. The trail is primarily used for hiking, walking, running, and fishing and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/36401733/extra_large_6f38792138645381a749941776fe521a.jpg'
    },
    {
      name: 'Ocean Path and Gorham Mountain Loop Trail',
      length: 3.1,
      elevationGain: 580,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2959625.303982877!2d-71.8713387!3d43.5803195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caeb94083479e97%3A0xf08169e77dd0b145!2sParking%20lot%2C%20Bar%20Harbor%2C%20ME%2004609!5e0!3m2!1sen!2sus!4v1622813358283!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Loop',
      description:
        'The Ocean Path and Gorham Mountain Loop is a wonderful hike that will take users from the sandy beach along the shore of the Atlantic, over mountain ledges to end at the iconic Sand Beach. This hike will take users along the shore of Newport Cove past the powerful Thunderhole and then up over the open ledges of Gorham Mountain. Users will have beautiful ocean views along the entire route, even when coming down Gorham Mountain to the north where everyone loves to also run up the Bee Hive if users have the energy after completing the trek. After users descend back to Sand Beach spend some time out on the sand relaxing with a picnic, perhaps.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/18212692/extra_large_2d953cba5e8e6c15fb7518e34ceed9de.jpg'
    },
    {
      name: 'Blue Hill Trail',
      length: 2.0,
      elevationGain: 600,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1482621.894156266!2d-70.9716648!3d43.4659021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cae8b80f2bc11f3%3A0xe9ada3752569070a!2sBlue%20Hill%2C%20ME!5e0!3m2!1sen!2sus!4v1622813393279!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Out & Back',
      description:
        'Length and duration of trip varies, as there are many different trails to hike on including an access trail. Small man made footbridges and rock "staircase" occur during hike. People of all ages can hike Blue Hill Mountain and have fun doing it.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/19258560/extra_large_a4cebe0b3851bac2f5d449673faf6385.jpg'
    },
    {
      name: 'Black Point Brook Coastal and Inland Loop',
      length: 6.6,
      elevationGain: 557,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2956848.102500578!2d-71.3810195!3d43.6367871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca8c3b65f24e22f%3A0x3774b06d515f4284!2sTrailhead%3A%20Cutler%20Bold%20Coast%20Trail!5e0!3m2!1sen!2sus!4v1622813426276!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Loop',
      description:
        'Black Point Brook Coastal and Inland Loop is a 6.6 mile moderately trafficked loop trail located near Cutler, Maine that features a river and is rated as difficult. The trail is primarily used for hiking and backpacking. Dogs are also able to use this trail.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/36796968/extra_large_d7e7fc88aaecd8fe66f082d9a2b13d88.jpg'
    },
    {
      name: 'Whistle Beach, The Bishop, and Ashburton Head Loop',
      length: 2.2,
      elevationGain: 308,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2949624.580142001!2d-71.1458401!3d43.7833873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca8f3325b060c19%3A0xde246ab8d98d251!2sGrand%20Manan%20Island!5e0!3m2!1sen!2sus!4v1622813467559!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Loop',
      description:
        'Whistle Beach, The Bishop, and Ashburton Head Loop is a 2.2 mile moderately trafficked loop trail located near Grand Manan, New Brunswick, Canada that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and bird watching.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/19903419/extra_large_87acf2a644c015b4fd5d0e89541cdd85.jpg'
    },
    {
      name: 'Mount Katahdin via Helon Taylor, Knife Edge, Cathedral Loop',
      length: 8.1,
      elevationGain: 3897,
      location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2932835.1720657786!2d-72.0423934!3d44.1226245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cbac337545a7bc7%3A0x9b94844adab911a9!2sS%20Turner%20Mountain%20Trail%2C%20Millinocket%2C%20ME%2004462!5e0!3m2!1sen!2sus!4v1622813504672!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Loop',
      description:
        'Extremely challenging trail with fantastic views along steep, loose rock piles. The Knife Edge Trail is very rugged in places - the Chimney is almost a technical climb. Users say that the Baxter Peak side of the Knife Edge is a boulder scramble.  The gap between Pamola and Chimney peaks can be very challenging because it is steep and many of the rocks you have to climb up lean in towards the gap.  These can be very dangerous in wet weather.  Proper equipment and experience are a requirement.',
      image: 'https://i.redd.it/mbs9midojag01.jpg'
    },
    {
      name: 'Katahdin Dudley, Knife Edge, Saddle Trail Loop',
      length: 4.0,
      elevationGain: 2624,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932863.12248333!2d-72.0423934221124!3d44.12206147414507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cbac2eb565b7cd9%3A0x13cf599e9729df23!2sChimney%20Pond%20Trail%2C%20Millinocket%2C%20ME%2004462!5e0!3m2!1sen!2sus!4v1622813767461!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Loop',
      description:
        'INDEFINITE CLOSURE: As of March 2021 the Dudley trail is closed indefinitely. For more information, please visit https://baxterstatepark.org/general-info/#plan. You should plan on at least 2 hours to climb this 1.2 stretch of the Dudley trail.  It is pretty steep and very rough, as is all of Katahdin. There are only 3 ways off of Pamola - the knife edge, Heelon Taylor to roaring brook or back down the Dudley trail.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/29786191/extra_large_e228df6ef43946e7d74e55b849120865.jpg'
    },
    {
      name: 'Mount Abraham, Spaulding and Sugarloaf Traverse via Mt. Abraham and Appalachian Trail',
      length: 13.0,
      elevationGain: 4839,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1477961.5469815785!2d-71.8381806628885!3d43.65558193086748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb1055f240f05f9%3A0x2c2355030b71fbb8!2sEast%20Central%20Franklin%2C%20ME!5e0!3m2!1sen!2sus!4v1622814006015!5m2!1sen!2sus',
      difficulty: 'hard',
      routeType: 'Point to Point',
      description:
        'From Maine RT 27 in Kingfield take West Kingfield Road to Rapid Stream Road. It will turn into a dirt road and you will cross a couple of bridges. Take the right after the bridges and you should come to a t-intersection. The start of the Mt. Abraham trail is right there be careful and look for the sign. Traverse of Mt. Abraham, Spaulding and Sugarloaf. Take Mt. Abraham Trail to the AT to Spaulding and Sugarloaf. Descend via ski slopes at Sugarloaf. This is a one-way hiking, so you will need to have your car shuttle logistics dialed. Contact All points transportation in Maine if you need a car spot.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/29977741/extra_large_c9f829cf5172953780b820a890e74af7.jpg'
    },
    {
      name: 'Bradbury Mountain from The Corridor',
      length: 4.3,
      elevationGain: 600,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1490730.4295802705!2d-71.88214267617997!3d43.13428821434171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb27cb867ddb7cb%3A0x980db2646eaa34ec!2sPinelands-Bradbury%20Corridor%2C%20Pownal%2C%20ME%2004069!5e0!3m2!1sen!2sus!4v1622815716451!5m2!1sen!2sus',
      difficulty: 'easy',
      routeType: 'Loop',
      description:
        'Bradbury Mountain from The Corridor is a 4.3 mile lightly trafficked loop trail located near Pownal, Maine that features a great forest setting and is good for all skill levels. The trail is primarily used for hiking, running, and nature trips. Dogs are also able to use this trail.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/13736149/extra_large_7ac9ba0eb1da3ab81f7794dbad70f7f4.jpg'
    },
    {
      name: 'Acadia Park Loop Road',
      length: 24.5,
      elevationGain: 2047,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1479408.1861494784!2d-70.78276433033088!3d43.596773179277704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caec0053f5971d5%3A0x9206b55bca1d99c2!2sParadise%20Hill%20Rd%2C%20Bar%20Harbor%2C%20ME%2004609!5e0!3m2!1sen!2sus!4v1622816000497!5m2!1sen!2sus',
      difficulty: 'easy',
      routeType: 'Loop',
      description:
        "Acadia National Park charges a fee to enter. Fees are per vehicle or per motorcycle. If you are entering on foot, horse, or bike the fee is per person. You can also purchase a park-specific annual pass. Please check with the park's website for current rate information. Follow the official Park Loop Road in this extensive tour of all the interesting spots to stop at and explore in Acadia. This 27 mile Park Loop Road will take you to some of the best highlights of the Acadia National Park.  You will have multiple opportunities to stop and go on hikes up into the hills or along the rocky Atlantic shoreline.  There are several beaches on this loop for you to relax at and other exciting attractions for the kids on the old roads of the park.  Make sure you bring a camera and have a full day to experience this drive.",
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/36778518/extra_large_4e49d7efbce04d79a62c1bfddd3abaf1.jpg'
    },
    {
      name: 'Bar Island Trail',
      length: 2.4,
      elevationGain: 236,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959625.3024612963!2d-71.88656351761635!3d43.58031953095364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caebf7c292df653%3A0x8a95e204b5f8561b!2s17A%20Bridge%20St%2C%20Bar%20Harbor%2C%20ME%2004609!5e0!3m2!1sen!2sus!4v1622816213017!5m2!1sen!2sus',
      difficulty: 'easy',
      routeType: 'Out & Back',
      description:
        'Bar Island Trail is a 2.4 mile heavily trafficked out and back trail located near Bar Harbor, Maine that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/36781444/extra_large_862178b9e8c275b0dde9b3d07318aed2.jpg'
    },
    {
      name: 'Dorr Mountain via Wild Gardens to Schiff to Emery Path',
      length: 3.4,
      elevationGain: 1151,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959625.302461297!2d-71.88327746761635!3d43.58031953095363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caebf23220b6075%3A0x18f28384d062d7f1!2sSuier%20de%20Monts%20Rd%2C%20Bar%20Harbor%2C%20ME%2004609!5e0!3m2!1sen!2sus!4v1622816375050!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Out & Back',
      description:
        'Dorr Mountain via Wild Gardens to Schiff to Emery Path is a 3.4 mile heavily trafficked out and back trail located near Bar Harbor, Maine that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/16333153/extra_large_c9556e8024fdbc894e04409eb3286bd7.jpg'
    },
    {
      name: 'Cadillac Mountain South Ridge Trail Loop',
      length: 8.0,
      elevationGain: 2286,
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959625.3024612963!2d-71.88910671761636!3d43.58031953095364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caebbfc020d1d9b%3A0xf6b8b80c478ac179!2sCadillac%20South%20Ridge%20Trailhead!5e0!3m2!1sen!2sus!4v1622816503383!5m2!1sen!2sus',
      difficulty: 'moderate',
      routeType: 'Loop',
      description:
        'Cadillac Mountain is the tallest mountain on the eastern seaboard of the United States and is known for its spectacular views, especially at sunrise. This route begins in a parking lot near the Blackwoods Campground and is one of the longest stretches of trail on Mount Desert Island. There is also an access trail from the campground itself. The true summit is to the left where the South Ridge Trail opens onto the gravel access road. Look for two survey benchmarks established by the US Coast and Geodetic Survey in 1856 and 1954.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/37090897/extra_large_5c9d99d488b20593a80e32382503a65e.jpg'
    }
  ]
  const comments = [
    {
      trail_id: '60b6863c6cbca82492175529',
      rating: '5 stars',
      conditions: 'icy',
      comment: 'difficult but great views'
    }
  ]

  await Comment.insertMany(comments)
  console.log('Created some comments!')

  await Trail.insertMany(trails)
  console.log('Created some trails!')
}
const run = async () => {
  await main()
  db.close()
}

run()
