import React from "react"
import {useStaticQuery, graphql } from "gatsby"
import {FooterWrapper, FooterSocialwrapper, FooterSocialIcons, P} from "../elements"

export const Footer = () => {
const data = useStaticQuery(graphql`
query{
    facebook :file(relativePath: {eq: "facebook.svg"}){
        publicURL
    }
    linkedin :file(relativePath: {eq: "linkedin.svg"}){
        publicURL
    }
    instagram :file(relativePath: {eq: "instagram.svg"}){
        publicURL
    }
    twitter :file(relativePath: {eq: "twitter.svg"}){
        publicURL
}
}
`)

    return( <FooterWrapper>
        <FooterSocialwrapper>
            <FooterSocialIcons>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >
                    <img src={data.facebook.publicURL} alt="facebook logo"/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
                    <img src={data.linkedin.publicURL} alt="linkedin logo"/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >
                    <img src={data.instagram.publicURL} alt="instagram logo"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
                    <img src={data.twitter.publicURL} alt="twitter logo"/>
                    </a>
            </FooterSocialIcons>
            <P size="xSmall" color="dark3"> 2020 company. All right reserved.</P>
        </FooterSocialwrapper>

    </FooterWrapper>
    )
}