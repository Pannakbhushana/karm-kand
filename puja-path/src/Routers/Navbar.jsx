import { Box,Text, Flex, HStack,Switch } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ContextApi/ThemeContext';
import { ParticleContext } from '../ContextApi/ParticleContext';
import { CiSun } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";
import SideBar from './SideBar';

export default function Navbar() {
  const { changeTheme } = useContext(ThemeContext)
  const { handleAmoungUs,handleNone } = useContext(ParticleContext)
  const {isDark}=useContext(ThemeContext);
  const [particleStatus, setParticleStatus]=useState(true);

  const handleChage=()=>{
    setParticleStatus(!particleStatus)
  }

  useEffect(()=>{
    {particleStatus ? handleAmoungUs() : handleNone()}
  },[particleStatus])

  return (
    <>
        <Flex h={16} 
          w={'100%'}
          position={'fixed'} 
          zIndex={2} 
          alignItems={'center'} 
          justifyContent={'space-between'}
          pr={'2%'}
          pl={'2%'}
          background={isDark ? 'linear-gradient(to right, #d56b01, #FFFF00)' : 'linear-gradient(to right, #020202, #444444)' }
          >
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link to={'/'}><img src={'./om.png'} alt="Om" style={{width:"60px"}} /></Link></Box>
            <SideBar />
          </HStack>
          <Flex alignItems={'center'} >
              <Text 
                fontSize={'4xl'} 
                color={isDark ? '#333333' : '#fff'} 
                onClick={changeTheme} 
                cursor={'pointer'} > 
                  {isDark ? <PiMoonLight /> : <CiSun /> } 
                </Text>
            <div style={{ width: "20px" }}></div>
            
            <Switch colorScheme={isDark ? 'yellow':'gray'} size='lg' onChange={handleChage} />
          </Flex>
        </Flex>
    </>
  );
}