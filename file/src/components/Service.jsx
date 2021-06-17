import React, { lazy , Suspense} from 'react';
import Loader  from "./Loader";
const ServiceRender = lazy(()=> import('./ServiceRender'))

const Service = () =>{

return (
  <>
  <Suspense fallback={<Loader />}>
  <ServiceRender />
  </Suspense>
    
</>
);
}

export default Service;
