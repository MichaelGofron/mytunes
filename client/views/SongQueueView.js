// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.render();
  },

  render: function() {
    return this.$el.html('<th>Queue</th>').append(this.collection.map(function(song) {
      var songView = new SongQueueEntryView({model: song});
      return songView.render();
    }));
  }
});
