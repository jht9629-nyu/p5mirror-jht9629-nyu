function sketch_ui({
  title,
  dates,
  select_date
}) {
  {
    let span = createSpan(title);
    span.style('font-size', '16pt');
    // span.style('margin', '0pt 0pt 0pt 4pt');

    let aselect = createSelect();
    aselect.style('font-size', '16pt');
    // aselect.style('margin', '2pt 2pt');
    for (let index = 0; index < dates.length; index++) {
      aselect.option(dates[index], index);
    }
    aselect.changed(function() {
      let index = this.value();
      select_date(index);
      print('dates index', index)
    });
  }
  createSpan('<br/>');

  // for (let citem of 
  // ['c_regions', 'c_dates', 'a_day', 'a_sorted']) {
  for (let citem of ['citems', 'a_sorted']) {
    let suf = ' ' + citem + ' = '
    let span1 = createSpan('-' + suf);
    span1.style('font-weight', 'bold');
    span1.mousePressed(function() {
      span2.toggleClass('hide');
      if (span2.hasClass('hide'))
        span1.html('+' + suf)
      else
        span1.html('-' + suf)
    });
    let span2 = createSpan().id(citem);
    // span.style('font-size', '12pt');
    // span2.toggleClass('hide');
    createSpan('<br/>');
  }

  {
    let elm = createSpan().id('ctotal');
    elm.style('font-size', '30px');
  }

  createSpan('<br/>');
}


function show_json(label, value) {
  // Find the element by id
  let elm = select('#' + label);
  if (!elm) {
    print('show_json label missing', label);
    return;
  }
  // Convert value to formated string
  value = JSON.stringify(value, null, 2);

  if (value === undefined) value = '';

  // Replace new line characters with html break tag
  value = value.replace(/\n/g, '<br/>')

  // Replace spaces with html non-breaking character
  // entity so they show up in html
  value = value.replace(/ /g, '&nbsp;')

  elm.html(value);
}

function show_num(label, num) {
  let elm = select('#' + label);
  num = round(num, 2);
  elm.html('[' + label + ' ' + num + '] ');
}

function format_num(val) {
  return Number(val).toLocaleString();
}

function format_percent(val, stats_total) {
  if (!stats_total) return '';
  let num = val / stats_total;
  let ndigits = 1;
  if (num < 0.01) ndigits = 3;
  return Number(num).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: ndigits,
    maximumFractionDigits: ndigits,
  });
}