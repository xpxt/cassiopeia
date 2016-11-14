app.scene.load = function () {
	window.document.body.style.background = '#000';
	app.scene.menu ();
}

app.scene.menu = function () {
	app.wipe ();
	app.create.link ({ action: app.scene.unit, color: '#fff', font: 'monospace', size: 96, text: 'GO', x: 0.5 * canvas.width - 72, y: 0.5 * canvas.height - 48 }).load ();
}

app.scene.unit = function () {
	app.wipe ();
	app.create.unit ({ h: 184, i: app.i.ship, speed: 7, w: 141, x: 500, y: 200 }).load ();
}
