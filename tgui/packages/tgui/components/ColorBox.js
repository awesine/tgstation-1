import { classes, pureComponentHooks } from 'common/react';
import { Box } from './Box';

export const ColorBox = props => {
  const { color, content, className, ...rest } = props;
  return (
    <Box
      className={classes([
        'ColorBox',
        className,
      ])}
      color={content ? null : 'transparent'}
      backgroundColor={color}
      {...rest}>
      {content || '.'}
    </Box>
  );
};

ColorBox.defaultHooks = pureComponentHooks;
