import React from 'react';
import { View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import { ArrowUP, Logo } from '@/assets';
import { CustomHeaderWithBack, TextItem, UnorderedList } from '@/components';

import Styles from './Styles';
const FAQ: React.FC = () => {
  return (
    <Grid style={Styles.container}>
      <CustomHeaderWithBack txt={'FAQ'} />
      <Row style={Styles.LogoRow}>
        <View style={Styles.Logo}>
          <Logo />
        </View>
      </Row>
      <Row style={Styles.FirstRow}>
        <Col style={[Styles.midTextCol, Styles.jUSTIFYcenter]}>
          <TextItem
            txt={'Questions techniques relatives à l’app'}
            fontWeight="bold"
            variant="bodyMedium"
          />
        </Col>
        <Col style={Styles.centerAll}>
          <ArrowUP />
        </Col>
      </Row>
      <Row style={Styles.listText1}>
        <View style={Styles.midBoxList}>
          <TextItem
            txt={'Q: Mon application ne fonctionne pas'}
            fontWeight="bold"
            variant="bodyMedium"
          />
          <View style={Styles.space}></View>

          <TextItem txt={'À essayer, en ordre:'} fontWeight="bold" variant="bodyMedium" />

          <UnorderedList
            data={[
              'Assurez-vous que votre application est à jour',
              'Essayez de la désinstaller puis de réinstaller et redémarrez votre téléphone',
              'Il est possible que votre téléphone ne soit pas compatible, vous devez alors changer de téléphone pour utiliser Vaistat.'
            ]}
          />
        </View>
      </Row>
      <Row style={Styles.FirstRow}>
        <Col style={[Styles.midTextCol, Styles.jUSTIFYcenter]}>
          <TextItem
            txt={'Questions relatives à votre compte'}
            fontWeight="bold"
            variant="bodyMedium"
          />
        </Col>
        <Col style={Styles.centerAll}>
          <ArrowUP />
        </Col>
      </Row>
      <Row style={Styles.listText2}>
        <View style={Styles.midBoxList}>
          <TextItem
            txt={
              'Q: Je me suis inscrit à travers le site internet, pourquoi je ne vois pas encore de colis sur la carte?'
            }
            fontWeight="bold"
            variant="bodyMedium"
          />
          <UnorderedList
            data={[
              'Avant d’avoir accès à la carte, vous devez passez  travers le processus d’intégration'
            ]}
          />
        </View>
      </Row>
    </Grid>
  );
};

export default FAQ;
