<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>NEW TIMER APP</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<link rel="icon" href="/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="styles/styles.css">
</head>
<body>

<div id="app" class="container">
	<?php

	$current_points = 123;
	$pics = array(
		0 => 'milk',
		1 => 'ham',
		2 => 'clock',
		3 => 'wtf'
	);

	$actions = array(
		0 => array(
			'id' => 145,
			'title' => 'Test 1',
			'rest_time' => 0,
			'recovery_time' => 600,
			'points' => 10,
			),
		1 => array(
			'id' => 146,
			'title' => 'Test 2',
			'rest_time' => 428,
			'recovery_time' => 5,
			'points' => 20,
			),
		2 => array(
			'id' => 147,
			'title' => 'Test 3',
			'rest_time' => 0,
			'recovery_time' => 480,
			'points' => 30,
			),
		3 => array(
			'id' => 148,
			'title' => 'Test 4',
			'rest_time' => 0,
			'recovery_time' => 550,
			'points' => 40,
			),
		);

	echo "<div class='points-wrapper'>";
	echo "<div class='points' id='points'>$current_points</div>";
	echo "</div>";

	?>

	<ul class="item-list">

	<?php

	foreach ($actions as $key => $value) {
		echo "<li class='item'";
		
		echo "id='item_"			.$value['id']			."' ";
		echo "title='"				.$value['title']		."' ";
		echo "data-id='"			.$value['id']			."' ";
		echo "data-points='"		.$value['points']		."' ";
		echo "data-rest_time='"		.$value['rest_time']	."' ";
		echo "data-recovery_time='"	.$value['recovery_time']."' ";
		echo ">";

		echo "<span class='img-align-helper'></span>";

		echo "<img src='i/"			.$pics[$key]			.".png' class='item-img'>";
		echo "<div id='timer_"		.$value['id']			."' class='timer'></div>";
		echo "</li>";
	}

	?>

	</ul>
</div>

<script src="js/script.js"></script>
	
</body>
</html>