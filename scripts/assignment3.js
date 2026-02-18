// DATA URL:
const dataWide = "data/assignment3/videogames_wide.csv"; 
const dataLong = "data/assignment3/videogames_long.csv";


//
vegaEmbed("#t1q1", {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Global Sales by Genre",
    description: "Global sales by genre.",
    width: "container",
    height: 360,
    data: { url: dataWide },
    mark: "bar",
    encoding: {
        x: {
            field: "Global_Sales",
            type: "quantitative",
            aggregate: "sum",
            title: "Total Global Sales"
        },

        y: {
            field: "Genre", 
            type: "nominal", 
            sort: "-x",
            title: "Genre",
        },
    }
}, { actions: false });


vegaEmbed("#t1q2", {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Global Sales by Platform",
    description: "Global sales by platform.",
    width: "container",
    height: 360,
    data: { url: dataWide },
    mark: "bar",
    encoding: {
        x: {
            field: "Global_Sales",
            type: "quantitative",
            aggregate: "sum",
            title: "Total Global Sales"
        },

        y: {
            field: "Platform", 
            type: "nominal", 
            sort: "-x",
            title: "Platform",
        },
    }
}, { actions: false });