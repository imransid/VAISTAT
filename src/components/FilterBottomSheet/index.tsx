import React, { type FC, type PropsWithChildren, type Ref, useCallback, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { type BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import Styles from './Styles';

interface filterBottomSheetProps {
  bottomSheetModalRef: Ref<BottomSheetModalMethods>;
  handleOnDismiss: () => void;
}

const FilterBottomSheet: FC<PropsWithChildren<filterBottomSheetProps>> = ({
  bottomSheetModalRef,
  handleOnDismiss,
  children
}: PropsWithChildren<filterBottomSheetProps>) => {
  const snapPoints = useMemo(() => ['25%', '55%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={Styles.container}>
        <BottomSheetModal
          style={Styles.shadow}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          onDismiss={handleOnDismiss}>
          <ScrollView style={Styles.childContent}>{children}</ScrollView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default FilterBottomSheet;
