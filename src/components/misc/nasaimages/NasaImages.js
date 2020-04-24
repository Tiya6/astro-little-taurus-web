import React from 'react';
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: 'https://media-exp1.licdn.com/dms/image/C4E1BAQHGv0UeuOBdoA/company-background_10000/0?e=2159024400&v=beta&t=Th_ZI5oLCipugZGgU0Sao2e9s3xfs2FMcMj73nPp_-U',
    width: 15,
    height: 12
  },
  {
    src: 'https://www.sciencenews.org/wp-content/uploads/2019/07/071619_ec_univexpansion_feat.jpg',
    width: 15,
    height: 12
  },
  {
    src: 'https://assets.newatlas.com/dims4/default/e1a8405/2147483647/strip/true/crop/1200x900+0+0/resize/1200x900!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fsupernovastar.jpg',
    width: 15,
    height: 12
  },
  {
    src: 'https://dailygalaxy.com/wp-content/uploads/2020/01/191749_web-1-1024x619-1-1024x619-1.jpg',
    width: 15,
    height: 12
  },
  {
    src: 'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/ca_0726NID_Stars_online.jpg?itok=UfIqZ7JT',
    width: 15,
    height: 12
  },
  {
    src: 'https://www.universetoday.com/wp-content/uploads/2018/04/nrao18cb5_artistimpression.jpg',
    width: 15,
    height: 12
  },
  {
    src: 'https://d2r55xnwy6nx47.cloudfront.net/uploads/2019/07/AGN_1160_Lede.jpg',
    width: 15,
    height: 12
  },
  {
    src: 'https://s.hdnux.com/photos/43/10/53/9210569/5/920x920.jpg',
    width: 15,
    height: 12
  },
  {
    src: 'https://assets.answersingenesis.org/img/cms/content/contentnode/og_image/newest-finding-on-expansion-of-universe.jpg',
    width: 15,
    height: 12
  },
  {
    src: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/06/the_massive_compact_star_cluster_in_ngc_3603_and_its_surroundings2/18245403-2-eng-GB/The_massive_compact_star_cluster_in_NGC_3603_and_its_surroundings.jpg',
    width: 15,
    height: 12
  },
  {
    src: 'https://image.pbs.org/video-assets/YLnFzPz-asset-mezzanine-16x9-qHliuxi.jpg',
    width: 15,
    height: 12
  },
  {
    src: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    width: 15,
    height: 12
  },
  {
    src: 'https://metro.co.uk/wp-content/uploads/2019/12/GettyImages-78929978.jpg?quality=90&strip=all',
    width: 15,
    height: 12
  },
  {
    src: 'https://miro.medium.com/max/2700/1*QS59aHuIEgJoIogixOJ32w.jpeg',
    width: 15,
    height: 12
  },
  {
    src: 'https://images.theconversation.com/files/311372/original/file-20200122-117933-hxjvkf.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
    width: 15,
    height: 12
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgegWje8OtxeF3ShEadIJbXdYUVvUux-n0UMSWfMRXUK9-oyvH&usqp=CAU',
    width: 15,
    height: 12
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtWp7su3GvkDDfF6FHdf8JecfnA02C2XJmPp9gdJXkuEguvaiR&usqp=CAU',
    width: 15,
    height: 12
  },
];
 

const NasaImages = () => {
    return(
            <Gallery photos={photos} />
    )  
}

export default NasaImages



