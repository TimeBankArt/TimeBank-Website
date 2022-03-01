import { useEffect } from 'react';
import styles from './index.less';

const Banner = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create('chartdiv', am4charts.SankeyDiagram);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        from: '[font-size:1.5em]Home\n[] 88.3M',
        to: '[font-size:1.2em]Brand Tile\n[][font-size:0.8em] 12.3M\n 13.9%[]',
        value: 12,
        labelText: '12.3 M\n 13.9%',
        labelRotation: 1,
      },
      {
        from: '[font-size:1.5em]Home\n[] 88.3M',
        to: '[font-size:1.2em]Algorithmic\n[][font-size:0.8em] 12.3M\n 43.3%[]',
        value: 38,
        labelText: '38.4 M\n 43.3%',
      },
      {
        from: '[font-size:1.5em]Home\n[] 88.3M',
        to: '[font-size:1.2em]Curated\n[][font-size:0.8em] 37.9M\n 42.8%[]',
        value: 38,
        labelText: '37.9 M\n 42.8%',
        labelRotation: -1,
      },
      {
        from: '[font-size:1.2em]Brand Tile\n[][font-size:0.8em] 12.3M\n 13.9%[]',
        to: 'Star Wars',
        value: 12,
        labelText: '12.3 M\n 100%',
        labelRotation: 1,
      },
      {
        from: '[font-size:1.2em]Algorithmic\n[][font-size:0.8em] 12.3M\n 43.3%[]',
        to: 'Recommended\n [font-size:0.8em] 18M\n 20.4%[]',
        value: 18,
        labelText: '18 M\n 46.9%',
        labelRotation: 1,
      },
      {
        from: '[font-size:1.2em]Algorithmic\n[][font-size:0.8em] 12.3M\n 43.3%[]',
        to: 'Trending',
        value: 12,
        labelText: '12.0 M\n 32.0%',
        labelRotation: 1,
      },
      {
        from: '[font-size:1.2em]Algorithmic\n[][font-size:0.8em] 12.3M\n 43.3%[]',
        to: 'Because You Watched',
        value: 8,
        labelText: '8.1 M\n 21.1%',
        labelRotation: 1,
      },
      {
        from: '[font-size:1.2em]Curated\n[][font-size:0.8em] 37.9M\n 42.8%[]',
        to: 'Star Wars Through The Years',
        value: 14,
      },
      {
        from: '[font-size:1.2em]Curated\n[][font-size:0.8em] 37.9M\n 42.8%[]',
        to: 'Hero',
        value: 10,
      },
      {
        from: '[font-size:1.2em]Curated\n[][font-size:0.8em] 37.9M\n 42.8%[]',
        to: 'Hit Movies',
        value: 9,
      },
      {
        from: '[font-size:1.2em]Curated\n[][font-size:0.8em] 37.9M\n 42.8%[]',
        to: 'Journey to Episode IX',
        value: 5,
      },
      {
        from: 'Star Wars',
        to: 'Star Wars:\n Rise of\n Skywalker',
        value: 12,
        labelText: '12.3 M\n 13.9%',
        labelRotation: 1,
      },
      {
        from: 'Recommended\n [font-size:0.8em] 18M\n 20.4%[]',
        to: 'Star Wars:\n Rise of\n Skywalker',
        value: 18,
        labelText: '18 M\n 20.4%',
        labelRotation: 1,
      },
      { from: 'Trending', to: 'Star Wars:\n Rise of\n Skywalker', value: 12 },
      {
        from: 'Because You Watched',
        to: 'Star Wars:\n Rise of\n Skywalker',
        value: 8,
      },
      {
        from: 'Star Wars Through The Years',
        to: 'Star Wars:\n Rise of\n Skywalker',
        value: 14,
      },
      { from: 'Hero', to: 'Star Wars:\n Rise of\n Skywalker', value: 10 },
      { from: 'Hit Movies', to: 'Star Wars:\n Rise of\n Skywalker', value: 9 },
      {
        from: 'Journey to Episode IX',
        to: 'Star Wars:\n Rise of\n Skywalker',
        value: 5,
      },
    ];

    let hoverState = chart.links.template.states.create('hover');
    hoverState.properties.fillOpacity = 0.5;

    chart.dataFields.fromName = 'from';
    chart.dataFields.toName = 'to';
    chart.dataFields.value = 'value';

    // for right-most label to fit
    chart.paddingRight = 100;
    chart.paddingLeft = 40;

    // make nodes draggable
    var nodeTemplate = chart.nodes.template;
    nodeTemplate.inert = true;
    nodeTemplate.readerTitle = 'Drag me!';
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.width = 20;

    // make nodes draggable
    var nodeTemplate = chart.nodes.template;
    //nodeTemplate.readerTitle = labelText;
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    chart.nodes.template.nameLabel.disabled = false;

    var labelBullet = chart.links.template.bullets.push(
      new am4charts.LabelBullet(),
    );
    //labelBullet.label.propertyFields.text = "labelText";
    labelBullet.propertyFields.locationX = 'labelLocation';
    labelBullet.propertyFields.rotation = 'labelRotation';
    labelBullet.label.rotation = 0;
    labelBullet.label.propertyFields.horizontalCenter = 'center';
    labelBullet.label.textAlign = 'middle';
  }, []);
  return (
    <div className={styles.banner}>
      <div id="chartdiv"></div>
    </div>
  );
};

export default Banner;
