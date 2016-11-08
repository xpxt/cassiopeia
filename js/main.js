app.scene.load = function () {
	app.scene.menu ();

}

app.scene.menu = function () {
	app.wipe ();
	app.create.button ({ h: 50, i: app.i.start, w: 100, x: 0.5 * canvas.width - 50, y: 0.5 * canvas.height - 25 }).load ();
}
