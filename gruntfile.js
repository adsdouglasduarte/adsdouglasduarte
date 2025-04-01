module.exports = function (grunt) {
  // Carregar as tarefas do npm
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");

  // Configurar as tarefas
  grunt.initConfig({
    // Tarefa LESS
    less: {
      development: {
        files: {
          "dist/css/main.css": "src/less/main.less", // Defina os caminhos dos arquivos LESS
        },
      },
    },

    // Tarefa de minificação de CSS
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "src/css/", // Alterado para usar o diretório de fontes no src
            src: ["*.css", "!*.min.css"],
            dest: "dist/css/", // Pasta de destino dos arquivos minificados
            ext: ".min.css",
          },
        ],
      },
    },

    // Tarefa de minificação de JavaScript
    uglify: {
      my_target: {
        files: {
          "dist/js/app.min.js": ["src/js/*.js"], // Alterado para usar o diretório de fontes no src
        },
      },
    },

    // Tarefa de otimização de imagens
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "src/img/", // Usar 'assets' para imagens externas
            src: ["**/*.{png,jpg,gif}"],
            dest: "dist/img/", // Pasta de destino para imagens otimizadas
          },
        ],
      },
    },

    // Tarefa de minificação de HTML
    htmlmin: {
      // Definindo a tarefa de minificação de HTML
      dist: {
        // O nome da tarefa
        options: {
          removeComments: true, // Remove comentários
          collapseWhitespace: true, // Remove espaços em branco
          minifyJS: true, // Minifica JavaScript no HTML
          minifyCSS: true, // Minifica CSS no HTML
        },
        files: [
          {
            expand: true,
            cwd: "src/", // Diretório de origem dos arquivos HTML
            src: ["**/*.html"],
            dest: "dist/", // Diretório de destino para os arquivos minificados
          },
        ],
      },
    },

    // Tarefa de monitoramento de mudanças nos arquivos
    watch: {
      css: {
        files: ["src/css/**/*.css"], // Alterado para monitorar a pasta 'src'
        tasks: ["cssmin"],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ["src/js/**/*.js"], // Alterado para monitorar a pasta 'src'
        tasks: ["uglify"],
        options: {
          spawn: false,
        },
      },
      images: {
        files: ["assets/img/**/*.{png,jpg,gif}"], // Continua monitorando 'assets/images'
        tasks: ["imagemin"],
        options: {
          spawn: false,
        },
      },
      less: {
        files: ["src/less/**/*.less"], // Alterado para monitorar 'src/less'
        tasks: ["less"],
      },
      html: {
        // Monitorando alterações nos arquivos HTML
        files: ["src/**/*.html"],
        tasks: ["htmlmin"], // Executa a minificação sempre que houver alterações em HTML
      },
    },
  });

  // Definir a tarefa padrão que será executada ao rodar o comando grunt
  grunt.registerTask("default", [
    "cssmin",
    "uglify",
    "imagemin",
    "less",
    "htmlmin",
  ]);

  // Configurar tarefas de build específicas
  grunt.registerTask("build", [
    "cssmin",
    "uglify",
    "imagemin",
    "less",
    "htmlmin",
  ]);
};
