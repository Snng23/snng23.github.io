// DATA URL:
const dataWide = "data/assignment3/videogames_wide.csv"; 
const dataLong = "data/assignment3/videogames_long.csv";


//
vegaEmbed("#t1q1", {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "Global sales by genre.",
    data: { url: dataWide },
    mark: "bar",
    encoding: {
        x: {
            field: "Genre", 
            type: "nominal", 
            title: "Genre",
        },

        y: {
            field: "Global_Sales",
            type: "quantitative",
            title: "Total Global Sales"
        },
    }
}, { actions: false });