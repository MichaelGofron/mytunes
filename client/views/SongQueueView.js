// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    console.log(this);
    this.$el.append(this.collection.map(function(song) {
      var songView = new SongQueueEntryView({model: song});
      return songView.render();
    }));
  }

});
