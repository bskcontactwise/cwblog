import React from "react"
import {Container, FeatureImage, Content, ContentCard} from "../components"

export default function Home() {
  return (
    <Container>

<FeatureImage/>
<Content>
  <ContentCard date="March 22 2021" title="lorem ipsum title fro testing" 
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur metus odio, egestas nec auctor sit amet,
   porta quis neque. Suspendisse quis velit nunc. Aenean nec lacus aliquet, consequat mauris a, tempus elit. Maecenas
    iaculis eget tortor ut ornare. Nulla dapibus consectetur tempus. Duis lobortis tristique est, quis lobortis ex dapibus at.
     Donec ut felis quis erat iaculis consectetur ornare rutrum ligula. Praesent ut tempor felis, at ornare erat. 
  Nam pulvinar semper tellus. Mauris orci ex, lacinia a nulla vitae, mattis imperdiet est. Nam in leo pharetra, fringilla eros quis, bibendum ipsum. "
  
  slug="testing the link" />
</Content>
   
    </Container>
  )
 
  
  
  
}
