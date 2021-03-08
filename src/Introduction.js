import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  blue: {
    border: '2px solid #0779e4',
    borderRadius: '5px',
  },
  center: {
    textAlign: 'center',
  },
}));

export default function Introduction() {
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={10}>
      <h1 style={{ textAlign: 'center' }}>
        Chuyển địa chỉ nhà từ Việt sang Anh
      </h1>
      <div className={classes.root}>
        <Accordion className={classes.blue}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Giới thiệu</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Việc viết địa chỉ nhà bằng Tiếng Anh là một công việc phức tạp đòi
              hỏi bạn phải hiểu ngữ pháp Tiếng Anh thông thạo. Trang web này sẽ
              giúp bạn giải quyết việc đó chỉ trong vài giây với độ chính xác
              tuyệt đối. Hy vọng bạn sẽ yêu thích nó{' '}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
      </div>
    </Grid>
  );
}
