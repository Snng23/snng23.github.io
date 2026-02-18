// DATA URL:
const dataWide = "data/assignment3/videogames_wide.csv"; 
const dataLong = "data/assignment3/videogames_long.csv";


//
vegaEmbed("#t1q1", {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "Global sales by genre.",
    width: "container",
    height: 360,
    data: { url: dataWide },
    mark: "bar",
    encoding: {
        x: {
            field: "Global_Sales",
            type: "quantitative",
            title: "Total Global Sales"
        },

        y: {
            field: "Genre", 
            type: "nominal", 
            title: "Genre",
        },
    }
}, { actions: false });