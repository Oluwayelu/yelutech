import React, { useEffect } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux';

import { makeStyles } from "@material-ui/core/styles";
import styles from '../../assets/js/views/blogDetailStyle'
import Navbar from '../../components/Header/Navbar/Navbar';
import NavLeftLinks from '../../components/Header/Navbar/NavLeftLink';
import Parallax from '../../components/Parallax/Parallax'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import NavRightLinks from '../../components/Header/Navbar/NavRightLink';
import Footer from '../../components/Footer/Footer';

import { getBlogData } from '../../_actions/actions'
const useStyles = makeStyles(styles)
const BlogDetail = ({
  match,
  blogData,
  getBlogData
}) => {
  const classes = useStyles()
  useEffect(() => {
    getBlogData(match.params.id)
  }, [getBlogData, match.params.id])
  return (
    <div>
      <Navbar
        color="transparent"
        routes={[]}
        brand="YeLu Tech"
        leftLinks={<NavLeftLinks />}
        rightLinks={<NavRightLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "dark"
        }}
      />
      <Parallax image={`/api/v1/${blogData.image}`}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{blogData.title}</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem >
            <img src={`/api/v1/${blogData.image}`} className={classes.image} alt="imgdata" />
          </GridItem>
          <GridItem>
            <h2 className={classes.title}>{blogData.title}</h2>
          </GridItem>
          <GridItem>
            <p className={classes.description}>
              {blogData.body}
            </p>
          </GridItem>
        </GridContainer>

      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  blogData: state.data.blogData
})
export default connect(mapStateToProps, { getBlogData })(BlogDetail)