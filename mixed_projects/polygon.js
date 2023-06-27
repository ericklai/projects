function CalculateArea() {
  var radius = document.form1.txtRadius.value;
  document.write(
    "<P>The area of the circle is " + radius * radius * Math.PI + "</p>"
  );
  document.write(
    "<P>The circumference of the circle is " + 2 * radius * Math.PI + "</p>"
  );
}
