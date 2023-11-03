// import React from 'react';
// import { ScrollView, TouchableOpacity, View } from 'react-native';
// import { Col, Grid, Row } from 'react-native-easy-grid';
// import { Text } from 'react-native-paper';
// import { type StackScreenProps } from '@react-navigation/stack';

// import { FBIcon, Google, LockUser, Logo } from '@/assets';
// import { Button, Checkbox, SimpleCheckBox, TextInput, TextItem } from '@/components';
// import { type AuthStackParamList } from '@/models';
// import { colors } from '@/theme/colors';

// import Styles from './Styles';

// type Props = StackScreenProps<AuthStackParamList>;

// const Profile: React.FC<Props> = ({ navigation }: Props) => {
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const [status, setCheck] = React.useState(false);

//     const goToPage = (routeName: string): void => {
//         navigation.navigate(routeName);
//     };

//     return (
//         <ScrollView>
//             <Grid style={Styles.container}>
//                 <Row style={Styles.LogoRow}>
//                     <TextItem txt={'Profile'} variant='titleMedium' color={colors.black} />
//                 </Row>

//                 <Row style={Styles.HeaderRow}>
//                     <View style={{ width: '100%', flexDirection: 'column' }}>
//                         <View style={{ width: '100%' }}>
//                             <TextItem txt={'You’re almost there!'} variant='titleSmall' color={colors.black} />
//                         </View>
//                         <View style={{ width: '100%' }}>
//                             <TextItem txt={'Just answer the following questions'} variant='titleSmall' color={colors.black} />
//                         </View>
//                     </View>
//                 </Row>

//                 <Row style={Styles.HeaderRow}>
//                     <View style={{ width: '100%' }}>
//                         <View style={{ width: '100%' }}>
//                             <TextItem txt={'Which languages do you speak?'} variant='titleMedium' fontWeight='normal' color={colors.gray} />
//                         </View>
//                     </View>
//                 </Row>

//                 <Row style={Styles.input}>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <SimpleCheckBox status={status} setCheck={() => setCheck(status!)} />
//                     </View>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <TextItem txt={'English'} />
//                     </View>
//                 </Row>

//                 <Row style={Styles.input}>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <SimpleCheckBox status={status} setCheck={() => setCheck(status!)} />
//                     </View>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <TextItem txt={'French'} />
//                     </View>
//                 </Row>

//                 <Row style={Styles.HeaderRow}>
//                     <View style={{ width: '100%' }}>
//                         <View style={{ width: '100%' }}>
//                             <TextItem txt={'When are you available?'} variant='titleMedium' fontWeight='normal' color={colors.gray} />
//                         </View>
//                     </View>
//                 </Row>

//                 <Row style={Styles.input}>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <SimpleCheckBox status={status} setCheck={() => setCheck(status!)} />
//                     </View>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <TextItem txt={'Morning'} />
//                     </View>
//                 </Row>

//                 <Row style={Styles.input}>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <SimpleCheckBox status={status} setCheck={() => setCheck(status!)} />
//                     </View>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <TextItem txt={'Afternoon'} />
//                     </View>
//                 </Row>

//                 <Row style={Styles.input}>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <SimpleCheckBox status={status} setCheck={() => setCheck(status!)} />
//                     </View>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <TextItem txt={'Evening'} />
//                     </View>
//                 </Row>

//                 <Row style={Styles.input}>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <SimpleCheckBox status={status} setCheck={() => setCheck(status!)} />
//                     </View>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <TextItem txt={'Weekend'} />
//                     </View>
//                 </Row>

//                 <Row style={Styles.input}>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <SimpleCheckBox status={status} setCheck={() => setCheck(status!)} />
//                     </View>
//                     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                         <TextItem txt={'Week days'} />
//                     </View>
//                 </Row>

//                 <Row style={Styles.divider} />

//                 <Row style={Styles.divider} />
//                 <Row style={Styles.divider} />
//                 <Row style={Styles.divider} />

//                 <Row style={Styles.buttonTxt}>
//                     <TouchableOpacity
//                         onPress={() => {
//                             goToPage('FAQ');
//                         }}>
//                         <TextItem txt={'FAQ'} color={colors.primary} variant="bodyLarge" />
//                     </TouchableOpacity>
//                 </Row>

//             </Grid>
//         </ScrollView>
//     );
// };

// export default Profile;
