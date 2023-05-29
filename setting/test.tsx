function a(){
    return(
    <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
        />
        <Pressable
        onPress={onClick}
        style={{padding: 15, backgroundColor: 'red'}}>
        <Text style={{color: 'white'}}>글자색 하얀색</Text>
        </Pressable>)
}
