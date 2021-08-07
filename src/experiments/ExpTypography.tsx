import Typography from "@material-ui/core/Typography";

export const ExpTypography = () => {
  return (
    <>
      <Typography>Text</Typography>

      <Typography variant="h1" color="primary" align="center">
        Text
      </Typography>

      <Typography variant="h1" color="text.secondary" component="h2">
        Text
      </Typography>

      {/* noWrap adds text-overflow: ellipsis */}
      <Typography color="primary" noWrap gutterBottom>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        beatae ratione voluptatem, assumenda dolorem ducimus eos reprehenderit
        ea eum placeat illum aliquid minus perferendis corporis quae natus
        similique molestias saepe.{" "}
      </Typography>
    </>
  );
};

export default ExpTypography;
