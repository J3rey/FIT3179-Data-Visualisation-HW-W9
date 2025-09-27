var vg_1 = "daily_cost_bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_1)
  .then(function (result) {
    // Chart loaded successfully
  })
  .catch(console.error);
