app.create.unit = function (_) {
	let unit = app.create.sprite (_);
		unit.hp = _.hp || [1, 1];
		unit.speed = _.speed || 1;
		unit.vx = _.vx || unit.x;
		unit.vy = _.vy || unit.y;

		unit.go = function () {
			if (unit.vr > unit.speed) {
				let v = app.get.abr ({ x: unit.x, y: unit.y }, { x: unit.vx, y: unit.vy }, unit.speed);
				unit.move (v.x, v.y);
				unit.vr = app.get.ab ({ x: unit.x, y: unit.y }, { x: unit.vx, y: unit.vy });
			}
		}

		unit.goto = function (event) {
			unit.vx = event.x - 0.5 * unit.w;
			unit.vy = event.y - 0.5 * unit.h;
			unit.vr = app.get.ab ({ x: unit.x, y: unit.y }, { x: unit.vx, y: unit.vy });
		}

		unit.mousedown = function (event) {
			unit.going = true;
			unit.goto (event);
		}

		unit.mousemove = function (event) {
			if (unit.going) { unit. goto (event); }
		}

		unit.mouseup = function () {
			unit.going = false;
		}

		unit.tick = function () {
			unit.go ();
		}

	return unit;
}
