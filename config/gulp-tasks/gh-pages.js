import ghPages from "gulp-gh-pages";

export const deployGH = () => {
  return app.gulp.src("./dist/**/*").pipe(ghPages());
};
