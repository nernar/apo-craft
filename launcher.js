try {
	ConfigureMultiplayer({
		isClientOnly: false
	});
} catch (e) {
	Logger.Log("APO Craft requires multiplayer and may not work properly on older versions!", "WARNING");
}

Launch();
