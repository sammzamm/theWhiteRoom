exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('observational_data').del()
    .then(function() {
      // Inserts seed entries
      return knex('observational_data').insert([{
          id: 1,
          owner_id: 1,
          date_of_outing: '1-27-17',
          location: 'RMNP',
          sub_region: 'McHenrys',
          aspect: 'South East Face',
          leeward: true,
          crossloading: true,
          slope_angle: 45,
          elevation: 12000,
          loose_dry: true,
          loose_wet: false,
          wet_slab: false,
          storm_slab: false,
          wind_slab: true,
          persistant_slab: false,
          deep_slab: false,
          cornice: true,
          fresh_snow: true,
          warming: false,
          weak_layers: false,
          depth_hoar: true,
          surface_hoar: false,
          hoar_frost: false,
          graupel: true,
          facets: true,
          woomphing: false,
          shooting_cracks: false,
          convex_roller: true,
          concave_roller: false,
          layers:[{type:'graupel', ft: 0, in: 10},
          {type:'condenced wind slab', ft: 0, in: 2},
          {type:'depth hoar', ft: 0, in: 8},
          {type:'rounded grains', ft: 0, in: 9},
          {type:'solid facets', ft: 1, in: 1},
          {type:'rounded grains', ft: 0, in: 6},
          {type:'powder', ft: 0, in: 10},],
          snowpack: 'Facets a foot and a half deep.  Most likely layer to trigger',
          snowpack_in_feet: 4,
          snowpack_in_inches: 1,
          pit_slide_wrist: false,
          pit_slide_elbow: false,
          pit_slide_shoulder: true,
          pit_slide_body_weight: false,
          pit_slide_jump: false,
          pit_photo: 'https://befitapps.com/wp-content/uploads/2015/12/avigeek-snowpit-tignes.jpg',
          forecast_low_temp: 18,
          forecast_high_temp: 28,
          forecast_sky_visibility: 'rowValue1',
          forecast_precipitation: 'rowValue1',
          forecast_wind: 30,
          forecast_gust: 40,
          actual_low_temp: 19,
          actual_high_temp: 28,
          actual_sky_visibility: 'cloudy, cumulous',
          actual_precipitation: 'rowValue1',
          actual_weather: 'low atmospheric stability.',
          actual_wind: 'average winds with constant winds around 20mph and gusts around 30mph',
          ideal_approach: 'Drop in from the summit of Snow Bench.  Approach from Glacier Gorge Trailhead.',
          backup_approach: 'Head up saddle to Stoneman Pass and click in.  Approach from Glacier Gorge Trailhead.',
          trip_report: 'Good time to Black Lake and cautious traversing under McHenrys peak to Snow Bench where we soloed to the ridgeline.  Winds were too agressive to summit so we dropped in on our line immediatly.  Sluff was light but fast with the pitch of the slope.',
          route_photo: ''
        },
        {
          id: 2,
          owner_id: 3,
          date_time: '1-15-17',
          location: 'RMNP',
          sub_region: 'Flattop Mtn',
          aspect: 'western',
          leeward: false,
          crossloading: false,
          slope_angle:30,
          elevation: 11500,
          loose_dry: false,
          loose_wet: false,
          wet_slab: false,
          storm_slab: true,
          wind_slab: true,
          persistant_slab: true,
          deep_slab: true,
          cornice: false,
          fresh_snow: false,
          warming: false,
          weak_layers: true,
          depth_hoar: true,
          surface_hoar: false,
          hoar_frost: false,
          graupel: true,
          facets: true,
          woomphing: false,
          shooting_cracks: false,
          convex_roller: true,
          concave_roller: true,
          layers:[{type:'depth hoar', ft: 0, in: 8},
          {type:'rounded grains', ft: 0, in: 6},
          {type:'depth hoar', ft: 0, in: 9},
          {type:'graupel', ft: 0, in: 8},
          {type:'rounded grains', ft: 0, in: 3},
          {type:'cup shaped crystals', ft: 1, in: 1},
          {type:'rounded grains', ft: 0, in: 8},
          {type:'fragmented particles', ft: 0, in: 3},
          {type:'condencsed wind slab', ft: 0, in: 4},],
          snowpack: '2 identifiable layers',
          snowpack_in_feet: 3,
          snowpack_in_inches: 7,
          pit_slide_wrist: false,
          pit_slide_elbow: false,
          pit_slide_shoulder: true,
          pit_slide_body_weight: false,
          pit_slide_jump: false,
          pit_photo: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwijuPrTudzUAhVl4IMKHfPXDYUQjBwIBA&url=http%3A%2F%2Fmooseradio.com%2Ffiles%2F2011%2F02%2FRott_-Bkmore-pit_MARKED.jpg&psig=AFQjCNGkcNZ7flgvlY9Ig-wnn8oEXp3xvA&ust=1498598731747356',
          forecast_low_temp: 15,
          forecast_high_temp: 23,
          forecast_sky_visibility: 'low visibility',
          forecast_precipitation: 'snow throughout the day',
          forecast_wind: 50,
          forecast_gust: 60,
          actual_low_temp: -11,
          actual_high_temp: 2,
          actual_sky_visibility: 'visibility around 20-30 feet.',
          actual_precipitation: 'consistant light snow all day',
          actual_weather: 'high winds with snow and extremely cold temperatures.',
          actual_wind: 'as predicted and potentially around 100mph at the summit.',
          ideal_approach: 'standard low angle approach to flattop summit',
          backup_approach: 'not necessary',
          trip_report: 'Left the Bear Lake Trailhead at 6am for 2 laps on flattop mtn, shortly after cleaning up Erics spilled coffee in my 3 day old elantra which apparently drives like a go-kart in snow.  Winds were horriffic and required that we had no exposed skin while traveling.  Dropped off of the western side and skied hard crust to treeline where we re-skinned the skis and took a second lap.  Eric wrapped up the day by making soup for us and spilling it on my previously immaculate seats.',
          route_photo: ''
        },
        {
          id: 3,
          owner_id: 2,
          date_time: '2-17-17',
          location: 'RMNP',
          sub_region: 'The Trough',
          aspect: 'east',
          leeward: false,
          crossloading: false,
          elevation: 13500,
          slope_angle: 45,
          loose_dry: false,
          loose_wet: false,
          wet_slab: true,
          storm_slab: false,
          wind_slab: false,
          persistant_slab: false,
          deep_slab: false,
          cornice: false,
          fresh_snow: false,
          warming: true,
          weak_layers: false,
          depth_hoar: true,
          surface_hoar: false,
          hoar_frost: false,
          graupel: true,
          facets: true,
          woomphing: false,
          shooting_cracks: false,
          convex_roller: false,
          concave_roller: true,
          layers:[{type:'', ft: 0, in: 6},
          {type:'fragmented particals', ft: 0, in: 5},
          {type:'rounded grains', ft: 1, in: 8},
          {type:'cup shaped crystals', ft: 0, in: 6},
          {type:'solid faceted crystals', ft: 1, in: 0},
          {type:'depth hoar', ft: 0, in: 4},
          {type:'rounded grains', ft: 0, in: 9},
          {type:'faceted crystals', ft: 0, in: 9},
          {type:'powder', ft: 0, in: 10},],
          snowpack: 'Snowpack is consolidated and layers are difficult to identify.  Wet slab is the most likely to trigger.',
          snowpack_in_feet: 2,
          snowpack_in_inches: 2,
          pit_slide_wrist: false,
          pit_slide_elbow: false,
          pit_slide_shoulder: false,
          pit_slide_body_weight: false,
          pit_slide_jump: true,
          pit_photo: 'http://www.mtavalanche.com/sites/default/files/images/N%20Bridger%20Snowpit.preview.jpg',
          forecast_low_temp: 23,
          forecast_high_temp: 32,
          forecast_sky_visibility: 'rowValue1',
          forecast_precipitation: 'rowValue1',
          forecast_wind: 5,
          forecast_gust: 15,
          actual_low_temp: 25,
          actual_high_temp: 35,
          actual_sky_visibility: 'bluebird',
          actual_precipitation: 'none',
          actual_weather: 'Clear skies with little to no wind.',
          actual_wind: 'wind forecast was accurate.',
          ideal_approach: 'Glacier Gorge Basin trailhead to ramp north/east of black lake.',
          backup_approach: 'not necessary',
          trip_report: 'Skinned in making good time to Black Lake where we re-upped on calories and re-assessed conditions.  Climbed the Trough, clicked in and ripped!  Small 10 foot drop near the bottom is no joke.  Make sure your legs are solid or you are guaranteed to eat rock.',
          route_photo: ''
        }
      ]);
    }).then(() => {
      return knex.raw("select setval('observational_data_id_seq', (select max(id) from observational_data));")
    });
};
