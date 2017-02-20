module.exports = function ( grunt ) {
 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-tslint');
 var taskConfig = {
   jshint: {
     src: ['client/src/**/*.js'],
     gruntfile: ['Gruntfile.js'],
     options: {
      'esversion': 6,
      curly:  true,
      immed:  true,
      newcap: true,
      noarg:  true,
      sub:    true,
      boss:   true,
      eqnull: true,
      node:   true,
      undef:  true,
      globals: {
        _:       false,
        jQuery:  false,
        angular: false,
        moment:  false,
        console: false,
        $:       false,
        io:      false
      }
     }
   },

  tslint: {
      files: {
          src: ['client/src/**/*.ts', 'client/src/**/*.ts']
      },
      options: {
          // Task-specific options go here.
      },
      your_target: {
          // Target-specific file lists and/or options go here.
      },
  }
 };
 grunt.initConfig(taskConfig);
};
