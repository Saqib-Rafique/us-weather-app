import type { StateCatalog } from "@domain/StateCatalog";

export function buildStateCatalog(): StateCatalog {
  return [
    {
      name: "Alabama",
      code: "AL",
      cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville"] as const,
    },
    {
      name: "Alaska",
      code: "AK",
      cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka"] as const,
    },
    {
      name: "Arizona",
      code: "AZ",
      cities: ["Phoenix", "Tucson", "Mesa", "Scottsdale"] as const,
    },
    {
      name: "Arkansas",
      code: "AR",
      cities: [
        "Little Rock",
        "Fort Smith",
        "Fayetteville",
        "Springdale",
      ] as const,
    },
    {
      name: "California",
      code: "CA",
      cities: [
        "Los Angeles",
        "San Diego",
        "San Jose",
        "San Francisco",
      ] as const,
    },
    {
      name: "Colorado",
      code: "CO",
      cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins"] as const,
    },
    {
      name: "Connecticut",
      code: "CT",
      cities: ["Bridgeport", "New Haven", "Stamford", "Hartford"] as const,
    },
    {
      name: "Delaware",
      code: "DE",
      cities: ["Wilmington", "Dover", "Newark", "Middletown"] as const,
    },
    {
      name: "Florida",
      code: "FL",
      cities: ["Miami", "Orlando", "Tampa", "Jacksonville"] as const,
    },
    {
      name: "Georgia",
      code: "GA",
      cities: ["Atlanta", "Augusta", "Savannah", "Columbus"] as const,
    },
    {
      name: "Hawaii",
      code: "HI",
      cities: ["Honolulu", "Hilo", "Kailua", "Kapolei"] as const,
    },
    {
      name: "Idaho",
      code: "ID",
      cities: ["Boise", "Meridian", "Nampa", "Idaho Falls"] as const,
    },
    {
      name: "Illinois",
      code: "IL",
      cities: ["Chicago", "Aurora", "Naperville", "Springfield"] as const,
    },
    {
      name: "Indiana",
      code: "IN",
      cities: [
        "Indianapolis",
        "Fort Wayne",
        "Evansville",
        "South Bend",
      ] as const,
    },
    {
      name: "Iowa",
      code: "IA",
      cities: [
        "Des Moines",
        "Cedar Rapids",
        "Davenport",
        "Sioux City",
      ] as const,
    },
    {
      name: "Kansas",
      code: "KS",
      cities: ["Wichita", "Overland Park", "Kansas City", "Topeka"] as const,
    },
    {
      name: "Kentucky",
      code: "KY",
      cities: [
        "Louisville",
        "Lexington",
        "Bowling Green",
        "Owensboro",
      ] as const,
    },
    {
      name: "Louisiana",
      code: "LA",
      cities: [
        "New Orleans",
        "Baton Rouge",
        "Shreveport",
        "Lafayette",
      ] as const,
    },
    {
      name: "Maine",
      code: "ME",
      cities: ["Portland", "Lewiston", "Bangor", "Augusta"] as const,
    },
    {
      name: "Maryland",
      code: "MD",
      cities: ["Baltimore", "Annapolis", "Frederick", "Rockville"] as const,
    },
    {
      name: "Massachusetts",
      code: "MA",
      cities: ["Boston", "Worcester", "Springfield", "Cambridge"] as const,
    },
    {
      name: "Michigan",
      code: "MI",
      cities: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing"] as const,
    },
    {
      name: "Minnesota",
      code: "MN",
      cities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth"] as const,
    },
    {
      name: "Mississippi",
      code: "MS",
      cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg"] as const,
    },
    {
      name: "Missouri",
      code: "MO",
      cities: ["Kansas City", "St. Louis", "Springfield", "Columbia"] as const,
    },
    {
      name: "Montana",
      code: "MT",
      cities: ["Billings", "Missoula", "Great Falls", "Bozeman"] as const,
    },
    {
      name: "Nebraska",
      code: "NE",
      cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island"] as const,
    },
    {
      name: "Nevada",
      code: "NV",
      cities: ["Las Vegas", "Reno", "Henderson", "Carson City"] as const,
    },
    {
      name: "New Hampshire",
      code: "NH",
      cities: ["Manchester", "Nashua", "Concord", "Dover"] as const,
    },
    {
      name: "New Jersey",
      code: "NJ",
      cities: ["Newark", "Jersey City", "Paterson", "Trenton"] as const,
    },
    {
      name: "New Mexico",
      code: "NM",
      cities: ["Albuquerque", "Las Cruces", "Santa Fe", "Roswell"] as const,
    },
    {
      name: "New York",
      code: "NY",
      cities: ["New York", "Buffalo", "Rochester", "Albany"] as const,
    },
    {
      name: "North Carolina",
      code: "NC",
      cities: ["Charlotte", "Raleigh", "Greensboro", "Durham"] as const,
    },
    {
      name: "North Dakota",
      code: "ND",
      cities: ["Fargo", "Bismarck", "Grand Forks", "Minot"] as const,
    },
    {
      name: "Ohio",
      code: "OH",
      cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo"] as const,
    },
    {
      name: "Oklahoma",
      code: "OK",
      cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"] as const,
    },
    {
      name: "Oregon",
      code: "OR",
      cities: ["Portland", "Eugene", "Salem", "Bend"] as const,
    },
    {
      name: "Pennsylvania",
      code: "PA",
      cities: [
        "Philadelphia",
        "Pittsburgh",
        "Allentown",
        "Harrisburg",
      ] as const,
    },
    {
      name: "Rhode Island",
      code: "RI",
      cities: ["Providence", "Warwick", "Cranston", "Pawtucket"] as const,
    },
    {
      name: "South Carolina",
      code: "SC",
      cities: ["Columbia", "Charleston", "Greenville", "Myrtle Beach"] as const,
    },
    {
      name: "South Dakota",
      code: "SD",
      cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Pierre"] as const,
    },
    {
      name: "Tennessee",
      code: "TN",
      cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"] as const,
    },
    {
      name: "Texas",
      code: "TX",
      cities: ["Houston", "Dallas", "Austin", "San Antonio"] as const,
    },
    {
      name: "Utah",
      code: "UT",
      cities: ["Salt Lake City", "Provo", "Ogden", "St. George"] as const,
    },
    {
      name: "Vermont",
      code: "VT",
      cities: [
        "Burlington",
        "South Burlington",
        "Rutland",
        "Montpelier",
      ] as const,
    },
    {
      name: "Virginia",
      code: "VA",
      cities: ["Virginia Beach", "Richmond", "Norfolk", "Roanoke"] as const,
    },
    {
      name: "Washington",
      code: "WA",
      cities: ["Seattle", "Spokane", "Tacoma", "Olympia"] as const,
    },
    {
      name: "West Virginia",
      code: "WV",
      cities: [
        "Charleston",
        "Huntington",
        "Morgantown",
        "Parkersburg",
      ] as const,
    },
    {
      name: "Wisconsin",
      code: "WI",
      cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha"] as const,
    },
    {
      name: "Wyoming",
      code: "WY",
      cities: ["Cheyenne", "Casper", "Laramie", "Gillette"] as const,
    },
  ] as const;
}
