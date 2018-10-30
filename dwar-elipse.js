draw = function() {
    stroke(0, 0, 0);
    fill(mouseX, mouseY, mouseX + mouseY +50);
    ellipse(mouseX, mouseY, mouseX - 10, mouseY - 10);
};
