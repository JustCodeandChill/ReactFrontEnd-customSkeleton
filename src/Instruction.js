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
		border: "2px solid #0779e4",
		borderRadius: "5px"
	}
}));

export default function Instruction() {
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={10} >
      <div className={classes.root}>
        <Accordion className={classes.blue}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Hướng dẫn</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Bước 1: Chọn ô mà bạn địa chỉ ở Tiếng Việt của bạn sẽ có và bấm <b>Khóa lựa chọn</b>
              <br />
              Bước 2: Nhập địa chỉ tại những những ô trắng bạn đã chọn và bấm{' '}
              <b>Dịch</b>
              <br />
              Bước 3: Sao chép kết quả và Sử dụng thôi :))
            </Typography>
          </AccordionDetails>

          <AccordionDetails>
            <Typography>
              Nếu bấm <b>xóa địa chỉ đã nhập</b> thì toàn bộ địa chỉ trên ô nhập
              sẽ bị xóa. Nên dùng khi muốn nhập lại từ đầu.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
      </div>
    </Grid>
  );
}
