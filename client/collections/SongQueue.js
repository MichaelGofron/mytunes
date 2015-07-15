// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.dequeue();
    });

    this.on('dequeue', function(){
      this.dequeue();
    });
  },

  playFirst: function(){
    this.at(0).play();
  },

  dequeue: function(){
    this.remove(this.at(0));
    if (this.length !== 0){
      this.playFirst();
    }
  },

});