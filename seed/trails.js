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
        'https://www.google.com/maps/place/Chimney+Pond+Trail,+Millinocket,+ME+04462/@44.1210673,-72.0626807,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-68.85739!2d45.91981!3m4!1s0x4cbac339f9023783:0x785cdbabea23bd6f!8m2!3d45.9200781!4d-68.8574555',
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
        'https://www.google.com/maps/place/Car+Spot/@42.370875,-74.9601129,6.46z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.35696!2d45.10346!3m4!1s0x4cb11e06c88b5f59:0xace5a99c35557d07!8m2!3d45.1034558!4d-70.356735',
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
        'https://www.google.com/maps/place/Cadillac+North+Ridge+Trail+Parking/@43.5790015,-71.9166469,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-68.22954!2d44.37854!3m4!1s0x4caebf9f9200cc7d:0xd4485d305af484d1!8m2!3d44.3785273!4d-68.2292987',
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
        'https://www.google.com/maps/place/West+Central+Franklin,+ME/@44.1023024,-72.2990446,7.42z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.55881!2d44.73154!3m4!1s0x4cb16bbafcaddcb1:0xddc421bacf6d99b6!8m2!3d44.8197885!4d-70.5809638',
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
        'https://www.google.com/maps/place/Precipice+trailhead/@43.5790015,-71.8958423,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-68.18776!2d44.34948!3m4!1s0x4caeb9323d121d83:0xec550f0ca71569db!8m2!3d44.3495642!4d-68.1879799',
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
        'https://www.google.com/maps/place/Chimney+Pond+Trail/@44.1209512,-72.0626807,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-68.85739!2d45.9197!3m4!1s0x4cbac339fa1466c7:0xad5f4eb68a7d6f14!8m2!3d45.9198459!4d-68.8573822',
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
        'https://www.google.com/maps/place/Mt.+Battie+Trailhead/@43.3170972,-71.2124895,8z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-69.07001!2d44.21655!3m4!1s0x4cadd79e3b5b6721:0xde77ed62a0aa89de!8m2!3d44.2164412!4d-69.0698409',
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
        'https://www.google.com/maps/place/Parking+lot,+Bar+Harbor,+ME+04609/@43.5803195,-71.8713387,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-68.18449!2d44.33039!3m4!1s0x4caeb94083479e97:0xf08169e77dd0b145!8m2!3d44.3298413!4d-68.1836552',
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
        'https://www.google.com/maps/place/Carrabassett+Valley,+ME+04947/@43.2262112,-73.3492101,6.49z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.34616!2d45.0459!3m4!1s0x4cb102e765f4b65d:0x53dec0d2f2928d12!8m2!3d45.0736009!4d-70.2616873',
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
        'https://www.google.com/maps/place/Ledges+Trail+-+Pleasant+Mountain/@43.1910328,-71.9023947,8z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.79742!2d44.02443!3m4!1s0x4cb3ab0781c5d1e9:0x7d356151e7b1c26b!8m2!3d44.0242218!4d-70.7976047',
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
        'https://www.google.com/maps/dir/Current+Location/45.354,-69.94032?ref=trail-action-menu-directions',
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
        'https://www.google.com/maps/place/Greenville,+ME+04441/@44.0301297,-72.4251488,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-69.73483!2d45.69092!3m4!1s0x4cba797fe73d459f:0xc63bc27106fb5c0!8m2!3d45.6978488!4d-69.7492878',
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
        'https://www.google.com/maps/place/Rangeley,+ME+04970/@44.1099847,-71.6610077,7.84z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.52725!2d44.94585!3m4!1s0x4cb117acaf2ac87b:0x4d51f409c1537b08!8m2!3d44.9458697!4d-70.5272215',
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
        'https://www.google.com/maps/place/Newry,+ME+04261/@43.8846271,-71.2759193,7.89z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.90022!2d44.4753!3m4!1s0x4cb3de91038896f5:0x378c902b5876fa91!8m2!3d44.4884245!4d-70.7885765',
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
        'https://www.google.com/maps/place/North+Oxford,+ME+04261/@44.5652686,-70.9692633,12.85z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.94786!2d44.58975!3m4!1s0x4cb15f5653fd1255:0xbbec4a9cabe9290f!8m2!3d44.5871463!4d-70.940298',
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
        'https://www.google.com/maps/place/Parking+Lot,+Hallowell+Rd,+Pownal,+ME+04069/@43.1276175,-71.7332686,8z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.17942!2d43.90024!3m4!1s0x4cb27cef13c5e6e5:0xb9edc100d1a93a55!8m2!3d43.900194!4d-70.179271',
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
        'https://www.google.com/maps/place/South+Oxford,+ME+04217/@43.3874101,-71.8309739,8z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.91455!2d44.3717!3m4!1s0x4cb3c7ab20da097b:0xdb68bf33f526cb1a!8m2!3d44.3332534!4d-70.866177',
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
        'https://www.google.com/maps/place/Seal+Harbor,+ME+04675/@43.5790015,-71.9169524,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-68.25437!2d44.322!3m4!1s0x4caebc26564b3787:0xd387a9786765d740!8m2!3d44.3222631!4d-68.2541917',
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
        'https://www.google.com/maps/place/French+Mountain/@44.214404,-71.0924362,8z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-69.92008!2d44.57458!3m4!1s0x4cb1ed5d63eac2af:0x3281ab3378cec812!8m2!3d44.5745452!4d-69.9203536',
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
        'https://www.google.com/maps/place/263+Mountain+Rd,+Harpswell,+ME+04079/@43.1360268,-71.6513425,8z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-69.94294!2d43.81427!3m4!1s0x4cad833e58847955:0xe67831e882e02015!8m2!3d43.8139987!4d-69.9429814',
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
        'https://www.google.com/maps/place/Mackworth+Island+Trail,+Falmouth,+ME+04105/@43.2620026,-70.8000454,9z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-70.23543!2d43.68925!3m4!1s0x4cb29c9453a62541:0x9bebae52a8eeb489!8m2!3d43.6894725!4d-70.235027',
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
        'https://www.google.com/maps/place/Parking+lot,+Bar+Harbor,+ME+04609/@43.5803195,-71.8713387,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-68.18417!2d44.33003!3m4!1s0x4caeb94083479e97:0xf08169e77dd0b145!8m2!3d44.3298413!4d-68.1836552',
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
        'https://www.google.com/maps/place/Blue+Hill,+ME/@43.4659021,-70.9716648,8z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-68.58313!2d44.42898!3m4!1s0x4cae8b80f2bc11f3:0xe9ada3752569070a!8m2!3d44.4177344!4d-68.6256494',
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
        'https://www.google.com/maps/place/Trailhead:+Cutler+Bold+Coast+Trail/@43.6367871,-71.3810195,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-67.15778!2d44.69868!3m4!1s0x4ca8c3b65f24e22f:0x3774b06d515f4284!8m2!3d44.6986539!4d-67.1580515',
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
        'https://www.google.com/maps/place/Grand+Manan+Island/@43.7833873,-71.1458401,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-66.78509!2d44.79921!3m4!1s0x4ca8f3325b060c19:0xde246ab8d98d251!8m2!3d44.7063915!4d-66.8157713',
      difficulty: 'moderate',
      routeType: 'Loop',
      description:
        'Whistle Beach, The Bishop, and Ashburton Head Loop is a 2.2 mile moderately trafficked loop trail located near Grand Manan, New Brunswick, Canada that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and bird watching.',
      image:
        'https://cdn-assets.alltrails.com/uploads/photo/image/19903419/extra_large_87acf2a644c015b4fd5d0e89541cdd85.jpg'
    },
    {
      name: 'Helon Taylor, Knife Edge, Cathedral, and Chimney Pond Loop',
      length: 8.1,
      elevationGain: 3897,
      location:
        'https://www.google.com/maps/place/S+Turner+Mountain+Trail,+Millinocket,+ME+04462/@44.1226245,-72.0423934,7z/data=!4m18!1m12!4m11!1m6!1m2!1s0x89e370bbdff94f5f:0x1a3a38263265fa43!2sEast+Cambridge,+Cambridge,+MA!2m2!1d-71.0773939!2d42.3686043!1m3!2m2!1d-68.858!2d45.92058!3m4!1s0x4cbac337545a7bc7:0x9b94844adab911a9!8m2!3d45.9205562!4d-68.8579888',
      difficulty: 'hard',
      routeType: 'Loop',
      description:
        'Extremely challenging trail with fantastic views along steep, loose rock piles. The Knife Edge Trail is very rugged in places - the Chimney is almost a technical climb. Users say that the Baxter Peak side of the Knife Edge is a boulder scramble.  The gap between Pamola and Chimney peaks can be very challenging because it is steep and many of the rocks you have to climb up lean in towards the gap.  These can be very dangerous in wet weather.  Proper equipment and experience are a requirement.',
      image: 'https://i.redd.it/mbs9midojag01.jpg'
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
