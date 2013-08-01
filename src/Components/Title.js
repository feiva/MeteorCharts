(function() {
  MeteorCharts.Title = function(chart) {
    var chart = this.chart = chart,
        model = this.model = chart.model,
        str = model.str = '',
        view = this.view = chart.view,
        text = this.text = new Kinetic.Text(MeteorCharts.Util.merge(
          {
            fill: view.text.fill
          }, 
          view.title.text, 
          {
            text: model.title,
            listening: false
          }
        ));

    chart.bottomLayer.add(text);
  };

  MeteorCharts.Title.prototype = {

  };
})();