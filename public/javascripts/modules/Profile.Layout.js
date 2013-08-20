Cards.module('Profile', function(Profile, App) {
	Profile.Layout = Backbone.Marionette.Layout.extend({
		template: "#profile-layout",
		regions: {
			infoRegion: "#profile-info-region",
			setRegion: "#profile-set-region",
			badgeRegion: "#profile-badge-region",
			scoreRegion: "#profile-score-region"
		}
	});
});