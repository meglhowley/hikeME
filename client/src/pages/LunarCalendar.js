import React, { Component } from 'react'
import Nav from '../components/Nav'

export default class extends Component {
  handleClick = () => {
    this.props.history.push('/search')
  }

  componentDidMount() {
    document.body.style.background =
      "url('https://www.pixelstalk.net/wp-content/uploads/images2/Starry-Night-Desktop-Wallpapers-FREE-download.jpg')"
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
  }

  render() {
    return (
      <body>
        <div className="galaxy-container">
          <div className="celestial-calendar">
            celestial •
            <br />
            Calendar
            <br />
          </div>
          <button
            onClick={() => {
              this.props.history.push('/')
            }}
            className="galaxy-btn"
          >
            home
          </button>
          <div className="calendar-events">
            <marquee
              direction="up"
              height="600px"
              width="650px"
              scrollamount="2"
            >
              January 2, 3 - Quadrantids Meteor Shower. The Quadrantids is an
              above average shower, with up to 40 meteors per hour at its peak.
              It is thought to be produced by dust grains left behind by an
              extinct comet known as 2003 EH1, which was discovered in 2003. The
              shower runs annually from January 1-5. It peaks this year on the
              night of the 2nd and morning of the 3rd. The waning gibbous moon
              will block out most of the faintest meteors this year. But if you
              are patient, you should still be able to catch a few good ones.
              Best viewing will be from a dark location after midnight. Meteors
              will radiate from the constellation Bootes, but can appear
              anywhere in the sky.
              <br />
              <br />
              January 13 - New Moon. The Moon will located on the same side of
              the Earth as the Sun and will not be visible in the night sky.
              This phase occurs at 05:02 UTC. This is the best time of the month
              to observe faint objects such as galaxies and star clusters
              because there is no moonlight to interfere.
              <br />
              <br />
              January 24 - Mercury at Greatest Eastern Elongation. The planet
              Mercury reaches greatest eastern elongation of 18.6 degrees from
              the Sun. This is the best time to view Mercury since it will be at
              its highest point above the horizon in the evening sky. Look for
              the planet low in the western sky just after sunset.
              <br />
              <br />
              January 28 - Full Moon. The Moon will be located on the opposite
              side of the Earth as the Sun and its face will be will be fully
              illuminated. This phase occurs at 19:18 UTC. This full moon was
              known by early Native American tribes as the Wolf Moon because
              this was the time of year when hungry wolf packs howled outside
              their camps. This moon has also been know as the Old Moon and the
              Moon After Yule.
              <br />
              <br />
              February 11 - New Moon. The Moon will located on the same side of
              the Earth as the Sun and will not be visible in the night sky.
              This phase occurs at 19:08 UTC. This is the best time of the month
              to observe faint objects such as galaxies and star clusters
              because there is no moonlight to interfere.
              <br />
              <br />
              February 27 - Full Moon. The Moon will be located on the opposite
              side of the Earth as the Sun and its face will be will be fully
              illuminated. This phase occurs at 08:19 UTC. This full moon was
              known by early Native American tribes as the Snow Moon because the
              heaviest snows usually fell during this time of the year. Since
              hunting is difficult, this moon has also been known by some tribes
              as the Hunger Moon, since the harsh weather made hunting
              difficult.
              <br />
              <br />
              March 6 - Mercury at Greatest Western Elongation. The planet
              Mercury reaches greatest western elongation of 27.3 degrees from
              the Sun. This is the best time to view Mercury since it will be at
              its highest point above the horizon in the morning sky. Look for
              the planet low in the eastern sky just before sunrise.
              <br />
              <br />
              March 13 - New Moon. The Moon will located on the same side of the
              Earth as the Sun and will not be visible in the night sky. This
              phase occurs at 10:23 UTC. This is the best time of the month to
              observe faint objects such as galaxies and star clusters because
              there is no moonlight to interfere.
              <br />
              <br />
              March 20 - March Equinox. The March equinox occurs at 09:27 UTC.
              The Sun will shine directly on the equator and there will be
              nearly equal amounts of day and night throughout the world. This
              is also the first day of spring (vernal equinox) in the Northern
              Hemisphere and the first day of fall (autumnal equinox) in the
              Southern Hemisphere.
              <br />
              <br />
              March 28 - Full Moon. The Moon will be located on the opposite
              side of the Earth as the Sun and its face will be will be fully
              illuminated. This phase occurs at 18:49 UTC. This full moon was
              known by early Native American tribes as the Worm Moon because
              this was the time of year when the ground would begin to soften
              and the earthworms would reappear. This moon has also been known
              as the Crow Moon, the Crust Moon, the Sap Moon, and the Lenten
              Moon.
              <br />
              <br />
              April 12 - New Moon. The Moon will located on the same side of the
              Earth as the Sun and will not be visible in the night sky. This
              phase occurs at 02:32 UTC. This is the best time of the month to
              observe faint objects such as galaxies and star clusters because
              there is no moonlight to interfere.
              <br />
              <br />
              April 22, 23 - Lyrids Meteor Shower. The Lyrids is an average
              shower, usually producing about 20 meteors per hour at its peak.
              It is produced by dust particles left behind by comet C/1861 G1
              Thatcher, which was discovered in 1861. The shower runs annually
              from April 16-25. It peaks this year on the night of the night of
              the 22nd and morning of the 23rd. These meteors can sometimes
              produce bright dust trails that last for several seconds. The
              nearly full moon will be a problem this year. Its glare will block
              out all but the brightest meteors. But if you are patient you may
              still be able to catch a few good ones. Best viewing will be from
              a dark location after midnight. Meteors will radiate from the
              constellation Lyra, but can appear anywhere in the sky.
              <br />
              <br />
              April 27 - Full Moon, Supermoon. The Moon will be located on the
              opposite side of the Earth as the Sun and its face will be will be
              fully illuminated. This phase occurs at 03:33 UTC. This full moon
              was known by early Native American tribes as the Pink Moon because
              it marked the appearance of the moss pink, or wild ground phlox,
              which is one of the first spring flowers. This moon has also been
              known as the Sprouting Grass Moon, the Growing Moon, and the Egg
              Moon. Many coastal tribes called it the Fish Moon because this was
              the time that the shad swam upstream to spawn. This is also the
              first of three supermoons for 2021. The Moon will be near its
              closest approach to the Earth and may look slightly larger and
              brighter than usual.
              <br />
              <br />
              May 6, 7 - Eta Aquarids Meteor Shower. The Eta Aquarids is an
              above average shower, capable of producing up to 60 meteors per
              hour at its peak. Most of the activity is seen in the Southern
              Hemisphere. In the Northern Hemisphere, the rate can reach about
              30 meteors per hour. It is produced by dust particles left behind
              by comet Halley, which has been observed since ancient times. The
              shower runs annually from April 19 to May 28. It peaks this year
              on the night of May 6 and the morning of the May 7. The second
              quarter moon will block out some of the faintest meteors this
              year. But if you are patient, you should still should be able to
              catch quite a few good ones. Best viewing will be from a dark
              location after midnight. Meteors will radiate from the
              constellation Aquarius, but can appear anywhere in the sky.
              <br />
              <br />
              May 11 - New Moon. The Moon will located on the same side of the
              Earth as the Sun and will not be visible in the night sky. This
              phase occurs at 19:01 UTC. This is the best time of the month to
              observe faint objects such as galaxies and star clusters because
              there is no moonlight to interfere.
              <br />
              <br />
              May 17 - Mercury at Greatest Eastern Elongation. The planet
              Mercury reaches greatest eastern elongation of 22 degrees from the
              Sun. This is the best time to view Mercury since it will be at its
              highest point above the horizon in the evening sky. Look for the
              planet low in the western sky just after sunset.
              <br />
              <br />
              May 26 - Full Moon, Supermoon. The Moon will be located on the
              opposite side of the Earth as the Sun and its face will be will be
              fully illuminated. This phase occurs at 11:14 UTC. This full moon
              was known by early Native American tribes as the Flower Moon
              because this was the time of year when spring flowers appeared in
              abundance. This moon has also been known as the Corn Planting Moon
              and the Milk Moon. This is also the second of three supermoons for
              2021. The Moon will be near its closest approach to the Earth and
              may look slightly larger and brighter than usual.
              <br />
              <br />
              May 26 - Total Lunar Eclipse. A total lunar eclipse occurs when
              the Moon passes completely through the Earth's dark shadow, or
              umbra. During this type of eclipse, the Moon will gradually get
              darker and then take on a rusty or blood red color. The eclipse
              will be visible throughout the Pacific Ocean and parts of eastern
              Asia, Japan, Australia, and western North America. (NASA Map and
              Eclipse Information)
              <br />
              <br />
              June 10 - New Moon. The Moon will located on the same side of the
              Earth as the Sun and will not be visible in the night sky. This
              phase occurs at 10:54 UTC. This is the best time of the month to
              observe faint objects such as galaxies and star clusters because
              there is no moonlight to interfere.
              <br />
              <br />
              June 10 - Annular Solar Eclipse. An annular solar eclipse occurs
              when the Moon is too far away from the Earth to completely cover
              the Sun. This results in a ring of light around the darkened Moon.
              The Sun's corona is not visible during an annular eclipse. The
              path of this eclipse will be confined to extreme eastern Russia,
              the Arctic Ocean, western Greenland, and Canada. A partial eclipse
              will be visible in the northeastern United States, Europe, and
              most of Russia. (NASA Map and Eclipse Information) (NASA
              Interactive Google Map)
              <br />
              <br />
              June 21 - June Solstice. The June solstice occurs at 03:21 UTC.
              The North Pole of the earth will be tilted toward the Sun, which
              will have reached its northernmost position in the sky and will be
              directly over the Tropic of Cancer at 23.44 degrees north
              latitude. This is the first day of summer (summer solstice) in the
              Northern Hemisphere and the first day of winter (winter solstice)
              in the Southern Hemisphere.
              <br />
              <br />
              June 24 - Full Moon, Supermoon. The Moon will be located on the
              opposite side of the Earth as the Sun and its face will be will be
              fully illuminated. This phase occurs at 18:40 UTC. This full moon
              was known by early Native American tribes as the Strawberry Moon
              because it signaled the time of year to gather ripening fruit. It
              also coincides with the peak of the strawberry harvesting season.
              This moon has also been known as the Rose Moon and the Honey Moon.
              This is also the last of three supermoons for 2021. The Moon will
              be near its closest approach to the Earth and may look slightly
              larger and brighter than usual.
              <br />
              <br />
              July 4 - Mercury at Greatest Western Elongation. The planet
              Mercury reaches greatest western elongation of 21.6 degrees from
              the Sun. This is the best time to view Mercury since it will be at
              its highest point above the horizon in the morning sky. Look for
              the planet low in the eastern sky just before sunrise.
              <br />
              <br />
              July 10 - New Moon. The Moon will located on the same side of the
              Earth as the Sun and will not be visible in the night sky. This
              phase occurs at 01:17 UTC. This is the best time of the month to
              observe faint objects such as galaxies and star clusters because
              there is no moonlight to interfere.
              <br />
              <br />
              July 24 - Full Moon. The Moon will be located on the opposite side
              of the Earth as the Sun and its face will be will be fully
              illuminated. This phase occurs at 02:37 UTC. This full moon was
              known by early Native American tribes as the Buck Moon because the
              male buck deer would begin to grow their new antlers at this time
              of year. This moon has also been known as the Thunder Moon and the
              Hay Moon.
              <br />
              <br />
              July 28, 29 - Delta Aquarids Meteor Shower. The Delta Aquarids is
              an average shower that can produce up to 20 meteors per hour at
              its peak. It is produced by debris left behind by comets Marsden
              and Kracht. The shower runs annually from July 12 to August 23. It
              peaks this year on the night of July 28 and morning of July 29.
              The nearly full moon will be a problem this year. It's glare will
              block block most of the faintest meteors. But if you are patient,
              you should still be able to catch a few good ones. Best viewing
              will be from a dark location after midnight. Meteors will radiate
              from the constellation Aquarius, but can appear anywhere in the
              sky.
              <br />
              <br />
              August 2 - Saturn at Opposition. The ringed planet will be at its
              closest approach to Earth and its face will be fully illuminated
              by the Sun. It will be brighter than any other time of the year
              and will be visible all night long. This is the best time to view
              and photograph Saturn and its moons. A medium-sized or larger
              telescope will allow you to see Saturn's rings and a few of its
              brightest moons.
              <br />
              <br />
              August 8 - New Moon. The Moon will located on the same side of the
              Earth as the Sun and will not be visible in the night sky. This
              phase occurs at 13:51 UTC. This is the best time of the month to
              observe faint objects such as galaxies and star clusters because
              there is no moonlight to interfere.
              <br />
              <br />
              August 12, 13 - Perseids Meteor Shower. The Perseids is one of the
              best meteor showers to observe, producing up to 60 meteors per
              hour at its peak. It is produced by comet Swift-Tuttle, which was
              discovered in 1862. The Perseids are famous for producing a large
              number of bright meteors. The shower runs annually from July 17 to
              August 24. It peaks this year on the night of August 12 and the
              morning of August 13. The waxing crescent moon will set early in
              the evening, leaving dark skies for what should be an excellent
              show. Best viewing will be from a dark location after midnight.
              Meteors will radiate from the constellation Perseus, but can
              appear anywhere in the sky.
              <br />
              <br />
              August 19 - Jupiter at Opposition. The giant planet will be at its
              closest approach to Earth and its face will be fully illuminated
              by the Sun. It will be brighter than any other time of the year
              and will be visible all night long. This is the best time to view
              and photograph Jupiter and its moons. A medium-sized telescope
              should be able to show you some of the details in Jupiter's cloud
              bands. A good pair of binoculars should allow you to see Jupiter's
              four largest moons, appearing as bright dots on either side of the
              planet.
              <br />
              <br />
              August 22 - Full Moon, Blue Moon. The Moon will be located on the
              opposite side of the Earth as the Sun and its face will be will be
              fully illuminated. This phase occurs at 12:02 UTC. This full moon
              was known by early Native American tribes as the Sturgeon Moon
              because the large sturgeon fish of the Great Lakes and other major
              lakes were more easily caught at this time of year. This moon has
              also been known as the Green Corn Moon and the Grain Moon. Since
              this is the third of four full moons in this season, it is known
              as a blue moon. This rare calendar event only happens once every
              few years, giving rise to the term, “once in a blue moon.” There
              are normally only three full moons in each season of the year. But
              since full moons occur every 29.53 days, occasionally a season
              will contain 4 full moons. The extra full moon of the season is
              known as a blue moon. Blue moons occur on average once every 2.7
              years.
              <br />
              <br />
              September 7 - New Moon. The Moon will located on the same side of
              the Earth as the Sun and will not be visible in the night sky.
              This phase occurs at 00:52 UTC. This is the best time of the month
              to observe faint objects such as galaxies and star clusters
              because there is no moonlight to interfere.
              <br />
              <br />
              September 14 - Neptune at Opposition. The blue giant planet will
              be at its closest approach to Earth and its face will be fully
              illuminated by the Sun. It will be brighter than any other time of
              the year and will be visible all night long. This is the best time
              to view and photograph Neptune. Due to its extreme distance from
              Earth, it will only appear as a tiny blue dot in all but the most
              powerful telescopes.
              <br />
              <br />
              September 14 - Mercury at Greatest Eastern Elongation. The planet
              Mercury reaches greatest eastern elongation of 26.8 degrees from
              the Sun. This is the best time to view Mercury since it will be at
              its highest point above the horizon in the evening sky. Look for
              the planet low in the western sky just after sunset.
              <br />
              <br />
              September 20 - Full Moon. The Moon will be located on the opposite
              side of the Earth as the Sun and its face will be will be fully
              illuminated. This phase occurs at 23:54 UTC. This full moon was
              known by early Native American tribes as the Corn Moon because the
              corn is harvested around this time of year. This moon is also
              known as the Harvest Moon. The Harvest Moon is the full moon that
              occurs closest to the September equinox each year.
              <br />
              <br />
              September 22 - September Equinox. The September equinox occurs at
              19:11 UTC. The Sun will shine directly on the equator and there
              will be nearly equal amounts of day and night throughout the
              world. This is also the first day of fall (autumnal equinox) in
              the Northern Hemisphere and the first day of spring (vernal
              equinox) in the Southern Hemisphere.
              <br />
              <br />
              October 6 - New Moon. The Moon will located on the same side of
              the Earth as the Sun and will not be visible in the night sky.
              This phase occurs at 11:05 UTC. This is the best time of the month
              to observe faint objects such as galaxies and star clusters
              because there is no moonlight to interfere.
              <br />
              <br />
              October 7 - Draconids Meteor Shower. The Draconids is a minor
              meteor shower producing only about 10 meteors per hour. It is
              produced by dust grains left behind by comet 21P Giacobini-Zinner,
              which was first discovered in 1900. The Draconids is an unusual
              shower in that the best viewing is in the early evening instead of
              early morning like most other showers. The shower runs annually
              from October 6-10 and peaks this year on the the night of the 7th.
              This year, the nearly new moon will leave dark skies for what
              should be an excellent show. Best viewing will be in the early
              evening from a dark location far away from city lights. Meteors
              will radiate from the constellation Draco, but can appear anywhere
              in the sky.
              <br />
              <br />
              October 20 - Full Moon. The Moon will be located on the opposite
              side of the Earth as the Sun and its face will be will be fully
              illuminated. This phase occurs at 14:57 UTC. This full moon was
              known by early Native American tribes as the Hunters Moon because
              at this time of year the leaves are falling and the game is fat
              and ready to hunt. This moon has also been known as the Travel
              Moon and the Blood Moon.
              <br />
              <br />
              October 21, 22 - Orionids Meteor Shower. The Orionids is an
              average shower producing up to 20 meteors per hour at its peak. It
              is produced by dust grains left behind by comet Halley, which has
              been known and observed since ancient times. The shower runs
              annually from October 2 to November 7. It peaks this year on the
              night of October 21 and the morning of October 22. The full moon
              will be a problem this year for the Orionids. Its glare will block
              out all but the brightest meteors. But if you are patient, you
              should still be able to catch a few good ones. Best viewing will
              be from a dark location after midnight. Meteors will radiate from
              the constellation Orion, but can appear anywhere in the sky.
              <br />
              <br />
              October 25 - Mercury at Greatest Western Elongation. The planet
              Mercury reaches greatest western elongation of 18.4 degrees from
              the Sun. This is the best time to view Mercury since it will be at
              its highest point above the horizon in the morning sky. Look for
              the planet low in the eastern sky just before sunrise.
              <br />
              <br />
              October 29 - Venus at Greatest Eastern Elongation. The planet
              Venus reaches greatest eastern elongation of 47 degrees from the
              Sun. This is the best time to view Venus since it will be at its
              highest point above the horizon in the evening sky. Look for the
              bright planet in the western sky after sunset.
              <br />
              <br />
              November 4 - New Moon. The Moon will located on the same side of
              the Earth as the Sun and will not be visible in the night sky.
              This phase occurs at 21:15 UTC. This is the best time of the month
              to observe faint objects such as galaxies and star clusters
              because there is no moonlight to interfere.
              <br />
              <br />
              November 4, 5 - Taurids Meteor Shower. The Taurids is a
              long-running minor meteor shower producing only about 5-10 meteors
              per hour. It is unusual in that it consists of two separate
              streams. The first is produced by dust grains left behind by
              Asteroid 2004 TG10. The second stream is produced by debris left
              behind by Comet 2P Encke. The shower runs annually from September
              7 to December 10. It peaks this year on the the night of November
              4. The new moon will leave dark skies this year for what should be
              an excellent show. Best viewing will be just after midnight from a
              dark location far away from city lights. Meteors will radiate from
              the constellation Taurus, but can appear anywhere in the sky.
              <br />
              <br />
              November 5 - Uranus at Opposition. The blue-green planet will be
              at its closest approach to Earth and its face will be fully
              illuminated by the Sun. It will be brighter than any other time of
              the year and will be visible all night long. This is the best time
              to view Uranus. Due to its distance, it will only appear as a tiny
              blue-green dot in all but the most powerful telescopes.
              <br />
              <br />
              November 17, 18 - Leonids Meteor Shower. The Leonids is an average
              shower, producing up to 15 meteors per hour at its peak. This
              shower is unique in that it has a cyclonic peak about every 33
              years where hundreds of meteors per hour can be seen. That last of
              these occurred in 2001. The Leonids is produced by dust grains
              left behind by comet Tempel-Tuttle, which was discovered in 1865.
              The shower runs annually from November 6-30. It peaks this year on
              the night of the 17th and morning of the 18th. Unfortunately the
              nearly full moon will dominate the sky this year, blocking all but
              the brightest meteors. But if you are patient, you should still be
              able to catch a few good ones. Best viewing will be from a dark
              location after midnight. Meteors will radiate from the
              constellation Leo, but can appear anywhere in the sky.
              <br />
              <br />
              November 19 - Full Moon. The Moon will be located on the opposite
              side of the Earth as the Sun and its face will be will be fully
              illuminated. This phase occurs at 08:59 UTC. This full moon was
              known by early Native American tribes as the Beaver Moon because
              this was the time of year to set the beaver traps before the
              swamps and rivers froze. It has also been known as the Frosty Moon
              and the Dark Moon.
              <br />
              <br />
              November 19 - Partial Lunar Eclipse. A partial lunar eclipse
              occurs when the Moon passes through the Earth's partial shadow, or
              penumbra, and only a portion of it passes through the darkest
              shadow, or umbra. During this type of eclipse a part of the Moon
              will darken as it moves through the Earth's shadow. The eclipse
              will be visible throughout most of eastern Russia, Japan, the
              Pacific Ocean, North America, Mexico, Central America, and parts
              of western South America. (NASA Map and Eclipse Information)
              <br />
              <br />
              December 4 - New Moon. The Moon will located on the same side of
              the Earth as the Sun and will not be visible in the night sky.
              This phase occurs at 07:44 UTC. This is the best time of the month
              to observe faint objects such as galaxies and star clusters
              because there is no moonlight to interfere.
              <br />
              <br />
              December 4- Total Solar Eclipse. A total solar eclipse occurs when
              the moon completely blocks the Sun, revealing the Sun's beautiful
              outer atmosphere known as the corona. The path of totality will
              for this eclipse will be limited to Antarctica and the southern
              Atlantic Ocean. A partial eclipse will bee visible throughout much
              of South Africa. (NASA Map and Eclipse Information) (Interactive
              NASA Google)
              <br />
              <br />
              December 13, 14 - Geminids Meteor Shower. The Geminids is the king
              of the meteor showers. It is considered by many to be the best
              shower in the heavens, producing up to 120 multicolored meteors
              per hour at its peak. It is produced by debris left behind by an
              asteroid known as 3200 Phaethon, which was discovered in 1982. The
              shower runs annually from December 7-17. It peaks this year on the
              night of the 13th and morning of the 14th. The waxing gibbous moon
              will block out most of the fainter meteors this year. But the
              Geminids are so numerous and bright that this could still be a
              good show. Best viewing will be from a dark location after
              midnight. Meteors will radiate from the constellation Gemini, but
              can appear anywhere in the sky.
              <br />
              <br />
              December 19 - Full Moon. The Moon will be located on the opposite
              side of the Earth as the Sun and its face will be will be fully
              illuminated. This phase occurs at 04:37 UTC. This full moon was
              known by early Native American tribes as the Cold Moon because
              this is the time of year when the cold winter air settles in and
              the nights become long and dark. This moon has also been known as
              the Long Nights Moon and the Moon Before Yule.
              <br />
              <br />
              December 21 - December Solstice. The December solstice occurs at
              15:50 UTC. The South Pole of the earth will be tilted toward the
              Sun, which will have reached its southernmost position in the sky
              and will be directly over the Tropic of Capricorn at 23.44 degrees
              south latitude. This is the first day of winter (winter solstice)
              in the Northern Hemisphere and the first day of summer (summer
              solstice) in the Southern Hemisphere.
              <br />
              <br />
              December 21, 22 - Ursids Meteor Shower. The Ursids is a minor
              meteor shower producing about 5-10 meteors per hour. It is
              produced by dust grains left behind by comet Tuttle, which was
              first discovered in 1790. The shower runs annually from December
              17-25. It peaks this year on the the night of the 21st and morning
              of the 22nd. The nearly full moon will be a problem this year,
              blocking all but the brightest meteors. But if you are patient
              enough, you may still be able to catch a few good ones. Best
              viewing will be just after midnight from a dark location far away
              from city lights. Meteors will radiate from the constellation Ursa
              Minor, but can appear anywhere in the sky.
            </marquee>
          </div>
        </div>
      </body>
    )
  }
}
