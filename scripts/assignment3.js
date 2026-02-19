// DATA URL:
const dataWide = "data/assignment3/videogames_wide.csv"; 
const dataLong = "data/assignment3/videogames_long.csv";



//VISUALIZATION 1 GRAPHS:
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
    height: 600,
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



//VISUALIZATION 2 GRAPHS:
vegaEmbed("#t2q1", {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Global Sales Every 5 Years for Top 5 Global Best-Selling Genres",
    description: "Global sales every 5 years for top 5 global best-selling genres.",
    width: "container",
    height: 600,
    data: { url: dataWide },
    mark: "line",

    transform: [
        //Calculate global sales by genre:
        {
            joinaggregate: [{
                op: "sum", 
                field: "Global_Sales", 
                as: "Sum_Global_Sales" 
            }],
            groupby: ["Genre"]
        },

        //Sort and rank the genre in descending order based on sum global sales:
        {
            sort: [{ 
                field: "Sum_Global_Sales", 
                order: "descending" 
            }],

            window: [{ 
                op: "dense_rank", 
                as: "Genre_Rank" 
            }]
        },

        //Only include the top 5:
        {
            filter: "datum.Genre_Rank <= 5"
        }
    ],

    encoding: {
        x: {
            field: "Year", 
            type: "temporal", 
            timeUnit: {
                unit: "year",
                step: 5,
            },
            title: "Year",
        },

        y: {
            field: "Global_Sales",
            type: "quantitative",
            aggregate: "sum",
            title: "Total Global Sales"
        },

        color: {
            field: "Genre",
            sort: {
                field: "Sum_Global_Sales", 
                order: "descending" 
            }
        }
    }
}, { actions: false });


vegaEmbed("#t2q2", {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Global Sales Every 5 Years for Top 5 Global Best-Selling Platforms",
    description: "Global sales every 5 years for top 5 global best-selling platforms.",
    width: "container",
    height: 600,
    data: { url: dataWide },
    mark: "line",

    transform: [
        //Calculate global sales by platform:
        {
            joinaggregate: [{
                op: "sum", 
                field: "Global_Sales", 
                as: "Sum_Global_Sales" 
            }],
            groupby: ["Platform"]
        },

        //Sort and rank the platform in descending order based on sum global sales:
        {
            sort: [{ 
                field: "Sum_Global_Sales", 
                order: "descending" 
            }],

            window: [{ 
                op: "dense_rank", 
                as: "Platform_Rank" 
            }]
        },

        //Only include the top 5:
        {
            filter: "datum.Platform_Rank <= 5"
        }
    ],

    encoding: {
        x: {
            field: "Year", 
            type: "temporal", 
            timeUnit: {
                unit: "year",
                step: 5,
            },
            title: "Year",
        },

        y: {
            field: "Global_Sales",
            type: "quantitative",
            aggregate: "sum",
            title: "Total Global Sales"
        },

        color: {
            field: "Platform",
            sort: {
                field: "Sum_Global_Sales", 
                order: "descending" 
            }
        }
    }
}, { actions: false });



//VISUALIZATION 3 GRAPHS:
vegaEmbed("#t3q1", {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Regional Sales for each Platform",
    description: "Regional sales for each platform.",
    width: "container",
    height: 600,
    data: { url: dataLong },
    mark: "bar",
    
    encoding: {
        x: {
            field: "platform",
            type: "nominal",
            sort: "-y",
            title: "Platform"
        },

        y: {
            field: "sales_amount",
            type: "quantitative",
            aggregate: "sum",
            title: "Regional Sales"
        },

        xOffset: {
            field: "sales_region"
        },

        color: {
            title: "Regions",
            field: "sales_region"
        }
    }
}, { actions: false });



//VISUALIZATION 3 GRAPHS:
vegaEmbed("#t4q1", {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: "Regional Sales for each Platform",
    description: "Regional sales for each platform.",
    width: "container",
    height: 600,
    data: { url: dataLong },
    mark: "bar",
    
    encoding: {
        x: {
            field: "genre",
            type: "nominal",
            sort: "-y",
            title: "Genre"
        },

        y: {
            field: "sales_amount",
            type: "quantitative",
            aggregate: "sum",
            title: "Regional Sales"
        },

        xOffset: {
            field: "sales_region"
        },

        color: {
            title: "Regions",
            field: "sales_region"
        }
    }
}, { actions: false });
