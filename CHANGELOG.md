# Changelog

## 0.61.0 - Unreleased

### Added

- URL: Do not prepend baseUrl if the URL is not a relative URL ([e104204](https://github.com/facebook/react-native/commit/e104204) by [jeswinsimon](mailto:jeswinsimon@gmail.com))
- Add Object type to schema ([06259a7](https://github.com/facebook/react-native/commit/06259a7) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- React sync for revisions 55bc393...85d05b3 ([0ccedf3](https://github.com/facebook/react-native/commit/0ccedf3) by [Eli White](mailto:eliwhite@fb.com))
- use array for passing measure callback reasons count ([8830698](https://github.com/facebook/react-native/commit/8830698) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Remove outdated React async component check ([cf819bf](https://github.com/facebook/react-native/commit/cf819bf) by [Brian Vaughn](mailto:bvaughn@fb.com))
- Fixed rotateZ native animation ([f4f08d3](https://github.com/facebook/react-native/commit/f4f08d3) by [Thibault Malbranche](mailto:thibault.malbranche@epitech.eu))
- Update commands transform to use helper ([7c0b735](https://github.com/facebook/react-native/commit/7c0b735) by [Eli White](mailto:eliwhite@fb.com))
- Added counts for measure callbacks reasons in an array inside qpl annotations ([c367372](https://github.com/facebook/react-native/commit/c367372) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Improvement to lazy view config loading ([d8f1161](https://github.com/facebook/react-native/commit/d8f1161) by [Martin Sherburn](mailto:mns@oculus.com))
- Fix creation of new ComponentDescriptorRegistry when switching surface ([678e833](https://github.com/facebook/react-native/commit/678e833) by [Samuel Susla](mailto:samuelsusla@fb.com))
- Added support for Hermes ([d7f5153](https://github.com/facebook/react-native/commit/d7f5153) by [cpojer](mailto:christoph.pojer@gmail.com))
- Rename addRootView to startSurface ([7244bae](https://github.com/facebook/react-native/commit/7244bae) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Updated embedded react-devtools-core package to the latest version in preparation for the upcoming v4 DevTools release ([a3a22fa](https://github.com/facebook/react-native/commit/a3a22fa) by [Brian Vaughn](mailto:bvaughn@fb.com))
- Test ReactFiberErrorDialog in terms of NativeExceptionsManager ([5029195](https://github.com/facebook/react-native/commit/5029195) by [Moti Zilberman](mailto:moti@fb.com))
- dev error for excessive pending callbacks ([1e45a41](https://github.com/facebook/react-native/commit/1e45a41) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Remove the escape hatch ([93aab84](https://github.com/facebook/react-native/commit/93aab84) by [Dan Abramov](mailto:gaearon@fb.com))
- Allow key of objects to be nullable ([b4ac9dd](https://github.com/facebook/react-native/commit/b4ac9dd) by [Michał Osadnik](mailto:osdnk@fb.com))
- Follow up e2e testing mechanism with real tests ([6e73304](https://github.com/facebook/react-native/commit/6e73304) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add e2e tests skeleton for generated cpp code ([d672247](https://github.com/facebook/react-native/commit/d672247) by [Michał Osadnik](mailto:osdnk@fb.com))
- Harden the Flow parser to handle more AST formats for commands and props ([f7695e0](https://github.com/facebook/react-native/commit/f7695e0) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add ReactFiberErrorDialog from React + tests ([a9cab21](https://github.com/facebook/react-native/commit/a9cab21) by [Moti Zilberman](mailto:moti@fb.com))
- Added a default Prettier config for new projects ([7254bab](https://github.com/facebook/react-native/commit/7254bab) by [JP Driver](mailto:jp.driver@formidable.com))
- Support for accessibility actions to all Touchables. With TouchableWithoutFeedback being a special case where text must be a child of view. (See AccessibilityExample.js for an example) ([b8ccb26](https://github.com/facebook/react-native/commit/b8ccb26) by [Kevin Gonzales](mailto:kegonzl@amazon.com))
- Export Modal’s Flow types ([a0acbd6](https://github.com/facebook/react-native/commit/a0acbd6) by [Cory Reed](mailto:swashcap@gmail.com))
- Bump CLI to ^2.2.0 ([5b448ec](https://github.com/facebook/react-native/commit/5b448ec) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Add support for callback ([a269c1f](https://github.com/facebook/react-native/commit/a269c1f) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add support for primitive types parsing for params ([3a5bdc1](https://github.com/facebook/react-native/commit/3a5bdc1) by [Michał Osadnik](mailto:osdnk@fb.com))
- Force WithDefault not to be an optional value ([61e95e5](https://github.com/facebook/react-native/commit/61e95e5) by [Michał Osadnik](mailto:osdnk@fb.com))
- allow custom StickyHeader in ScrollView-based components ([e6c7846](https://github.com/facebook/react-native/commit/e6c7846) by [Vojtech Novak](mailto:vonovak@gmail.com))
- Update react-refresh dependency ([9c82d3c](https://github.com/facebook/react-native/commit/9c82d3c) by [Dan Abramov](mailto:gaearon@fb.com))
- Move event NodeLayout to end of NodeLayout step ([4332a28](https://github.com/facebook/react-native/commit/4332a28) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- BUCK: added rn_apple_library alias ([1e0c30c](https://github.com/facebook/react-native/commit/1e0c30c) by [Kevin Gozali](mailto:fkg@fb.com))
- Fix weird formatting in FabricUIManager ([0d971f9](https://github.com/facebook/react-native/commit/0d971f9) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Disable dev tools in bridgeless mode ([aeef7b5](https://github.com/facebook/react-native/commit/aeef7b5) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Fix ItemSeparatorComponent's leadingItem prop not being updated ([1e42809](https://github.com/facebook/react-native/commit/1e42809) by [Bruno Lemos](mailto:brunohplemos@gmail.com))
- add TM spec for I18nManager ([18feded](https://github.com/facebook/react-native/commit/18feded) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- add TM spec for ImageStore ([5e6cebe](https://github.com/facebook/react-native/commit/5e6cebe) by [mitulsavani](mailto:mitul.savani2@yahoo.com))
- Cache CocoaPods specs-repo ([4a6676d](https://github.com/facebook/react-native/commit/4a6676d) by [Héctor Ramos](mailto:hector@hectorramos.com))
- Remove vendored fetch polyfill, update to whatwg-fetch@3.0 ([bccc92d](https://github.com/facebook/react-native/commit/bccc92d) by [Janic Duplessis](mailto:janicduplessis@gmail.com))
- TM spec for DevSettings ([85252a6](https://github.com/facebook/react-native/commit/85252a6) by [Jarvis Luong](mailto:jarvisluong@gmail.com))
- Add TM spec for UIManager ([a0879ce](https://github.com/facebook/react-native/commit/a0879ce) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- add TM spec for PlatformConstants ([7fd08e1](https://github.com/facebook/react-native/commit/7fd08e1) by [Tom Sanderson](mailto:sattaman@users.noreply.github.com))
- Add TurboModule spec for WebSocketModule ([5705ea1](https://github.com/facebook/react-native/commit/5705ea1) by [Jean Regisser](mailto:jean.regisser@gmail.com))
- ImagePickerIOS [was moved to community repo](https://github.com/react-native-community/react-native-image-picker-ios) ([6d54423](https://github.com/facebook/react-native/commit/6d54423) by [Johan-dutoit](mailto:jdutoit.dev@gmail.com))
- TM spec for Networking ([e8037cb](https://github.com/facebook/react-native/commit/e8037cb) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Add TM spec for AndroidToast ([08efb1d](https://github.com/facebook/react-native/commit/08efb1d) by [Wojteg1337](mailto:feelun132@gmail.com))
- Add TM spec for Settings ([aaa4127](https://github.com/facebook/react-native/commit/aaa4127) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- Add TurboModule spec for PermissionsAndroid ([82fe1b0](https://github.com/facebook/react-native/commit/82fe1b0) by [Krzysztof Borowy](mailto:krizzu.dev@gmail.com))
- Add TurboModule spec for AccessibilityManager ([71461cb](https://github.com/facebook/react-native/commit/71461cb) by [michalchudziak](mailto:michal.chudziak@gmail.com))
- Add TurboModule spec for ModalManager ([a3479c2](https://github.com/facebook/react-native/commit/a3479c2) by [Abhinandan Ramaprasath](mailto:abhiin1947@gmail.com))
- TM Spec for ImageEditor ([d2ef114](https://github.com/facebook/react-native/commit/d2ef114) by [Youssouf El Azizi](mailto:youssoufelazizi@gmail.com))
- Add TurboModule spec for AlertManager ([122cc8b](https://github.com/facebook/react-native/commit/122cc8b) by [Daiki Ihara](mailto:sasurau4@gmail.com))
- [General][added] Add codegen flow parser ([057ea6a](https://github.com/facebook/react-native/commit/057ea6a) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- TM add spec for DialogManagerAndroid ([32340d3](https://github.com/facebook/react-native/commit/32340d3) by [Uilque Messias](mailto:uqmessias@gmail.com))
- TM add spec for AnimatedModule ([116ac65](https://github.com/facebook/react-native/commit/116ac65) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Fix layout animation crash ([9fb31d1](https://github.com/facebook/react-native/commit/9fb31d1) by [Blair Vanderhoof](mailto:blairv@fb.com))
- Add TurboModule spec for Timing ([db0ec66](https://github.com/facebook/react-native/commit/db0ec66) by [Jean Regisser](mailto:jean.regisser@gmail.com))
- TM Spec for HeapCapture ([94029ee](https://github.com/facebook/react-native/commit/94029ee) by [Wojteg1337](mailto:feelun132@gmail.com))
- Add TurboModule spec for AccessibilityInfo ([67c3ed3](https://github.com/facebook/react-native/commit/67c3ed3) by [michalchudziak](mailto:michal.chudziak@gmail.com))
- Add TM spec for BlobModule ([342c81d](https://github.com/facebook/react-native/commit/342c81d) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- TM Add spec for ExceptionsManager ([8ea749a](https://github.com/facebook/react-native/commit/8ea749a) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Add TurboModule spec for TimePickerAndroid ([65b10b3](https://github.com/facebook/react-native/commit/65b10b3) by [Jean Regisser](mailto:jean.regisser@gmail.com))
- Add TM spec for KeyboardObserver ([905e3fc](https://github.com/facebook/react-native/commit/905e3fc) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- Add a test-ios command to run iOS RNTester tests locally ([45b5e5f](https://github.com/facebook/react-native/commit/45b5e5f) by [Héctor Ramos](mailto:hector@hectorramos.com))
- add TM spec for JSDevSupport ([d7a5e3e](https://github.com/facebook/react-native/commit/d7a5e3e) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- Add TurboModule spec for SourceCode ([163fb08](https://github.com/facebook/react-native/commit/163fb08) by [Jean Regisser](mailto:jean.regisser@gmail.com))
- add TM spec for FileReaderModule ([0e7a2ca](https://github.com/facebook/react-native/commit/0e7a2ca) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- Add TurboModule spec for TVNavigationEventEmitter ([781c68c](https://github.com/facebook/react-native/commit/781c68c) by [Jean Regisser](mailto:jean.regisser@gmail.com))
- TM Spec for DatePickerAndroid ([34d88bc](https://github.com/facebook/react-native/commit/34d88bc) by [Pedro Pessoa](mailto:pessoa.pedro91@gmail.com))
- add TM spec for HeadlessJsTaskSupport ([56c3852](https://github.com/facebook/react-native/commit/56c3852) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- add TM spec for RedBox ([c44d4f9](https://github.com/facebook/react-native/commit/c44d4f9) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- add TM spec for DevLoadingView ([35cf427](https://github.com/facebook/react-native/commit/35cf427) by [Glenna Buford](mailto:glenna@8fit.com))
- Add TM spec for AnimationsDebugModule ([00fe438](https://github.com/facebook/react-native/commit/00fe438) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- TM add spec for NativeDeviceEventManager ([580088c](https://github.com/facebook/react-native/commit/580088c) by [Uilque Messias](mailto:uqmessias@gmail.com))
- Add TM spec for JSCSamplingProfiler ([6c573f7](https://github.com/facebook/react-native/commit/6c573f7) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- VirtualizedList and FlatList tests and updated RNTester example ([57a1e7c](https://github.com/facebook/react-native/commit/57a1e7c) by [Alan Kenyon](mailto:alan@shipt.com))
- [Android] Add documentation to TextInput's Flow types ([d00f088](https://github.com/facebook/react-native/commit/d00f088) by [empyrical](mailto:empyrical@outlook.com))
- [Android] Added jitpack repository to template ([1a92cf9](https://github.com/facebook/react-native/commit/1a92cf9) by [iyegoroff](mailto:iegoroff@gmail.com))
- [Android] Commands codegen: added RCT prefix for protocols, extern C functions, and file names ([57fe1f4](https://github.com/facebook/react-native/commit/57fe1f4) by [Kevin Gozali](mailto:fkg@fb.com))
- [Android] Add exception in .gitignore for `debug.keystore` to the android template ([d550256](https://github.com/facebook/react-native/commit/d550256) by [Anders Bondehagen](mailto:anders@bondehagen.com))
- [Android] Update types for autoComplete prop ([daa6b0a](https://github.com/facebook/react-native/commit/daa6b0a) by [Dan Gilbert](mailto:drtangible@users.noreply.github.com))
- [Android] Release underlying resources when JS instance is GC'ed on Android ([88e18b6](https://github.com/facebook/react-native/commit/88e18b6) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [Android] Prevent scrollView to scroll with dpad when scrollEnabled property is set to false ([00c8b3c](https://github.com/facebook/react-native/commit/00c8b3c) by [aamalric](mailto:aamalric@wyplay.com))
- [Android] DrawerLayoutAndroid now supports strings and not just numbers for drawerPosition ([1d0b397](https://github.com/facebook/react-native/commit/1d0b397) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Add event key action to EventHandler events ([d010fc3](https://github.com/facebook/react-native/commit/d010fc3) by [aamalric](mailto:aamalric@wyplay.com))
- [Android] RefreshControl now supports strings and not just numbers for size ([09fe159](https://github.com/facebook/react-native/commit/09fe159) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Release underlying resources when JS instance is GC'ed on Android ([3a8b988](https://github.com/facebook/react-native/commit/3a8b988) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [Android] Allow headless JS tasks to return a promise that will cause the task to be retried again with the specified delay ([ac7ec46](https://github.com/facebook/react-native/commit/ac7ec46) by [Joshua Ong](mailto:ong.joshuajames@gmail.com))
- [Android] Adds a new listener for `onWindowFocusChanged` ([d45818f](https://github.com/facebook/react-native/commit/d45818f) by [Krzysztof Borowy](mailto:krizzu.dev@gmail.com))
- [Android] Add native debug build support to improve debugging DX ([6b4e526](https://github.com/facebook/react-native/commit/6b4e526) by [Kudo Chien](mailto:ckchien@gmail.com))
- [Android][android] [Fixed] fix indexed RAM bundle ([d8fa120](https://github.com/facebook/react-native/commit/d8fa120) by [Dratwas](mailto:drapich.piotr@gmail.com))
- [Android][blob] Release underlying resources when JS instance is GC'ed on Android ([a4f7e17](https://github.com/facebook/react-native/commit/a4f7e17) by [Janic Duplessis](mailto:janicduplessis@gmail.com))
- [Android] Rename onAccessibilityAction event on Android ([7fb02bd](https://github.com/facebook/react-native/commit/7fb02bd) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- [Android] Add showSoftInputOnFocus to TextInput ([d88e470](https://github.com/facebook/react-native/commit/d88e470) by [valerio.ponte](mailto:valerio.ponte@smarkets.com))
- [Android] Update the "nativeStackAndroid" frame limit to 50 and include class name ([206bb6d](https://github.com/facebook/react-native/commit/206bb6d) by [rkang](mailto:rkang@tableau.com))
- [Android] allow custom spannedFromShadowNode in ReactTextInputShadowNode subclasses ([04564a0](https://github.com/facebook/react-native/commit/04564a0) by [Vojtech Novak](mailto:vonovak@gmail.com))
- [Android] Set duration=0 for android keyboard events ([cea0a2b](https://github.com/facebook/react-native/commit/cea0a2b) by [nossbigg](mailto:chenggibson@gmail.com))
- [Android] allow custom maybeSetText logic for ReactEditText subclasses ([c9df1db](https://github.com/facebook/react-native/commit/c9df1db) by [Vojtech Novak](mailto:vonovak@gmail.com))
- [Android] Return endCoordinates for keyboardDidHide keyboard event ([168a67e](https://github.com/facebook/react-native/commit/168a67e) by [nossbigg](mailto:chenggibson@gmail.com))
- [iOS] Migrate RCTAxialGradientView to JS codegen ([a5aaca7](https://github.com/facebook/react-native/commit/a5aaca7) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [iOS] Update loading pre-bundled message ([eb92f81](https://github.com/facebook/react-native/commit/eb92f81) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [iOS] Remove 's.static_framework = true' requirement for podspec ([ca9e108](https://github.com/facebook/react-native/commit/ca9e108) by [James Treanor](mailto:jtreanor3@gmail.com))
- [iOS] iOS: Added missing React-jsi dep for FBReactNativeSpec target ([3b6f6ca](https://github.com/facebook/react-native/commit/3b6f6ca) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] Updated podspecs for improved compatibility with different install types ([6ef9106](https://github.com/facebook/react-native/commit/6ef9106) by [James Treanor](mailto:jtreanor3@gmail.com))
- [iOS] Fixed compilation for macOS (Project Catalyst) -- not meant for production use yet ([3724810](https://github.com/facebook/react-native/commit/3724810) by [Radosław Pietruszewski](mailto:radex@radosaws-macbook-pro.local))
- [iOS] Add generated `xcshareddata` folder to gitignore ([d57cdac](https://github.com/facebook/react-native/commit/d57cdac) by [Karan Thakkar](mailto:karanjthakkar@gmail.com))
- [iOS] RCTTurboModule now available from RCTTurboModules.xcodeproj ([bd29112](https://github.com/facebook/react-native/commit/bd29112) by [radex](mailto:radexpl@gmail.com))
- [iOS] PasswordRules for new password textContentType input fields ([dff3588](https://github.com/facebook/react-native/commit/dff3588) by [Pavlos Vinieratos](mailto:pvinis@gmail.com))
- [iOS] Added RCTRequired utils for typesafety ([3e65122](https://github.com/facebook/react-native/commit/3e65122) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] Use CALayers to draw text, fixes rendering for long text ([690e85d](https://github.com/facebook/react-native/commit/690e85d) by [Janic Duplessis](mailto:janicduplessis@gmail.com))
- [iOS][ios] [Added] – Bring back autolinking to the iOS template ([86a97e7](https://github.com/facebook/react-native/commit/86a97e7) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- [iOS] Support events using RCT{Direct|Bubbling}EventBlock ([1fb4b6c](https://github.com/facebook/react-native/commit/1fb4b6c) by [Janic Duplessis](mailto:janicduplessis@gmail.com))
- [iOS] Support events using RCT{Direct|Bubbling}EventBlock ([083f835](https://github.com/facebook/react-native/commit/083f835) by [Janic Duplessis](mailto:janicduplessis@gmail.com))
- [iOS] Fixes selection of single line text input ([c38f167](https://github.com/facebook/react-native/commit/c38f167) by [zhongwuzw](mailto:zhongwuzw@qq.com))

### Changed

- Fix BUCK-related React Native CI failures ([111cb32](https://github.com/facebook/react-native/commit/111cb32) by [Marc Horowitz](mailto:mhorowitz@fb.com))
- Add support for spread with ReadOnlyArray ([6c3b01d](https://github.com/facebook/react-native/commit/6c3b01d) by [Eli White](mailto:eliwhite@fb.com))
- Support Double in when generating props for .h files, in parsing component props, and for commands and events ([c8b9a3f](https://github.com/facebook/react-native/commit/c8b9a3f) by [Joshua Gross](mailto:joshuagross@fb.com))
- Split buck rules for component and modules ([269ea48](https://github.com/facebook/react-native/commit/269ea48) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add error message for paring unnamed params ([996ea88](https://github.com/facebook/react-native/commit/996ea88) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add e2e tests for array object props ([958b7aa](https://github.com/facebook/react-native/commit/958b7aa) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Parse $ReadOnlyArray<$ReadOnly{}> props ([86eb4c7](https://github.com/facebook/react-native/commit/86eb4c7) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Generate array<object> props ([243ccc5](https://github.com/facebook/react-native/commit/243ccc5) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Add array<object> props to schema ([bc1c7b1](https://github.com/facebook/react-native/commit/bc1c7b1) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Add Object props support for cxx ([56f9eb3](https://github.com/facebook/react-native/commit/56f9eb3) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Generate super call to BaseViewManagerDelegate if delegate has no props ([a206e91](https://github.com/facebook/react-native/commit/a206e91) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- add the jni initializer to the build for sampling profiler ([0cf1c6d](https://github.com/facebook/react-native/commit/0cf1c6d) by [Rodrigo Salazar](mailto:rodrigos@fb.com))
- Add failure tests for duplicate props with the same name ([5113323](https://github.com/facebook/react-native/commit/5113323) by [Eli White](mailto:eliwhite@fb.com))
- Support deeply nested spreads ([ac6c747](https://github.com/facebook/react-native/commit/ac6c747) by [Eli White](mailto:eliwhite@fb.com))
- Support spreading locally defined types deeply ([9ae866c](https://github.com/facebook/react-native/commit/9ae866c) by [Eli White](mailto:eliwhite@fb.com))
- Support spreading locally defined types ([0a39674](https://github.com/facebook/react-native/commit/0a39674) by [Eli White](mailto:eliwhite@fb.com))
- Add support for `Double` prop type ([a02176e](https://github.com/facebook/react-native/commit/a02176e) by [Joshua Gross](mailto:joshuagross@fb.com))
- Use SoundManager in Pressability and Touchable ([9dbe5e2](https://github.com/facebook/react-native/commit/9dbe5e2) by [David Vacca](mailto:dvacca@fb.com))
- Omit getConstants for codegening if object is empty ([a5ea720](https://github.com/facebook/react-native/commit/a5ea720) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add setMethodArgConversionSelector ([c0304aa](https://github.com/facebook/react-native/commit/c0304aa) by [Michał Osadnik](mailto:osdnk@fb.com))
- Fix name of key obtaining from dictionary in inline method in generated objcpp ([40dd48c](https://github.com/facebook/react-native/commit/40dd48c) by [Michał Osadnik](mailto:osdnk@fb.com))
- Change type of params in methods' protocols to nongeneric ([024ce5d](https://github.com/facebook/react-native/commit/024ce5d) by [Michał Osadnik](mailto:osdnk@fb.com))
- fix optional key in structs in new codegen ([d3c30cd](https://github.com/facebook/react-native/commit/d3c30cd) by [Michał Osadnik](mailto:osdnk@fb.com))
- Remove multiple RTCConvert import ([9961449](https://github.com/facebook/react-native/commit/9961449) by [Michał Osadnik](mailto:osdnk@fb.com))
- hadle nullable params in generated objcpp ([4a9035a](https://github.com/facebook/react-native/commit/4a9035a) by [Michał Osadnik](mailto:osdnk@fb.com))
- Use feature flag to enable view manager delegates for setting props ([639da37](https://github.com/facebook/react-native/commit/639da37) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- Commands: support Float arguments ([825e1c0](https://github.com/facebook/react-native/commit/825e1c0) by [Joshua Gross](mailto:joshuagross@fb.com))
- Add reexport_all_header_dependencies to (yet more) misc rules ([724fe11](https://github.com/facebook/react-native/commit/724fe11) by [Adam Ernst](mailto:adamjernst@fb.com))
- Add RNTester and UITestBed as dev routes in main apps ([450e4a7](https://github.com/facebook/react-native/commit/450e4a7) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Fix jest test crashes with animated components ([a9c8103](https://github.com/facebook/react-native/commit/a9c8103) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Move HermesSamplingProfiler to OSS ([054d2fc](https://github.com/facebook/react-native/commit/054d2fc) by [Ram N](mailto:axe@fb.com))
- Improve ModuleRegistryBuilder assertion ([47afa7c](https://github.com/facebook/react-native/commit/47afa7c) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Add Flipper to React Native OSS by default ([3a66fc7](https://github.com/facebook/react-native/commit/3a66fc7) by [Ram N](mailto:axe@fb.com))
- Better error message for invalid type annotation ([a60e581](https://github.com/facebook/react-native/commit/a60e581) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Add support for parsing object props ([e110f04](https://github.com/facebook/react-native/commit/e110f04) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Move generateStructName to CppHelpers ([e6c1e81](https://github.com/facebook/react-native/commit/e6c1e81) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Add view config support for Object props ([50b821d](https://github.com/facebook/react-native/commit/50b821d) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Add object prop tests for unchanged fixtures ([76b8b1d](https://github.com/facebook/react-native/commit/76b8b1d) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Bump CLI to ^3.0.0-alpha.1 ([5edd1c6](https://github.com/facebook/react-native/commit/5edd1c6) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- improve VirtualizedList error message ([bef87b6](https://github.com/facebook/react-native/commit/bef87b6) by [Vojtech Novak](mailto:vonovak@gmail.com))
- chore: Link to CLA wiki and CLA form ([e2d55d5](https://github.com/facebook/react-native/commit/e2d55d5) by [justin ross](mailto:ross.justin.t@gmail.com))
- @allow-large-files flow 0.105 xplat deploy ([b1ca5be](https://github.com/facebook/react-native/commit/b1ca5be) by [Avik Chaudhuri](mailto:avik@fb.com))
- Remove usage of NativeModules.AccessibilityManager ([bfecb12](https://github.com/facebook/react-native/commit/bfecb12) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- xplat/js/react-native-github ([91f139b](https://github.com/facebook/react-native/commit/91f139b) by [Logan Daniels](mailto:logand@fb.com))
- Manual fixes for xplat/js/react-native-github ([9127fb5](https://github.com/facebook/react-native/commit/9127fb5) by [Logan Daniels](mailto:logand@fb.com))
- Use eslint-plugin-prettier recommended config ([d2b92ff](https://github.com/facebook/react-native/commit/d2b92ff) by [Kant](mailto:quent92100@gmail.com))
- Update regex used to check for codegenNativeComponent ([2e32b8c](https://github.com/facebook/react-native/commit/2e32b8c) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Introduce NativeFrameRateLogger ([aecdee0](https://github.com/facebook/react-native/commit/aecdee0) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Introduce NativeBugReporting ([b1b5bd4](https://github.com/facebook/react-native/commit/b1b5bd4) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Fix veryfying exports in module codegen ([0dcd57c](https://github.com/facebook/react-native/commit/0dcd57c) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add pointer to generated id<NSObject> ([28e668e](https://github.com/facebook/react-native/commit/28e668e) by [Michał Osadnik](mailto:osdnk@fb.com))
- change name convention for modules ([0da4612](https://github.com/facebook/react-native/commit/0da4612) by [Michał Osadnik](mailto:osdnk@fb.com))
- fallback not understandable types from methods to object ([52c86a9](https://github.com/facebook/react-native/commit/52c86a9) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add handling of nullable return value ([35f81f6](https://github.com/facebook/react-native/commit/35f81f6) by [Michał Osadnik](mailto:osdnk@fb.com))
- Minor improvements in native modules codegens ([b5b6d1d](https://github.com/facebook/react-native/commit/b5b6d1d) by [Michał Osadnik](mailto:osdnk@fb.com))
- Format code in ReactCommon/turbomodule/core ([c237794](https://github.com/facebook/react-native/commit/c237794) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Add support for casting codegenNativeComponent ([9b1465b](https://github.com/facebook/react-native/commit/9b1465b) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Don't copy children in YGNodeComputeFlexBasisForChildren ([4c11b55](https://github.com/facebook/react-native/commit/4c11b55) by [Adlai Holler](mailto:adlai@google.com))
- Use `Bitfield` in `YGLayout` ([f94360a](https://github.com/facebook/react-native/commit/f94360a) by [David Aurelio](mailto:davidaurelio@fb.com))
- Use `Bitfield` in `YGNode` and `YGStyle` ([2c73dbd](https://github.com/facebook/react-native/commit/2c73dbd) by [David Aurelio](mailto:davidaurelio@fb.com))
- Remove style property bitmask ([f33a623](https://github.com/facebook/react-native/commit/f33a623) by [David Aurelio](mailto:davidaurelio@fb.com))
- Add portable bit field implementation ([d1d48ef](https://github.com/facebook/react-native/commit/d1d48ef) by [David Aurelio](mailto:davidaurelio@fb.com))
- Add \$FlowFixMeEmpty to suppressions in RN's .github.flowconfig ([192bc1d](https://github.com/facebook/react-native/commit/192bc1d) by [Logan Daniels](mailto:logand@fb.com))
- Add tests for codegenNativeComponent ([2e8ecab](https://github.com/facebook/react-native/commit/2e8ecab) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Fix error string in codegenNativeComponent ([deaaab9](https://github.com/facebook/react-native/commit/deaaab9) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Use shorthand for Fragment in App.js ([7cac6a4](https://github.com/facebook/react-native/commit/7cac6a4) by [Kid Commit](mailto:26439946+ferdicus@users.noreply.github.com))
- Pop frames correctly in console.error handler ([3eaf245](https://github.com/facebook/react-native/commit/3eaf245) by [Moti Zilberman](mailto:moti@fb.com))
- Fix crash when tapping full screen button on video ad ([e557901](https://github.com/facebook/react-native/commit/e557901) by [Samuel Susla](mailto:samuelsusla@fb.com))
- Switch Platform Constansts to use typedConstants structs ([2956eb2](https://github.com/facebook/react-native/commit/2956eb2) by [Michał Osadnik](mailto:osdnk@fb.com))
- Expose JS Responder handler in Scheduler API ([08e4537](https://github.com/facebook/react-native/commit/08e4537) by [David Vacca](mailto:dvacca@fb.com))
- Change Animated's Flow Type to require useNativeDriver be explicit ([d123bea](https://github.com/facebook/react-native/commit/d123bea) by [Eli White](mailto:eliwhite@fb.com))
- Give better error message for nullable refs ([9bc77fa](https://github.com/facebook/react-native/commit/9bc77fa) by [Eli White](mailto:eliwhite@fb.com))
- Perform cleanup when ReactApplicationContext is destroyed ([29ec640](https://github.com/facebook/react-native/commit/29ec640) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Type ErrorUtils (error-guard.js) ([9f85f1e](https://github.com/facebook/react-native/commit/9f85f1e) by [Moti Zilberman](mailto:moti@fb.com))
- Split module codegen buck rules for cpp and objcpp ([32c7e3a](https://github.com/facebook/react-native/commit/32c7e3a) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add handling of optionals for generating constants structs ([6bb41d1](https://github.com/facebook/react-native/commit/6bb41d1) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add null/undefined check for error handling ([2198203](https://github.com/facebook/react-native/commit/2198203) by [Sensen Chen](mailto:sensenc@fb.com))
- Register Turbo Module SoundManager in Catalyst, FB4A and Workplace ([1452acd](https://github.com/facebook/react-native/commit/1452acd) by [David Vacca](mailto:dvacca@fb.com))
- Create Turbo Module spect for SoundManager ([a03a406](https://github.com/facebook/react-native/commit/a03a406) by [David Vacca](mailto:dvacca@fb.com))
- Fix Dimensions for ComponentScript ([103ec2f](https://github.com/facebook/react-native/commit/103ec2f) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Add explicit `useNativeDriver: false` to callsites ([0a68763](https://github.com/facebook/react-native/commit/0a68763) by [Eli White](mailto:eliwhite@fb.com))
- Perform cleanup when ReactApplicationContext is destroyed ([e6c8ace](https://github.com/facebook/react-native/commit/e6c8ace) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Add runtime behavior to codegenNativeCommands ([a6fffb7](https://github.com/facebook/react-native/commit/a6fffb7) by [Eli White](mailto:eliwhite@fb.com))
- Fix lint in MountingManager ([a84a628](https://github.com/facebook/react-native/commit/a84a628) by [David Vacca](mailto:dvacca@fb.com))
- Add e2e tests and bunch of improvements for codegen ([094a9b5](https://github.com/facebook/react-native/commit/094a9b5) by [Michał Osadnik](mailto:osdnk@fb.com))
- create two layout pass reason flexLayout and flexMeasure instead of flex ([6ce9854](https://github.com/facebook/react-native/commit/6ce9854) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Enable Starting Sampling profile at App Startup ([bc2b52d](https://github.com/facebook/react-native/commit/bc2b52d) by [Ram N](mailto:axe@fb.com))
- Type StackFrame fields as nullable ([6764385](https://github.com/facebook/react-native/commit/6764385) by [Moti Zilberman](mailto:moti@fb.com))
- Move React error message formatting into ExceptionsManager ([2dadb9e](https://github.com/facebook/react-native/commit/2dadb9e) by [Moti Zilberman](mailto:moti@fb.com))
- Update ComponentDescriptorH to test all fixtures ([d6d7181](https://github.com/facebook/react-native/commit/d6d7181) by [Eli White](mailto:eliwhite@fb.com))
- Unify naming of dispatchCommand methods in UIManagerDelegate and Scheduler ([8f055a0](https://github.com/facebook/react-native/commit/8f055a0) by [David Vacca](mailto:dvacca@fb.com))
- Force FbReactInstanceManagerAppJob.IdleExecutor to run in the UIThread ([c46353a](https://github.com/facebook/react-native/commit/c46353a) by [Spencer Ahrens](mailto:sahrens@fb.com))
- codegenNativeCommands takes list of supported commands ([f161583](https://github.com/facebook/react-native/commit/f161583) by [Eli White](mailto:eliwhite@fb.com))
- Commands JS output, fix UIManager method name ([b5f7b42](https://github.com/facebook/react-native/commit/b5f7b42) by [Eli White](mailto:eliwhite@fb.com))
- Add jest-watch-typeahead ([d285860](https://github.com/facebook/react-native/commit/d285860) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Always pass props and state to Create mount item ([bf5e73e](https://github.com/facebook/react-native/commit/bf5e73e) by [Joshua Gross](mailto:joshuagross@fb.com))
- Validate objc command header compiles ([f22a7c6](https://github.com/facebook/react-native/commit/f22a7c6) by [Eli White](mailto:eliwhite@fb.com))
- Support string command arguments ([0314305](https://github.com/facebook/react-native/commit/0314305) by [Eli White](mailto:eliwhite@fb.com))
- Change fixture ([a174647](https://github.com/facebook/react-native/commit/a174647) by [Eli White](mailto:eliwhite@fb.com))
- Generate objc handler for commands ([88641f8](https://github.com/facebook/react-native/commit/88641f8) by [Eli White](mailto:eliwhite@fb.com))
- Generate ObjC component protocols ([47365da](https://github.com/facebook/react-native/commit/47365da) by [Eli White](mailto:eliwhite@fb.com))
- New `useWindowDimensions` hook to replace most `Dimensions` usage ([5ec382d](https://github.com/facebook/react-native/commit/5ec382d) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Set scheduler delegate during construction ([62591ac](https://github.com/facebook/react-native/commit/62591ac) by [Joshua Gross](mailto:joshuagross@fb.com))
- Better error messages for "unable to find view for viewstate" ([44be1f1](https://github.com/facebook/react-native/commit/44be1f1) by [Joshua Gross](mailto:joshuagross@fb.com))
- Update refs on remount ([ebb3243](https://github.com/facebook/react-native/commit/ebb3243) by [Dan Abramov](mailto:gaearon@fb.com))
- Use Metro support for auto-collapsing internal stack frames ([77125a1](https://github.com/facebook/react-native/commit/77125a1) by [Moti Zilberman](mailto:moti@fb.com))
- Include only Java classes in zip archive of generated files for JS codegen ([6f4c4b5](https://github.com/facebook/react-native/commit/6f4c4b5) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- upgrade to flow v0.104.0 ([59db059](https://github.com/facebook/react-native/commit/59db059) by [Marshall Roch](mailto:mroch@fb.com))
- Add codegening constants structs ([4a96918](https://github.com/facebook/react-native/commit/4a96918) by [Michał Osadnik](mailto:osdnk@fb.com))
- Generate inlines and structs for methods (not constants) ([fe5b179](https://github.com/facebook/react-native/commit/fe5b179) by [Michał Osadnik](mailto:osdnk@fb.com))
- Make Animation EndCallback type allow any return value ([bb623e6](https://github.com/facebook/react-native/commit/bb623e6) by [Mats Byrkjeland](mailto:matsbyr@gmail.com))
- Allow jest globals in **mocks** directories ([e78c013](https://github.com/facebook/react-native/commit/e78c013) by [Jacob Lee](mailto:artdent@gmail.com))
- Fall back to `JSON.stringify` in `console.log` if Symbol is unavailable ([1798897](https://github.com/facebook/react-native/commit/1798897) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Implement globalEvalWithSourceUrl ([71c84cf](https://github.com/facebook/react-native/commit/71c84cf) by [Moti Zilberman](mailto:moti@fb.com))
- Use prettyFormat for Metro logging ([abd7faf](https://github.com/facebook/react-native/commit/abd7faf) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Deprecate UIManager.measureLayoutRelativeToParent ([e42009b](https://github.com/facebook/react-native/commit/e42009b) by [David Vacca](mailto:dvacca@fb.com))
- Move RuntimeExecutor declaration to react/utils ([7266ebd](https://github.com/facebook/react-native/commit/7266ebd) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Add NativeModule Spec for StatusBarManager ([ccde2fd](https://github.com/facebook/react-native/commit/ccde2fd) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Back out D16434402, D16434634 ([136dde3](https://github.com/facebook/react-native/commit/136dde3) by [Jason Carreiro](mailto:jcarreiro@fb.com))
- Enable by default ([17f8e58](https://github.com/facebook/react-native/commit/17f8e58) by [Dan Abramov](mailto:gaearon@fb.com))
- Fix commands with no args ([fbd5dee](https://github.com/facebook/react-native/commit/fbd5dee) by [Eli White](mailto:eliwhite@fb.com))
- Remove switch statement if there are no props ([58d3cb2](https://github.com/facebook/react-native/commit/58d3cb2) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Add test determining if ObjC files are compiling ([d143edc](https://github.com/facebook/react-native/commit/d143edc) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add generating of objcpp headers ([69888b0](https://github.com/facebook/react-native/commit/69888b0) by [Michał Osadnik](mailto:osdnk@fb.com))
- Use HMRClient to send console logs to Metro ([81ec211](https://github.com/facebook/react-native/commit/81ec211) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Expose SetJSResponder and clearJSResponder to JS ([a4a3618](https://github.com/facebook/react-native/commit/a4a3618) by [David Vacca](mailto:dvacca@fb.com))
- Create JS ResponderHadler example ([0e78035](https://github.com/facebook/react-native/commit/0e78035) by [David Vacca](mailto:dvacca@fb.com))
- Improve error message when registering empty bundles ([691679a](https://github.com/facebook/react-native/commit/691679a) by [Will Holen](mailto:willholen@fb.com))
- Fixing error on first mount should fall back to reload ([8b5ed7a](https://github.com/facebook/react-native/commit/8b5ed7a) by [Dan Abramov](mailto:gaearon@fb.com))
- update name of generated module ([05d3e86](https://github.com/facebook/react-native/commit/05d3e86) by [Michał Osadnik](mailto:osdnk@fb.com))
- add support for stringifying error object messages to stringifySafe ([d544fa2](https://github.com/facebook/react-native/commit/d544fa2) by [Dan Reynolds](mailto:me@danreynolds.ca))
- Don't dismiss initial runtime error ([b40aa7f](https://github.com/facebook/react-native/commit/b40aa7f) by [Dan Abramov](mailto:gaearon@fb.com))
- Fix PanResponderExample ([4ab9e2d](https://github.com/facebook/react-native/commit/4ab9e2d) by [David Vacca](mailto:dvacca@fb.com))
- Add command methods to GeneratePropsJavaInterface ([c7ee381](https://github.com/facebook/react-native/commit/c7ee381) by [Eli White](mailto:eliwhite@fb.com))
- Retry add JS view config for View ([42cf8a9](https://github.com/facebook/react-native/commit/42cf8a9) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Do not load JS bundle from local cache if Metro is running ([a1273bb](https://github.com/facebook/react-native/commit/a1273bb) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- Comments & category cleanup ([97d3d59](https://github.com/facebook/react-native/commit/97d3d59) by [Peter Argany](mailto:petetheheat@fb.com))
- Deploy Flow 0.103 to xplat ([9984ac4](https://github.com/facebook/react-native/commit/9984ac4) by [George Zahariev](mailto:gkz@fb.com))
- Add PhantomRef based YogaNode subclass ([5ebc0ab](https://github.com/facebook/react-native/commit/5ebc0ab) by [David Aurelio](mailto:davidaurelio@fb.com))
- Add extra debug information in CreateMountItem class ([2b9f7ba](https://github.com/facebook/react-native/commit/2b9f7ba) by [David Vacca](mailto:dvacca@fb.com))
- update bug_report.md template ([b1bec85](https://github.com/facebook/react-native/commit/b1bec85) by [Luis Miguel Alvarado](mailto:luismiguel1730@gmail.com))
- Add NativeModule spec for ShareModule ([355bb05](https://github.com/facebook/react-native/commit/355bb05) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Add NativeModule Spec for Vibration ([452acf8](https://github.com/facebook/react-native/commit/452acf8) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Add NativeModule Spec for Clipboard ([9834d86](https://github.com/facebook/react-native/commit/9834d86) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Add NativeModule Spec for ActionSheetManager ([929a7cb](https://github.com/facebook/react-native/commit/929a7cb) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Support View Manager Commands ([6f09dc0](https://github.com/facebook/react-native/commit/6f09dc0) by [Eli White](mailto:eliwhite@fb.com))
- Implement double measure experiment ([5ca10c7](https://github.com/facebook/react-native/commit/5ca10c7) by [David Aurelio](mailto:davidaurelio@fb.com))
- Add internal experiments API ([f68c16e](https://github.com/facebook/react-native/commit/f68c16e) by [David Aurelio](mailto:davidaurelio@fb.com))
- Test more of ExceptionsManager ([c5180f4](https://github.com/facebook/react-native/commit/c5180f4) by [Moti Zilberman](mailto:moti@fb.com))
- Create binding for unmountComponentAtNode in bridgeless mode ([3050581](https://github.com/facebook/react-native/commit/3050581) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Remove remainings of experiment from ParagraphShadowNode ([18c0087](https://github.com/facebook/react-native/commit/18c0087) by [Samuel Susla](mailto:samuelsusla@fb.com))
- Remember and surface compile errors when turning on ([e9d20ea](https://github.com/facebook/react-native/commit/e9d20ea) by [Dan Abramov](mailto:gaearon@fb.com))
- Add `isInitialUpdate` to HmrServer ([d5e49bd](https://github.com/facebook/react-native/commit/d5e49bd) by [Dan Abramov](mailto:gaearon@fb.com))
- Stash updates when Fast Refresh is off ([7c7fe1c](https://github.com/facebook/react-native/commit/7c7fe1c) by [Dan Abramov](mailto:gaearon@fb.com))
- Register the bundle regardless of whether Fast Refresh is on ([e6d32d8](https://github.com/facebook/react-native/commit/e6d32d8) by [Dan Abramov](mailto:gaearon@fb.com))
- Refactor the socket client API ([295affc](https://github.com/facebook/react-native/commit/295affc) by [Dan Abramov](mailto:gaearon@fb.com))
- fix jest's test.table flow type ([c13e5d0](https://github.com/facebook/react-native/commit/c13e5d0) by [Jan Kassens](mailto:jkassens@fb.com))
- using enum struct for LayoutPassReason and LayoutType ([86b671f](https://github.com/facebook/react-native/commit/86b671f) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- yoga | Fix error about implicit conversion to bit-field ([45a4bec](https://github.com/facebook/react-native/commit/45a4bec) by [Uladzislau Paulovich](mailto:ulad@fb.com))
- Pass reason for measure pass along with measurecallbackend event ([87aca7e](https://github.com/facebook/react-native/commit/87aca7e) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Remove markerNote from JS bindings ([b07bbab](https://github.com/facebook/react-native/commit/b07bbab) by [Dominique d'Argent](mailto:nubbel@fb.com))
- Bump CLI to ^2.6.0 ([fafe5ee](https://github.com/facebook/react-native/commit/fafe5ee) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Rename HMRLoadingView to LoadingView ([ba8f88d](https://github.com/facebook/react-native/commit/ba8f88d) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Delete method MountingManager.removeRootView ([c8ec2ae](https://github.com/facebook/react-native/commit/c8ec2ae) by [David Vacca](mailto:dvacca@fb.com))
- Use UTF-8 instead of ASCII for setting object properties from folly::dynamic ([c24387e](https://github.com/facebook/react-native/commit/c24387e) by [Riley Dulin](mailto:dulinr@fb.com))
- clang-format everything ([96be82e](https://github.com/facebook/react-native/commit/96be82e) by [Riley Dulin](mailto:dulinr@fb.com))
- Use `Map`s instead of `Object`s for `MessageQueue` callbacks ([8dcee62](https://github.com/facebook/react-native/commit/8dcee62) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Remove some hacks to UIManager ([87e0270](https://github.com/facebook/react-native/commit/87e0270) by [Chris Blappert](mailto:blappert@fb.com))
- Remove unused removeRootView() method from FabricUIManager ([5f8c129](https://github.com/facebook/react-native/commit/5f8c129) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- remove YGMarker code ([a43615a](https://github.com/facebook/react-native/commit/a43615a) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- move YGMarkerMeasure and YGMarkerBaselineFn to event based system ([fb855f6](https://github.com/facebook/react-native/commit/fb855f6) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Upgrade fbjni ([e4186e9](https://github.com/facebook/react-native/commit/e4186e9) by [David Aurelio](mailto:davidaurelio@fb.com))
- Always connect the socket at start ([4037f08](https://github.com/facebook/react-native/commit/4037f08) by [Dan Abramov](mailto:gaearon@fb.com))
- Downgrade symbolication warning to a log ([e9640ae](https://github.com/facebook/react-native/commit/e9640ae) by [Dan Abramov](mailto:gaearon@fb.com))
- Accept all types for objects' and arrays' elements ([247fc67](https://github.com/facebook/react-native/commit/247fc67) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add support for stringish in codegen for modules ([a70a8d0](https://github.com/facebook/react-native/commit/a70a8d0) by [Michał Osadnik](mailto:osdnk@fb.com))
- Fix support for objects' types defined in file ([d193134](https://github.com/facebook/react-native/commit/d193134) by [Michał Osadnik](mailto:osdnk@fb.com))
- change flow union type in NativeUIManager.js to any ([6c7f3af](https://github.com/facebook/react-native/commit/6c7f3af) by [Michał Osadnik](mailto:osdnk@fb.com))
- Temporarily get rid of not nullable boolean and number checks ([ae84028](https://github.com/facebook/react-native/commit/ae84028) by [Michał Osadnik](mailto:osdnk@fb.com))
- Decouple GuardedRunnable + friends from ReactContext ([83969c2](https://github.com/facebook/react-native/commit/83969c2) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Fix parsing of textAlign props in C++ ([bcc482e](https://github.com/facebook/react-native/commit/bcc482e) by [David Vacca](mailto:dvacca@fb.com))
- Remove existing Commands export ([c38d6f2](https://github.com/facebook/react-native/commit/c38d6f2) by [Eli White](mailto:eliwhite@fb.com))
- Fix warning in FlatListExample ([7104c1f](https://github.com/facebook/react-native/commit/7104c1f) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Make VList in ScrollView warning consider horizontal prop ([7d09680](https://github.com/facebook/react-native/commit/7d09680) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Make Binding.commitMutex\_ recursive ([15f11f3](https://github.com/facebook/react-native/commit/15f11f3) by [David Vacca](mailto:dvacca@fb.com))
- Unit Test 12 - Fix Storage Mock ([2bf8c8b](https://github.com/facebook/react-native/commit/2bf8c8b) by [Florian Schoellhammer](mailto:fschoellhammer@fb.com))
- Change module parser to consider extends instead of default exports ([c20eaa5](https://github.com/facebook/react-native/commit/c20eaa5) by [Michał Osadnik](mailto:osdnk@fb.com))
- More generous access to `DestructorThread.Destructor` ([9374b23](https://github.com/facebook/react-native/commit/9374b23) by [David Aurelio](mailto:davidaurelio@fb.com))
- Enabling Sampling Profiler for all apps via Dev Menu ([6c362a7](https://github.com/facebook/react-native/commit/6c362a7) by [Ram N](mailto:axe@fb.com))
- Split component generator and module generator into separated dirs ([96318e4](https://github.com/facebook/react-native/commit/96318e4) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add generating Cpp from schema json ([2bc6e28](https://github.com/facebook/react-native/commit/2bc6e28) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add generating header from schem json ([859deb9](https://github.com/facebook/react-native/commit/859deb9) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add skeleton for cpp module generation ([58e61f4](https://github.com/facebook/react-native/commit/58e61f4) by [Michał Osadnik](mailto:osdnk@fb.com))
- Change module parser to consider extends instead of default exports ([cbd4ad4](https://github.com/facebook/react-native/commit/cbd4ad4) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add support for Float and Int32 in flow parser ([4d50f5f](https://github.com/facebook/react-native/commit/4d50f5f) by [Michał Osadnik](mailto:osdnk@fb.com))
- Deprecate method UIManagerModule.viewIsDescendantOf ([fdd8deb](https://github.com/facebook/react-native/commit/fdd8deb) by [David Vacca](mailto:dvacca@fb.com))
- Fix ScrollView context warning in Modal.js ([45b0907](https://github.com/facebook/react-native/commit/45b0907) by [Blair Vanderhoof](mailto:blairv@fb.com))
- add baseline start and baseline end events ([12ca983](https://github.com/facebook/react-native/commit/12ca983) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- move YGMarkerLayout to event based system ([fdf3873](https://github.com/facebook/react-native/commit/fdf3873) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Use babel-core 7.5+ in new RN Apps ([ba03e4e](https://github.com/facebook/react-native/commit/ba03e4e) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Minor fixes in Flow parser ([0b5aa39](https://github.com/facebook/react-native/commit/0b5aa39) by [Michał Osadnik](mailto:osdnk@fb.com))
- Change returning value of DirectEventHandler and BubblingEventHandler to void ([fb7b2d3](https://github.com/facebook/react-native/commit/fb7b2d3) by [Michał Osadnik](mailto:osdnk@fb.com))
- Use try-with-resource to prevent output stream to be leaked in BlobProvider ([8e4b2e7](https://github.com/facebook/react-native/commit/8e4b2e7) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- Force property to be optional if value has WithDefault ([dc52f8c](https://github.com/facebook/react-native/commit/dc52f8c) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add `registerEntryPoint` to HmrServer ([a622421](https://github.com/facebook/react-native/commit/a622421) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Use iosfwd instead of iostream ([424f930](https://github.com/facebook/react-native/commit/424f930) by [Ashok Menon](mailto:ashokmenon@fb.com))
- Make writable arrays and maps only shallowly writable ([1a29371](https://github.com/facebook/react-native/commit/1a29371) by [Moti Zilberman](mailto:moti@fb.com))
- Add support for nullable params ([a7664db](https://github.com/facebook/react-native/commit/a7664db) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add support for complex objects ([233c64c](https://github.com/facebook/react-native/commit/233c64c) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add support for basic objects ([702489c](https://github.com/facebook/react-native/commit/702489c) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add support for promises ([929c5d7](https://github.com/facebook/react-native/commit/929c5d7) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add suport for array as a param and returning value ([690bcdf](https://github.com/facebook/react-native/commit/690bcdf) by [Michał Osadnik](mailto:osdnk@fb.com))
- codegen: fix array of enums generation ([db17e96](https://github.com/facebook/react-native/commit/db17e96) by [Samuel Susla](mailto:samuelsusla@fb.com))
- Prepare generic mechanism for extracting types from external type definitions ([59b8ee8](https://github.com/facebook/react-native/commit/59b8ee8) by [Michał Osadnik](mailto:osdnk@fb.com))
- Add a shim for HMRClient in prod bundles ([abc663d](https://github.com/facebook/react-native/commit/abc663d) by [Dan Abramov](mailto:gaearon@fb.com))
- Add support for primitive returning type ([e8c5495](https://github.com/facebook/react-native/commit/e8c5495) by [Michał Osadnik](mailto:osdnk@fb.com))
- Move inline static styles at VirtualizedList to StyleSheet.create ([10d80b8](https://github.com/facebook/react-native/commit/10d80b8) by [Bruno Lemos](mailto:brunohplemos@gmail.com))
- remove duplicate lines in xplat/js/react-native-github/React/React.xcodeproj/project.pbxproj ([169beaa](https://github.com/facebook/react-native/commit/169beaa) by [Yike Xue](mailto:xueyike@fb.com))
- Use @generated in header comment so IDE can notify developers ([5275f15](https://github.com/facebook/react-native/commit/5275f15) by [Kevin Gozali](mailto:fkg@fb.com))
- Remove `_` from module local variables in HMRClient ([c92cc11](https://github.com/facebook/react-native/commit/c92cc11) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Remove setupDevtools file ([5dade01](https://github.com/facebook/react-native/commit/5dade01) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Improve console logging to Metro ([76e10c4](https://github.com/facebook/react-native/commit/76e10c4) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Prepare a skeleton for native modules schema json generating ([11ff567](https://github.com/facebook/react-native/commit/11ff567) by [Michał Osadnik](mailto:osdnk@fb.com))
- – Bump CLI to ^2.0.1 ([7a6bb38](https://github.com/facebook/react-native/commit/7a6bb38) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Disable logging from performance logger unless it is enabled ([1c5944b](https://github.com/facebook/react-native/commit/1c5944b) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Do not show setup logs from `createPerformanceLogger` unless logs are enabled for it ([c31fa2a](https://github.com/facebook/react-native/commit/c31fa2a) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Update react-refresh to 0.2.0 ([aa860fb](https://github.com/facebook/react-native/commit/aa860fb) by [Dan Abramov](mailto:gaearon@fb.com))
- Protect getLegacyCxxModule from being stripped ([d4e0f98](https://github.com/facebook/react-native/commit/d4e0f98) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Prevent execution of MountItems without mounting instructions ([7c3f3e3](https://github.com/facebook/react-native/commit/7c3f3e3) by [David Vacca](mailto:dvacca@fb.com))
- NIT: rename FabricUIManager.scheduleMountItems -> FabricUIManager.scheduleMountItem ([b1b6501](https://github.com/facebook/react-native/commit/b1b6501) by [David Vacca](mailto:dvacca@fb.com))
- Update parsing of textAlign prop for Text ([3c23952](https://github.com/facebook/react-native/commit/3c23952) by [David Vacca](mailto:dvacca@fb.com))
- Deprecate receiveCommand method for INT commands ([6eec393](https://github.com/facebook/react-native/commit/6eec393) by [David Vacca](mailto:dvacca@fb.com))
- Update Modal State when there is a change on the size of the screen ([57d1f8a](https://github.com/facebook/react-native/commit/57d1f8a) by [David Vacca](mailto:dvacca@fb.com))
- Add synchronization on Binding.schedulerDidFinishTransaction ([0e52ab4](https://github.com/facebook/react-native/commit/0e52ab4) by [David Vacca](mailto:dvacca@fb.com))
- Remove TurboModuleManager dependency on ReactApplicationContext ([8cfb086](https://github.com/facebook/react-native/commit/8cfb086) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Initialize TurboModuleManager before we run JS ([516b058](https://github.com/facebook/react-native/commit/516b058) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Silence all Lean Core warnings in Prelude.js ([e7371b2](https://github.com/facebook/react-native/commit/e7371b2) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Show correct error message on initial load ([d3f9f88](https://github.com/facebook/react-native/commit/d3f9f88) by [Dan Abramov](mailto:gaearon@fb.com))
- Remove incorrect constexpr specifier in YGLayout ([ce9c47f](https://github.com/facebook/react-native/commit/ce9c47f) by [Uladzislau Paulovich](mailto:ulad@fb.com))
- Allow primitivies without default values ([75d0107](https://github.com/facebook/react-native/commit/75d0107) by [Michał Osadnik](mailto:osdnk@fb.com))
- Transform BubbleEvent and DirectEvent into DirectEventHandler and BubblingEventHandler ([0f83dfa](https://github.com/facebook/react-native/commit/0f83dfa) by [Michał Osadnik](mailto:osdnk@fb.com))
- warn if VirtualizedList is embedded in a plain ScrollView ([e7a0979](https://github.com/facebook/react-native/commit/e7a0979) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Fix incorrect case in build file ([bbf7057](https://github.com/facebook/react-native/commit/bbf7057) by [Jacob Bower](mailto:jbower@fb.com))
- Move `YG_ENABLE_EVENTS` checks to `event.h` ([0d89653](https://github.com/facebook/react-native/commit/0d89653) by [David Aurelio](mailto:davidaurelio@fb.com))
- Stop recording measure callback duration ([792f715](https://github.com/facebook/react-native/commit/792f715) by [David Aurelio](mailto:davidaurelio@fb.com))
- Publish two events for measure callbacks ([2985ddb](https://github.com/facebook/react-native/commit/2985ddb) by [David Aurelio](mailto:davidaurelio@fb.com))
- Create Snapshot From Stream ([1468625](https://github.com/facebook/react-native/commit/1468625) by [Ashok Menon](mailto:ashokmenon@fb.com))
- Remove duplicate declaration of `YGRoundValueToPixelGrid` from `Yoga-internal.h` ([18eba79](https://github.com/facebook/react-native/commit/18eba79) by [David Aurelio](mailto:davidaurelio@fb.com))
- Re-evaluate parent modules when refresh boundary updates are incompatible ([08baec6](https://github.com/facebook/react-native/commit/08baec6) by [Dan Abramov](mailto:gaearon@fb.com))
- Remove commented out code ([365cf96](https://github.com/facebook/react-native/commit/365cf96) by [Eli White](mailto:eliwhite@fb.com))
- Remove const_cast in createSnapshotFromFile wrapper ([bbf093a](https://github.com/facebook/react-native/commit/bbf093a) by [Ashok Menon](mailto:ashokmenon@fb.com))
- Partial React sync ([615902e](https://github.com/facebook/react-native/commit/615902e) by [Dan Abramov](mailto:gaearon@fb.com))
- Remove Schema.js files replaced with flow types ([3ca19c0](https://github.com/facebook/react-native/commit/3ca19c0) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Switch native codegen over to flow parser ([98b03fa](https://github.com/facebook/react-native/commit/98b03fa) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Don't symbolicate transform errors ([ea817fd](https://github.com/facebook/react-native/commit/ea817fd) by [Dan Abramov](mailto:gaearon@fb.com))
- Warning for `TimePickerAndroid` ([f71cfef](https://github.com/facebook/react-native/commit/f71cfef) by [Luis Miguel Alvarado](mailto:luismiguel1730@gmail.com))
- Flow v0.102 in xplat/js ([454bbff](https://github.com/facebook/react-native/commit/454bbff) by [Panagiotis Vekris](mailto:pvekris@fb.com))
- Remove definition of viewIsDescendantOf method in JS ([d75e0ef](https://github.com/facebook/react-native/commit/d75e0ef) by [David Vacca](mailto:dvacca@fb.com))
- Support commands as strings in ScrollView ([ac87b0f](https://github.com/facebook/react-native/commit/ac87b0f) by [Eli White](mailto:eliwhite@fb.com))
- Support commands as strings in TextInput ([faf5c0b](https://github.com/facebook/react-native/commit/faf5c0b) by [Eli White](mailto:eliwhite@fb.com))
- Use YOGA_CXX_TARGET alias for Buck deps ([b25d22a](https://github.com/facebook/react-native/commit/b25d22a) by [Kevin Gozali](mailto:fkg@fb.com))
- use the github checked-in version of the Spec codegen output ([a2b4b36](https://github.com/facebook/react-native/commit/a2b4b36) by [Kevin Gozali](mailto:fkg@fb.com))
- Move Pods to react-native-github ([cf5addc](https://github.com/facebook/react-native/commit/cf5addc) by [Héctor Ramos](mailto:hramos@fb.com))
- make yoga threadsafe ([1dbc38a](https://github.com/facebook/react-native/commit/1dbc38a) by [dattc2](mailto:dattc2@vng.com.vn))
- Move TurboModuleManager initialization into createReactContext ([bbc6695](https://github.com/facebook/react-native/commit/bbc6695) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Warning for `DatePickerIOS` and `DatePickerAndroid` ([c749eaf](https://github.com/facebook/react-native/commit/c749eaf) by [Luis Miguel Alvarado](mailto:luismiguel1730@gmail.com))
- Reduce visibility of ReactChoreographer.postFrameCallbackOnChoreographer method ([beee546](https://github.com/facebook/react-native/commit/beee546) by [David Vacca](mailto:dvacca@fb.com))
- Allow ReactChoreographer to execute a FrameCallback that removes another FrameCallback from the mCallbackQueues ([89bf3d8](https://github.com/facebook/react-native/commit/89bf3d8) by [David Vacca](mailto:dvacca@fb.com))
- Support parsing View Commands into the schema ([9ad6013](https://github.com/facebook/react-native/commit/9ad6013) by [Eli White](mailto:eliwhite@fb.com))
- Syntax errors should dismiss redboxes ([7d2a95d](https://github.com/facebook/react-native/commit/7d2a95d) by [Dan Abramov](mailto:gaearon@fb.com))
- Recover from render errors by remounting root ([0a17699](https://github.com/facebook/react-native/commit/0a17699) by [Dan Abramov](mailto:gaearon@fb.com))
- Downgrade "packager disconnected" to a warning ([cf7813a](https://github.com/facebook/react-native/commit/cf7813a) by [Dan Abramov](mailto:gaearon@fb.com))
- Fix PullToRefresh onRefresh event ([0cb512f](https://github.com/facebook/react-native/commit/0cb512f) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Make "Enable Hot Reloading" Instant ([1f04ff5](https://github.com/facebook/react-native/commit/1f04ff5) by [Dan Abramov](mailto:gaearon@fb.com))
- pass cachedLayout and cachedMeasure measures to plugin ([055b28b](https://github.com/facebook/react-native/commit/055b28b) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Fix typo in JavaDoc for ReactScrollViewManager ([79e506d](https://github.com/facebook/react-native/commit/79e506d) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- Slider fromUser is required ([3bdba0e](https://github.com/facebook/react-native/commit/3bdba0e) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- s/PullToRefresh/PullToRefreshView ([940a7d5](https://github.com/facebook/react-native/commit/940a7d5) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Fix native output without props ([468c9f5](https://github.com/facebook/react-native/commit/468c9f5) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Warning for `StatusBarIOS` ([a833778](https://github.com/facebook/react-native/commit/a833778) by [Luis Miguel Alvarado](mailto:luismiguel1730@gmail.com))
- Add types for modal ([58cd046](https://github.com/facebook/react-native/commit/58cd046) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Remove @UiThread annotation from MountingManager.addRootView() ([8af7e92](https://github.com/facebook/react-native/commit/8af7e92) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Add extra logs in FabricUIManager ([42e35b3](https://github.com/facebook/react-native/commit/42e35b3) by [David Vacca](mailto:dvacca@fb.com))
- Move TypeSafety conversion utils to github ([7143d89](https://github.com/facebook/react-native/commit/7143d89) by [Kevin Gozali](mailto:fkg@fb.com))
- Move FBLazyVector to github ([04180bf](https://github.com/facebook/react-native/commit/04180bf) by [Kevin Gozali](mailto:fkg@fb.com))
- Remove old comments ([6f310b5](https://github.com/facebook/react-native/commit/6f310b5) by [Chris Blappert](mailto:blappert@fb.com))
- protect against hanging when logging nasty objects ([d7cbe33](https://github.com/facebook/react-native/commit/d7cbe33) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Don't show "Hot Reloading" banner on first load ([acd349e](https://github.com/facebook/react-native/commit/acd349e) by [Dan Abramov](mailto:gaearon@fb.com))
- Replace React Transform HMR with React Refresh ([d7c8ace](https://github.com/facebook/react-native/commit/d7c8ace) by [Dan Abramov](mailto:gaearon@fb.com))
- Downgrade TextInput warning ([17edd13](https://github.com/facebook/react-native/commit/17edd13) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Replace relative include ([52e4c8d](https://github.com/facebook/react-native/commit/52e4c8d) by [David Aurelio](mailto:davidaurelio@fb.com))
- Generate PullToRefreshView ([b063c41](https://github.com/facebook/react-native/commit/b063c41) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Deprecate React Native ART ([c52027b](https://github.com/facebook/react-native/commit/c52027b) by [Kacper Wiszczuk](mailto:kacperwiszczuk@gmail.com))
- Keyboard accessibility follow up ([73c5a8e](https://github.com/facebook/react-native/commit/73c5a8e) by [Sam Mathias Weggersen](mailto:sawegger@microsoft.com))
- Send measure pass duration ([fc82c59](https://github.com/facebook/react-native/commit/fc82c59) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Update renderer and packages ([5d29590](https://github.com/facebook/react-native/commit/5d29590) by [Dan Abramov](mailto:gaearon@fb.com))
- Make ViewNativeComponent use ES6 exports ([a624908](https://github.com/facebook/react-native/commit/a624908) by [Eli White](mailto:eliwhite@fb.com))
- Animations: attempt to mitigate crashes in T43628589 ([40043a1](https://github.com/facebook/react-native/commit/40043a1) by [Joshua Gross](mailto:joshuagross@fb.com))
- Bump babel plugin version to break metro cache ([8253f90](https://github.com/facebook/react-native/commit/8253f90) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Move scheduler to dependencies ([503df2c](https://github.com/facebook/react-native/commit/503df2c) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Pop bridge frames from errors thrown by sync host function calls ([56f08fc](https://github.com/facebook/react-native/commit/56f08fc) by [Moti Zilberman](mailto:moti@fb.com))
- Add test for sync methods (type=sync) ([37bbfa6](https://github.com/facebook/react-native/commit/37bbfa6) by [Moti Zilberman](mailto:moti@fb.com))
- Preserve the caller's JS stack trace when a type=promise method rejects ([88e9098](https://github.com/facebook/react-native/commit/88e9098) by [Moti Zilberman](mailto:moti@fb.com))
- Add test for promise-returning methods (type=promise) ([d216b55](https://github.com/facebook/react-native/commit/d216b55) by [Moti Zilberman](mailto:moti@fb.com))
- React sync (partial) ([7f1a38a](https://github.com/facebook/react-native/commit/7f1a38a) by [Dan Abramov](mailto:gaearon@fb.com))
- Cache Platform constants in JS ([a89e932](https://github.com/facebook/react-native/commit/a89e932) by [Kevin Gozali](mailto:fkg@fb.com))
- Binding.cpp will use locks to guard access to scheduler and UIManager ([4a5060f](https://github.com/facebook/react-native/commit/4a5060f) by [Joshua Gross](mailto:joshuagross@fb.com))
- Add support for enum event arguments ([2deb39b](https://github.com/facebook/react-native/commit/2deb39b) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Force setConstraints to run in the JS Thread ([f43039d](https://github.com/facebook/react-native/commit/f43039d) by [David Vacca](mailto:dvacca@fb.com))
- Disable legacy native modules in bridgeless mode ([c19c6ce](https://github.com/facebook/react-native/commit/c19c6ce) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Add react-refresh as a dependency ([1284c5d](https://github.com/facebook/react-native/commit/1284c5d) by [Dan Abramov](mailto:gaearon@fb.com))
- Add JS view config for View ([6fef480](https://github.com/facebook/react-native/commit/6fef480) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Count the number measure callback invocations ([3ce9ac6](https://github.com/facebook/react-native/commit/3ce9ac6) by [David Aurelio](mailto:davidaurelio@fb.com))
- Add support for the Stringish type ([e371978](https://github.com/facebook/react-native/commit/e371978) by [Rubén Norte](mailto:rubennorte@fb.com))
- Remove error for components not defining props ([5b4a488](https://github.com/facebook/react-native/commit/5b4a488) by [Eli White](mailto:eliwhite@fb.com))
- Add RTCSafeAreaView ([5689302](https://github.com/facebook/react-native/commit/5689302) by [Rubén Norte](mailto:rubennorte@fb.com))
- Fix TurboCxxModules::get ([e908f7a](https://github.com/facebook/react-native/commit/e908f7a) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Bump CLI to 2.0.0-rc.2 ([6c0eccd](https://github.com/facebook/react-native/commit/6c0eccd) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Optimize native animated connection queue handling ([206abb0](https://github.com/facebook/react-native/commit/206abb0) by [Mikael Sand](mailto:msand@abo.fi))
- Fix a typo in BaseJavaModule ([3bf068a](https://github.com/facebook/react-native/commit/3bf068a) by [Luis Miguel Alvarado](mailto:luismiguel1730@gmail.com))
- Don't throw when accessing view config ([3f95137](https://github.com/facebook/react-native/commit/3f95137) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Don't set up JS timers in bridgeless RN ([533932a](https://github.com/facebook/react-native/commit/533932a) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Use require for NativeModules ([bd2c575](https://github.com/facebook/react-native/commit/bd2c575) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Update oncalls ([43df288](https://github.com/facebook/react-native/commit/43df288) by [Aditya Kumar](mailto:aditya7@fb.com))
- Replace UIManager with stub for bridgeless RN ([2ae43e5](https://github.com/facebook/react-native/commit/2ae43e5) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Add schema support for prop array enums ([c2824dd](https://github.com/facebook/react-native/commit/c2824dd) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Enable debug FabricUIManager logging for everyone ([b9d26bb](https://github.com/facebook/react-native/commit/b9d26bb) by [Joshua Gross](mailto:joshuagross@fb.com))
- Backout Force Diffing algorithm to insert views Bottom Up ([c603e55](https://github.com/facebook/react-native/commit/c603e55) by [David Vacca](mailto:dvacca@fb.com))
- @allow-large-files Deploy v0.101.0 to xplat ([dec9698](https://github.com/facebook/react-native/commit/dec9698) by [Jordan Brown](mailto:jmbrown@fb.com))
- Improve changing bundler support ([6042de4](https://github.com/facebook/react-native/commit/6042de4) by [Mehdi Mulani](mailto:mehdi@fb.com))
- Add support for WithDefault<string, null> ([0f7bf51](https://github.com/facebook/react-native/commit/0f7bf51) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Add Slider and Switch ([a3b9840](https://github.com/facebook/react-native/commit/a3b9840) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Add test screen for generating view configs ([d8bacc2](https://github.com/facebook/react-native/commit/d8bacc2) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Pass layout context for `Event::LayoutPassStart` ([9d13af5](https://github.com/facebook/react-native/commit/9d13af5) by [David Aurelio](mailto:davidaurelio@fb.com))
- rm `YogaEventListener` ([0276793](https://github.com/facebook/react-native/commit/0276793) by [David Aurelio](mailto:davidaurelio@fb.com))
- Don't check native view configs in bridgeless mode ([422472e](https://github.com/facebook/react-native/commit/422472e) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Add RN\$Bridgeless flag, use it to conditionally skip bridge setup ([4e7155e](https://github.com/facebook/react-native/commit/4e7155e) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Remove `React.js` from RN open source ([bbeace1](https://github.com/facebook/react-native/commit/bbeace1) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Check TurboModules first in TurboModuleRegistry ([20102ef](https://github.com/facebook/react-native/commit/20102ef) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Bump CLI to 2.0.0-rc.1 ([782e848](https://github.com/facebook/react-native/commit/782e848) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Add codegen flowtypes to UnimplementedNativeView ([2c1fd6f](https://github.com/facebook/react-native/commit/2c1fd6f) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Create feature flag to log extra data in ReactWebView ([6236798](https://github.com/facebook/react-native/commit/6236798) by [David Vacca](mailto:dvacca@fb.com))
- Turn FBMainReactPackage into a TurboReactPackage ([9c76e14](https://github.com/facebook/react-native/commit/9c76e14) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Fix layoutTime calculation ([e5c96a8](https://github.com/facebook/react-native/commit/e5c96a8) by [Joshua Gross](mailto:joshuagross@fb.com))
- Make NativeModule names public ([3312146](https://github.com/facebook/react-native/commit/3312146) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Initialize TurboModules after creation ([e5a8e3a](https://github.com/facebook/react-native/commit/e5a8e3a) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Remove checked-in view configs and js1 build viewconfigs ([97d439e](https://github.com/facebook/react-native/commit/97d439e) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Add view config babel plugin ([efec97f](https://github.com/facebook/react-native/commit/efec97f) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- RN Codegen] Add registerGeneratedViewConfig ([886fb50](https://github.com/facebook/react-native/commit/886fb50) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Fix comment ([63ed75f](https://github.com/facebook/react-native/commit/63ed75f) by [Chris Blappert](mailto:blappert@fb.com))
- Adds check to unset a YogaNode's parent during reconciliation ([5751035](https://github.com/facebook/react-native/commit/5751035) by [Aditya Sharat](mailto:adityasharat@fb.com))
- Bump CLI to 2.0.0-rc.0 ([ea090a1](https://github.com/facebook/react-native/commit/ea090a1) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Do a hard reload if hot update can't be applied ([3b1dbcc](https://github.com/facebook/react-native/commit/3b1dbcc) by [Dan Abramov](mailto:gaearon@fb.com))
- moved PtrJNode map to YGJtypes.h and passing layout context as data in LayoutPassEnd Event ([c44b221](https://github.com/facebook/react-native/commit/c44b221) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Use fetch as a polyfill ([2fe3dd2](https://github.com/facebook/react-native/commit/2fe3dd2) by [Arthur Lee](mailto:arthurlee@instagram.com))
- Remove Map/Set from RN Open Source ([022470c](https://github.com/facebook/react-native/commit/022470c) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Setup TurboModuleManager inside Fb4a ([764fd95](https://github.com/facebook/react-native/commit/764fd95) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- TurboModules: Improve Error Message ([8a014cd](https://github.com/facebook/react-native/commit/8a014cd) by [Tim Yung](mailto:yungsters@fb.com))
- Make Flow configs use path-based imports instead of Haste ([bf8d918](https://github.com/facebook/react-native/commit/bf8d918) by [James Ide](mailto:ide@expo.io))
- Sync commit from React ([c1e03b3](https://github.com/facebook/react-native/commit/c1e03b3) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Delete hasteImpl, providesModuleNodeModules, and modulePathNameMapper from Jest config ([7a2463e](https://github.com/facebook/react-native/commit/7a2463e) by [James Ide](mailto:ide@expo.io))
- Fix typo in layout time ([920d9de](https://github.com/facebook/react-native/commit/920d9de) by [Joshua Gross](mailto:joshuagross@fb.com))
- Include testlib files in JSI ([608b1b5](https://github.com/facebook/react-native/commit/608b1b5) by [Will Holen](mailto:willholen@fb.com))
- Remove TMMDelegate's dependency on ReactApplicationContext ([dbad0fd](https://github.com/facebook/react-native/commit/dbad0fd) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- TurboModules: ES Module Cleanup ([fc6bbe6](https://github.com/facebook/react-native/commit/fc6bbe6) by [Tim Yung](mailto:yungsters@fb.com))
- Deploy Flow v0.100 to xplat/js ([b3a50ec](https://github.com/facebook/react-native/commit/b3a50ec) by [Sam Goldman](mailto:samgoldman@fb.com))
- Ensure app doesn't crash when module is absent ([22475ed](https://github.com/facebook/react-native/commit/22475ed) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Use SurfaceRegistry instead of AppRegistry ([738dd65](https://github.com/facebook/react-native/commit/738dd65) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- moved PtrJNode map to YGJtypes.h and passing layout context as data in LayoutPassEnd Event ([d3cf756](https://github.com/facebook/react-native/commit/d3cf756) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- more code review ([a98772e](https://github.com/facebook/react-native/commit/a98772e) by [Hermanyo](mailto:hermanyo.souza@dcomp.ufs.br))
- Add handling for ColorArray ([ebb8caa](https://github.com/facebook/react-native/commit/ebb8caa) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Create base MapBuffer class and tests ([9a053fc](https://github.com/facebook/react-native/commit/9a053fc) by [David Vacca](mailto:dvacca@fb.com))
- fix import path to not use haste (UnimplementedView) ([489e83d](https://github.com/facebook/react-native/commit/489e83d) by [Kevin Gozali](mailto:fkg@fb.com))
- console.log shouldn't throw warning if metro isn't running ([308d63f](https://github.com/facebook/react-native/commit/308d63f) by [Joshua Gross](mailto:joshuagross@fb.com))
- UIManager: fill in getViewManagerConfig() on the NativeUIManager object ([1dfe82d](https://github.com/facebook/react-native/commit/1dfe82d) by [Kevin Gozali](mailto:fkg@fb.com))
- Backout D15554658 ([83a37b4](https://github.com/facebook/react-native/commit/83a37b4) by [Oleg Lokhvitsky](mailto:olegbl@fb.com))
- Use relative requires for most modules in react-native-implementation ([62c605e](https://github.com/facebook/react-native/commit/62c605e) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Do not send log messages to Metro when `Platform.isTesting` is set ([dc0106e](https://github.com/facebook/react-native/commit/dc0106e) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Explicitly separate mocked native modules from mocked JS modules ([1ed3525](https://github.com/facebook/react-native/commit/1ed3525) by [James Ide](mailto:ide@expo.io))
- Add method to get a segment path without injecting it in the VM ([74f56bd](https://github.com/facebook/react-native/commit/74f56bd) by [Rubén Norte](mailto:rubennorte@fb.com))
- Use atomic list for event subscribers ([a1bfb28](https://github.com/facebook/react-native/commit/a1bfb28) by [David Aurelio](mailto:davidaurelio@fb.com))
- fix shouldComponentUpdate in YellowBox ([5b7edb5](https://github.com/facebook/react-native/commit/5b7edb5) by [Vojtech Novak](mailto:vonovak@gmail.com))
- Log `console.log` invocations to the Metro terminal ([db9fc38](https://github.com/facebook/react-native/commit/db9fc38) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Add method to get a segment path without injecting it in the VM ([00c0fe7](https://github.com/facebook/react-native/commit/00c0fe7) by [Rubén Norte](mailto:rubennorte@fb.com))
- Upgrade CLI to latest alpha ([49f7e31](https://github.com/facebook/react-native/commit/49f7e31) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Upgrade RN gesture handler to 1.1.1 ([c83a89d](https://github.com/facebook/react-native/commit/c83a89d) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- @allow-large-files Deploy Flow v0.99.0 to xplat/js ([87b31bc](https://github.com/facebook/react-native/commit/87b31bc) by [Sam Goldman](mailto:samgoldman@fb.com))
- Use libdefs for fbjs instead of types from node_modules ([e923a2f](https://github.com/facebook/react-native/commit/e923a2f) by [Sam Goldman](mailto:samgoldman@fb.com))
- Add spec for DeviceInfo module ([96a5001](https://github.com/facebook/react-native/commit/96a5001) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Deprecate `YGNode::setConfig` ([6677f40](https://github.com/facebook/react-native/commit/6677f40) by [David Aurelio](mailto:davidaurelio@fb.com))
- Create structure of mapbuffer project ([12b735a](https://github.com/facebook/react-native/commit/12b735a) by [David Vacca](mailto:dvacca@fb.com))
- Make RelayObservable Source return type disjoint ([ab1a427](https://github.com/facebook/react-native/commit/ab1a427) by [Sam Goldman](mailto:samgoldman@fb.com))
- Use JS ViewConfig for View ([77a6617](https://github.com/facebook/react-native/commit/77a6617) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Update folder structure of RNTester's JS directory ([3945f10](https://github.com/facebook/react-native/commit/3945f10) by [AndreiCalazans](mailto:andreixoc@hotmail.com))
- (CONTRIBUTING.md) Link to Issues wiki ([0b14b60](https://github.com/facebook/react-native/commit/0b14b60) by [Héctor Ramos](mailto:hector@hectorramos.com))
- Sync worker requirement mismatches ([a0f2bfa](https://github.com/facebook/react-native/commit/a0f2bfa) by [Michal Sienkiewicz](mailto:msienkiewicz@fb.com))
- if-else refactoring ([b9b9137](https://github.com/facebook/react-native/commit/b9b9137) by [Hermanyo](mailto:hermanyo.souza@dcomp.ufs.br))
- Add Nullable annotation into Mounting Manager ([6f63b05](https://github.com/facebook/react-native/commit/6f63b05) by [David Vacca](mailto:dvacca@fb.com))
- Optimize the update of state during first render of a View ([92f8fd2](https://github.com/facebook/react-native/commit/92f8fd2) by [David Vacca](mailto:dvacca@fb.com))
- Remove ComponentRegistry class ([c629cdc](https://github.com/facebook/react-native/commit/c629cdc) by [David Vacca](mailto:dvacca@fb.com))
- Add view config for PullToRefresh ([9f8305a](https://github.com/facebook/react-native/commit/9f8305a) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Use generated view config for ActivityIndicatorView ([ac62274](https://github.com/facebook/react-native/commit/ac62274) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Use generated view config for Slider ([e52bc2a](https://github.com/facebook/react-native/commit/e52bc2a) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Integrate flow parser into view config generation ([ca78341](https://github.com/facebook/react-native/commit/ca78341) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Auto-formatting for Binding ([d742c7b](https://github.com/facebook/react-native/commit/d742c7b) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- Convert accessibilityStates to an object instead of an array of strings ([099be9b](https://github.com/facebook/react-native/commit/099be9b) by [Marc Mulcahy](mailto:mmulcahy@amazon.com))
- Replace more Haste imports with path-based imports ([a7a7970](https://github.com/facebook/react-native/commit/a7a7970) by [James Ide](mailto:ide@expo.io))
- Turn off no-inline-styles lint internally ([f80a1c2](https://github.com/facebook/react-native/commit/f80a1c2) by [Spencer Ahrens](mailto:sahrens@fb.com))
- Implement ReactContext.getNativeModule support ([12c0ec8](https://github.com/facebook/react-native/commit/12c0ec8) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Remove comparison to `YGUndefined` _and_ `0.0f` ([0739859](https://github.com/facebook/react-native/commit/0739859) by [David Aurelio](mailto:davidaurelio@fb.com))
- Organize files ([9e97f71](https://github.com/facebook/react-native/commit/9e97f71) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Generate events with no arguments ([de33b8a](https://github.com/facebook/react-native/commit/de33b8a) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Pass State to `preallocateView` and `createView` methods whenever possible ([b05761f](https://github.com/facebook/react-native/commit/b05761f) by [Joshua Gross](mailto:joshuagross@fb.com))
- Remove `YGNode::setAndPropogateUseLegacyFlag` ([80258b5](https://github.com/facebook/react-native/commit/80258b5) by [David Aurelio](mailto:davidaurelio@fb.com))
- Refactor sComponentNames Map out of FabricUIManager ([563e0bc](https://github.com/facebook/react-native/commit/563e0bc) by [David Vacca](mailto:dvacca@fb.com))
- Remove warnings ([3b8fc8b](https://github.com/facebook/react-native/commit/3b8fc8b) by [David Vacca](mailto:dvacca@fb.com))
- Refactor RootTag -> surfaceId ([651ca3b](https://github.com/facebook/react-native/commit/651ca3b) by [David Vacca](mailto:dvacca@fb.com))
- Fabric: Use State instead of Local Data for Paragraph ([6ec19ab](https://github.com/facebook/react-native/commit/6ec19ab) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- Add a private interface (do not use) between the renderer and RN ([9cd8825](https://github.com/facebook/react-native/commit/9cd8825) by [James Ide](mailto:ide@expo.io))
- [Android] Add e2e test for object props ([70fc54a](https://github.com/facebook/react-native/commit/70fc54a) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Use centralized package for DoNotStrip annotation ([35fc0ad](https://github.com/facebook/react-native/commit/35fc0ad) by [Pascal Hartig](mailto:phartig@rdrei.net))
- [Android] Add Object props support for Java ([ebb412a](https://github.com/facebook/react-native/commit/ebb412a) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Use ViewManagerDelegate if provided instead of \$\$PropsSetter to update view props ([50fe811](https://github.com/facebook/react-native/commit/50fe811) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [Android] Codemod fbandroid// => //fbandroid/ in xplat/js/ ([99487d6](https://github.com/facebook/react-native/commit/99487d6) by [Scott Rice](mailto:srice@fb.com))
- [Android] Refactor TextInput.js passes strings to Java for autoCapitalize ([87d2f4e](https://github.com/facebook/react-native/commit/87d2f4e) by [Eli White](mailto:eliwhite@fb.com))
- [Android] part of our react native platform, we have a control that extends ReactEditText and we need to be able to override these 2 methods ([c0c5e22](https://github.com/facebook/react-native/commit/c0c5e22) by [Onti Vals](mailto:ontiv@microsoft.com))
- [Android] Bump hermes to v0.1.1 ([c21e36d](https://github.com/facebook/react-native/commit/c21e36d) by [sunnylqm](mailto:sunnylqm@qq.com))
- [Android] Delete jsi::Functions before jsi::Runtime gets deleted ([bc7c85f](https://github.com/facebook/react-native/commit/bc7c85f) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Change AndroidDrawerLayoutNativeComponent to use JS codegen for commands ([e906af1](https://github.com/facebook/react-native/commit/e906af1) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Implement JNI code to invoke Android JSResponder methods from C++ ([e2f82b1](https://github.com/facebook/react-native/commit/e2f82b1) by [David Vacca](mailto:dvacca@fb.com))
- [Android] Move ownership of TurboModule jni ref to JavaTurboModule ([82e4d28](https://github.com/facebook/react-native/commit/82e4d28) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Make TurboModules long-lived on Android ([7ab517b](https://github.com/facebook/react-native/commit/7ab517b) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Implement SoundManager TurboModule in JS and Android ([a55ae3a](https://github.com/facebook/react-native/commit/a55ae3a) by [David Vacca](mailto:dvacca@fb.com))
- [Android] Delete jsi::Functions before jsi::Runtime gets deleted ([2a8c188](https://github.com/facebook/react-native/commit/2a8c188) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Move ownership of TurboModule jni ref to JavaTurboModule ([88e03fa](https://github.com/facebook/react-native/commit/88e03fa) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Make TurboModules long-lived on Android ([e876cc6](https://github.com/facebook/react-native/commit/e876cc6) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Only use IntentAndroid on android ([e85cd6c](https://github.com/facebook/react-native/commit/e85cd6c) by [Martin Sherburn](mailto:mns@oculus.com))
- [Android] Fix onDismiss in Modal ([bd2b7d6](https://github.com/facebook/react-native/commit/bd2b7d6) by [Samuel Susla](mailto:samuelsusla@fb.com))
- [Android] Add NativeModule Spec for PushNotificationManager ([76ff316](https://github.com/facebook/react-native/commit/76ff316) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Add receiveCommand to the Java Delegate ([4eca2e2](https://github.com/facebook/react-native/commit/4eca2e2) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Don't show warnings unless we managed to connect ([5e960e3](https://github.com/facebook/react-native/commit/5e960e3) by [Dan Abramov](mailto:gaearon@fb.com))
- [Android] Update java prop file names to include ViewManager ([e9af572](https://github.com/facebook/react-native/commit/e9af572) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Add @Nullable for Java props ([ac21f04](https://github.com/facebook/react-native/commit/ac21f04) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Add default prop handling ([df0d6e2](https://github.com/facebook/react-native/commit/df0d6e2) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Update Java prop casting ([34505db](https://github.com/facebook/react-native/commit/34505db) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Add Java buck tests ([32b812c](https://github.com/facebook/react-native/commit/32b812c) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Add buck rule to generate Java library ([1783780](https://github.com/facebook/react-native/commit/1783780) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Add GeneratePropsJavaDelegate ([9a546f5](https://github.com/facebook/react-native/commit/9a546f5) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Add GeneratePropsJavaInterface ([9830d0d](https://github.com/facebook/react-native/commit/9830d0d) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Add NativeModule Spec for AsyncStorage ([3e989b6](https://github.com/facebook/react-native/commit/3e989b6) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Don't redbox on startup if Metro is not running ([8e6f2f2](https://github.com/facebook/react-native/commit/8e6f2f2) by [Dan Abramov](mailto:gaearon@fb.com))
- [Android] Fix types for DialogManagerAndroid ([7a62e7e](https://github.com/facebook/react-native/commit/7a62e7e) by [Michał Osadnik](mailto:osdnk@fb.com))
- [Android] Introduce HasJavascriptExceptionMetadata interface ([6fb1690](https://github.com/facebook/react-native/commit/6fb1690) by [Moti Zilberman](mailto:moti@fb.com))
- [Android] Fix Android CI ([8997e9a](https://github.com/facebook/react-native/commit/8997e9a) by [David Vacca](mailto:dvacca@fb.com))
- [Android] remove useBatchingForLayoutOutputs config param and start using batching for layout outputs ([3866cd1](https://github.com/facebook/react-native/commit/3866cd1) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- [Android] bump gradle-download-task to 4.0.0 ([77ad650](https://github.com/facebook/react-native/commit/77ad650) by [Dulmandakh](mailto:dulmandakh@gmail.com))
- [Android] add is_androidx option to rn_java_library buck rule ([44163b7](https://github.com/facebook/react-native/commit/44163b7) by [Dulmandakh](mailto:dulmandakh@gmail.com))
- [Android] bump Android Gradle Plugin to 3.4.2 ([eb48ed1](https://github.com/facebook/react-native/commit/eb48ed1) by [Dulmandakh](mailto:dulmandakh@gmail.com))
- [Android] Properly paint the border colors and there are round borders ([79853d6](https://github.com/facebook/react-native/commit/79853d6) by [Guilherme Iscaro](mailto:cabelitostos@gmail.com))
- [Android] Fix android CI ([668a4f6](https://github.com/facebook/react-native/commit/668a4f6) by [David Vacca](mailto:dvacca@fb.com))
- [Android] Type-check JS args when converting them to Java args ([ff9323a](https://github.com/facebook/react-native/commit/ff9323a) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Use AndroidX GuardedBy annotation in favor of Javax GuardedBy annotation ([1914d9a](https://github.com/facebook/react-native/commit/1914d9a) by [David Vacca](mailto:dvacca@fb.com))
- [Android] Add package.json scripts ro run android and ios in template ([afe06e5](https://github.com/facebook/react-native/commit/afe06e5) by [satyajit.happy](mailto:satyajit.happy@gmail.com))
- [Android] Migrate Nullable and NonNull annotations to AndroidX ([aa5edca](https://github.com/facebook/react-native/commit/aa5edca) by [David Vacca](mailto:dvacca@fb.com))
- [Android] Fix IllegalStateException in TextView.onEditorAction() ([aa2c682](https://github.com/facebook/react-native/commit/aa2c682) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [Android] Remove JsonWriter, support bridge types in JsonWriterHelper ([e0ae655](https://github.com/facebook/react-native/commit/e0ae655) by [Moti Zilberman](mailto:moti@fb.com))
- [Android] Re-add Start/Stop Sampling profiler in Dev Menu for Android ([8e3ccaa](https://github.com/facebook/react-native/commit/8e3ccaa) by [Ram N](mailto:axe@fb.com))
- [Android] Android support for changing bundle location ([3468af5](https://github.com/facebook/react-native/commit/3468af5) by [Mehdi Mulani](mailto:mehdi@fb.com))
- [Android] Delete visible property from ModalHostViewNativeComponent ([61563cd](https://github.com/facebook/react-native/commit/61563cd) by [Samuel Susla](mailto:samuelsusla@fb.com))
- [Android] Upgrade Gradle to 5.5 ([029aad3](https://github.com/facebook/react-native/commit/029aad3) by [Nicolas Charpentier](mailto:nicolas.charpentier079@gmail.com))
- [Android] Remove warnings in some RN Android classes ([a679f59](https://github.com/facebook/react-native/commit/a679f59) by [David Vacca](mailto:dvacca@fb.com))
- [Android] NIT: Cleanup warnings in RN Android ([9c20f8a](https://github.com/facebook/react-native/commit/9c20f8a) by [David Vacca](mailto:dvacca@fb.com))
- [Android] Fix Javadocs broken by google-java-format ([cd05a85](https://github.com/facebook/react-native/commit/cd05a85) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [Android] Format Java code in xplat/js/react-native-github ([6c0f73b](https://github.com/facebook/react-native/commit/6c0f73b) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [Android] Add paperTopLevelNameDeprecated ([9a84970](https://github.com/facebook/react-native/commit/9a84970) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Remove viewIsDescendantOf from Android code ([cc79e97](https://github.com/facebook/react-native/commit/cc79e97) by [David Vacca](mailto:dvacca@fb.com))
- [Android] Support commands as strings in ViewPagerAndroid ([f7608d5](https://github.com/facebook/react-native/commit/f7608d5) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Add ScrollViewExample to RNTester on Android ([84330f3](https://github.com/facebook/react-native/commit/84330f3) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Support commands as strings in AndroidDrawerLayout ([35570a1](https://github.com/facebook/react-native/commit/35570a1) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Prevent getLegacyCxxModule from being stripped ([90897a9](https://github.com/facebook/react-native/commit/90897a9) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] RN: Cleanup PickerAndroid ([3c41e73](https://github.com/facebook/react-native/commit/3c41e73) by [Tim Yung](mailto:yungsters@fb.com))
- [Android] AndroidSwipeRefreshLayout is not interfaceOnly ([aa89f90](https://github.com/facebook/react-native/commit/aa89f90) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Bump Fresco to 2.0.0, supports AndroidX ([0af25a8](https://github.com/facebook/react-native/commit/0af25a8) by [Dulmandakh](mailto:dulmandakh@gmail.com))
- [Android] add custom font weight support to Text component on Android, only on P(API 28) and above versions ([3915c0f](https://github.com/facebook/react-native/commit/3915c0f) by [Dulmandakh](mailto:dulmandakh@gmail.com))
- [Android] Supporting autoCapitalize as string to clean up internal TextInput.js file ([38d974e](https://github.com/facebook/react-native/commit/38d974e) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Using generated ViewConfigs for AndroidSwipeRefreshLayoutNativeComponent ([2a4882e](https://github.com/facebook/react-native/commit/2a4882e) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Add android view props ([f4fa539](https://github.com/facebook/react-native/commit/f4fa539) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Flow type and codegen AndroidProgressBarNativeComponent ([b83a573](https://github.com/facebook/react-native/commit/b83a573) by [Peter Argany](mailto:petetheheat@fb.com))
- [Android] Android: Use enum type for looking up JSIModule's ([2df9073](https://github.com/facebook/react-native/commit/2df9073) by [Kevin Gozali](mailto:fkg@fb.com))
- [Android] Pass layout constraints in to startSurface() ([1de206f](https://github.com/facebook/react-native/commit/1de206f) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- [Android] Focus text input on accessibility tap ([616864a](https://github.com/facebook/react-native/commit/616864a) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- [Android] pass measure callback data from c++ to java ([38adb8e](https://github.com/facebook/react-native/commit/38adb8e) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- [Android] Make turbomodule/core/jni:jni depend on FBJNI_TARGET ([9cea760](https://github.com/facebook/react-native/commit/9cea760) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Workaround to avoid bridge access from ReactTextView for Venice ([5c399a9](https://github.com/facebook/react-native/commit/5c399a9) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- [Android] Make CompositeReactPackage support TurboReactPackage ([608cf6f](https://github.com/facebook/react-native/commit/608cf6f) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Use generated view config for iOS Switch ([5b7be95](https://github.com/facebook/react-native/commit/5b7be95) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] add node layout event and pass it java layer ([b6dc958](https://github.com/facebook/react-native/commit/b6dc958) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- [Android] Remove ToolbarAndroid ([c94d7d5](https://github.com/facebook/react-native/commit/c94d7d5) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- [Android] add node measure event and passing the callback to java layer ([348c3eb](https://github.com/facebook/react-native/commit/348c3eb) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- [Android] Move NetInfo Android files to FB internal ([67e589c](https://github.com/facebook/react-native/commit/67e589c) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- [Android] Move ToolbarAndroid Java code to FB internal ([cbbbb45](https://github.com/facebook/react-native/commit/cbbbb45) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- [Android] TurboModule for PlatformConstants ([5675185](https://github.com/facebook/react-native/commit/5675185) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- [Android] DeviceInfo TurboModule ([7c2433c](https://github.com/facebook/react-native/commit/7c2433c) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- [Android] Fix race in TurboModuleManager initialization ([9fdc8da](https://github.com/facebook/react-native/commit/9fdc8da) by [at com.facebook.infer.annotation.Assertions.assertNotNull(Assertions.java:35)
  06-05 11:11:02.020 10461 10617 E AndroidRuntime: ](mailto:at com.facebook.react.bridge.NativeModuleRegistry.getModule(NativeModuleRegistry.java:147)
  06-05 11:11:02.020 10461 10617 E AndroidRuntime: ))
- [Android] Enable TurboModules for FB4A ([7b9c456](https://github.com/facebook/react-native/commit/7b9c456) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Cleaned up debug menu ([dac037d](https://github.com/facebook/react-native/commit/dac037d) by [Tim Yung](mailto:yungsters@fb.com))
- [Android] RN: Simplify Context Creation (Android) ([739651a](https://github.com/facebook/react-native/commit/739651a) by [Tim Yung](mailto:yungsters@fb.com))
- [Android] Delete Start/Stop Profiler from Dev Menu in Android ([060a3ea](https://github.com/facebook/react-native/commit/060a3ea) by [Ram N](mailto:axe@fb.com))
- [Android] Fix switch being stuck in intermidiate state on Android ([aac95b4](https://github.com/facebook/react-native/commit/aac95b4) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [Android] Temporarily bring back the "ToolbarAndroid" export for RN ([5a5c28a](https://github.com/facebook/react-native/commit/5a5c28a) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- [Android] Disable Android tests on Appveyor ([382cb05](https://github.com/facebook/react-native/commit/382cb05) by [Héctor Ramos](mailto:hector@hectorramos.com))
- [Android] Use startSurface on Android ([298f59c](https://github.com/facebook/react-native/commit/298f59c) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- [Android] Fix how we normalize indices ([bd3023a](https://github.com/facebook/react-native/commit/bd3023a) by [Luna Wei](mailto:luwe@fb.com))
- [Android] Remove ToolbarAndroid, move to FB Internal ([31ab947](https://github.com/facebook/react-native/commit/31ab947) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- [Android] Fix for ActivityIndicator on Android ([9560776](https://github.com/facebook/react-native/commit/9560776) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [Android] Update spinner mode to render spinner instead of calendar ([7d1c827](https://github.com/facebook/react-native/commit/7d1c827) by [Shen Jin](mailto:s29jin@fb.com))
- [Android] bump android gradle plugin to 3.4.1 ([fbc6d8c](https://github.com/facebook/react-native/commit/fbc6d8c) by [Dulmandakh](mailto:dulmandakh+github@gmail.com))
- [Android] Fix update of accessibilityStates in Android ([01abcf0](https://github.com/facebook/react-native/commit/01abcf0) by [David Vacca](mailto:dvacca@fb.com))
- [Android] Use startSurface on Android ([f23da3a](https://github.com/facebook/react-native/commit/f23da3a) by [Emily Janzer](mailto:emily.janzer@oculus.com))
- [Android] Move CameraRoll JS to FB internal ([3f04cfe](https://github.com/facebook/react-native/commit/3f04cfe) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- [Android] Fix flow errors ([b355ba5](https://github.com/facebook/react-native/commit/b355ba5) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Implement support for legacy CxxModules ([5127ac5](https://github.com/facebook/react-native/commit/5127ac5) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Only create TurboModule jsi::HostObject if Java module is non-null ([37583bd](https://github.com/facebook/react-native/commit/37583bd) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Implement Android Cxx TurboModule support ([e1102b4](https://github.com/facebook/react-native/commit/e1102b4) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Introduce ReactPackageTurboModuleManagerDelegate ([08d87cd](https://github.com/facebook/react-native/commit/08d87cd) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [iOS] Move RCTExceptionsManager to CoreModules and make it conform to spec ([6991e28](https://github.com/facebook/react-native/commit/6991e28) by [Peter Argany](mailto:petetheheat@fb.com))
- [iOS] Pass RuntimeExecutor into RCTSurfacePresenter ([0b3aeec](https://github.com/facebook/react-native/commit/0b3aeec) by [Peter Argany](mailto:petetheheat@fb.com))
- [iOS] Pass RCTImageLoader into RCTSurfacePresenter [5/N] ([a380f0f](https://github.com/facebook/react-native/commit/a380f0f) by [Peter Argany](mailto:petetheheat@fb.com))
- [iOS] Convert RCTImageLoader to TurboModules [4/N] ([30c1196](https://github.com/facebook/react-native/commit/30c1196) by [Peter Argany](mailto:petetheheat@fb.com))
- [iOS] Migrate RCTImage NativeModules to CoreModules ([bf78d79](https://github.com/facebook/react-native/commit/bf78d79) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [iOS] Fix crash during reload on Marketplace Home ([e6debfe](https://github.com/facebook/react-native/commit/e6debfe) by [Samuel Susla](mailto:samuelsusla@fb.com))
- [iOS] Remove duplicate category implementation ([0e8d571](https://github.com/facebook/react-native/commit/0e8d571) by [Adam Ernst](mailto:adamjernst@fb.com))
- [iOS] Break retain cycle in RCTScrollViewComponentView ([14edd5d](https://github.com/facebook/react-native/commit/14edd5d) by [Samuel Susla](mailto:samuelsusla@fb.com))
- [iOS] Update RCTTurboModule.mm ([9115b61](https://github.com/facebook/react-native/commit/9115b61) by [Championrunner](mailto:ishaanmalikrm7@gmail.com))
- [iOS] Deprecate RCTExport ([b771e20](https://github.com/facebook/react-native/commit/b771e20) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [iOS] Add utility methods for enabling high quality error messages ([9168101](https://github.com/facebook/react-native/commit/9168101) by [Eli White](mailto:eliwhite@fb.com))
- [iOS] Deprecate RCTImageLoader category of RCTBridge [2/N] ([8a80d61](https://github.com/facebook/react-native/commit/8a80d61) by [Peter Argany](mailto:petetheheat@fb.com))
- [iOS] Remove all calls to bridge.imageLoader [1/N] ([7d15a6b](https://github.com/facebook/react-native/commit/7d15a6b) by [Peter Argany](mailto:petetheheat@fb.com))
- [iOS] UIManager no longer triggers RCTLogError ([61b6c85](https://github.com/facebook/react-native/commit/61b6c85) by [Samuel Susla](mailto:samuelsusla@fb.com))
- [iOS] Add NativeModule Spec for ImagePickerIOS ([6e7b438](https://github.com/facebook/react-native/commit/6e7b438) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [iOS] Fix incorrect information in comment ([ec2bf94](https://github.com/facebook/react-native/commit/ec2bf94) by [Samuel Susla](mailto:samuelsusla@fb.com))
- [iOS] Fix missing base64 images ([c914dfb](https://github.com/facebook/react-native/commit/c914dfb) by [Samuel Susla](mailto:samuelsusla@fb.com))
- [iOS] Add a loading bar when loading split bundles ([d974793](https://github.com/facebook/react-native/commit/d974793) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- [iOS] Change callback in clearCookies and sendRequest from RCTNetworking to returning void ([28b282e](https://github.com/facebook/react-native/commit/28b282e) by [Michał Osadnik](mailto:osdnk@fb.com))
- [iOS] Lazily create RCTVersion dict ([9645328](https://github.com/facebook/react-native/commit/9645328) by [Jeff Thomas](mailto:jeffdthomas@fb.com))
- [iOS] iOS: Use RCTTypeSafety header namespace instead of React ([0c8c95f](https://github.com/facebook/react-native/commit/0c8c95f) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] deprecate iOS .xcodeproj ([79a7828](https://github.com/facebook/react-native/commit/79a7828) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] Add support for optional methods ([b848af3](https://github.com/facebook/react-native/commit/b848af3) by [Michał Osadnik](mailto:osdnk@fb.com))
- [iOS] Reland: [RN] iOS OSS: define plugin entries for OSS NativeModules ([e883197](https://github.com/facebook/react-native/commit/e883197) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] iOS OSS: define plugin entries for OSS NativeModules ([f26ffbf](https://github.com/facebook/react-native/commit/f26ffbf) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] iOS Buck: Create CoreModules sub-target ([020c11c](https://github.com/facebook/react-native/commit/020c11c) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] Commit IDEWorkspaceChecks.plist [trivial] ([c184581](https://github.com/facebook/react-native/commit/c184581) by [radex](mailto:radexpl@gmail.com))
- [iOS] Remove definition of viewIsDescendantOf method in RN iOS code ([9ae7f0c](https://github.com/facebook/react-native/commit/9ae7f0c) by [David Vacca](mailto:dvacca@fb.com))
- [iOS] Update View Config generator to create command methods ([2bd5032](https://github.com/facebook/react-native/commit/2bd5032) by [Eli White](mailto:eliwhite@fb.com))
- [iOS] Move to SegmentedControlIOS to use a generated view config ([680abf2](https://github.com/facebook/react-native/commit/680abf2) by [Cameron Bourke](mailto:cameronbourke@fb.com))
- [iOS] Fix progress indication on iOS ([a225d1a](https://github.com/facebook/react-native/commit/a225d1a) by [Dan Abramov](mailto:gaearon@fb.com))
- [iOS] Change top bar colors for Hot Reloading label ([e81c1e3](https://github.com/facebook/react-native/commit/e81c1e3) by [Dan Abramov](mailto:gaearon@fb.com))
- [iOS] StickerViewNativeComponent ([122acca](https://github.com/facebook/react-native/commit/122acca) by [Luna Wei](mailto:luwe@fb.com))
- [iOS] Flow typed & codegen RCTInputAccessoryViewNativeComponent ([7bb2ba5](https://github.com/facebook/react-native/commit/7bb2ba5) by [Peter Argany](mailto:petetheheat@fb.com))
- [iOS] Flow type and codegen for RCTProgressViewNativeComponent ([b441ced](https://github.com/facebook/react-native/commit/b441ced) by [Peter Argany](mailto:petetheheat@fb.com))
- [iOS] allow custom attributedTextWithBaseTextAttributes in RCTBaseTextShadowView subclasses ([23df1b0](https://github.com/facebook/react-native/commit/23df1b0) by [Vojtech Novak](mailto:vonovak@gmail.com))
- [iOS] Allow type exports from the typed native component ([be07435](https://github.com/facebook/react-native/commit/be07435) by [Cameron Bourke](mailto:cameronbourke@fb.com))
- [iOS] Allow to end markers early ([853c667](https://github.com/facebook/react-native/commit/853c667) by [David Aurelio](mailto:davidaurelio@fb.com))
- [iOS] make RCTMaskedView use generated view config ([6c5ddb0](https://github.com/facebook/react-native/commit/6c5ddb0) by [Cameron Bourke](mailto:cameronbourke@fb.com))
- [iOS] Delete fishhook ([46bdb41](https://github.com/facebook/react-native/commit/46bdb41) by [Mehdi Mulani](mailto:mehdi@fb.com))
- [iOS] Update flow parser to use codegenNativeComponent ([504fc0c](https://github.com/facebook/react-native/commit/504fc0c) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [iOS] RN: Restore Debug Bridge Description (iOS) ([6646460](https://github.com/facebook/react-native/commit/6646460) by [Tim Yung](mailto:yungsters@fb.com))
- [iOS] Protect access to RCTTurboModuleCache ([a44ab29](https://github.com/facebook/react-native/commit/a44ab29) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [iOS] Summary: [iOS][changed] - background tasks need names in order to track them ([5c24599](https://github.com/facebook/react-native/commit/5c24599) by [Alex Cohen](mailto:alexcohen@fb.com))
- [iOS] Add textContentType to onboarding flow ([c59da6e](https://github.com/facebook/react-native/commit/c59da6e) by [Shen Jin](mailto:s29jin@fb.com))

### Deprecated

- Moved `TextInput`'s proptypes to `DeprecatedTextInputPropTypes` ([427b54e](https://github.com/facebook/react-native/commit/427b54e) by [empyrical](mailto:empyrical@outlook.com))
- Deprecate method UIManagerModule.playTouchSound() ([e3ec8db](https://github.com/facebook/react-native/commit/e3ec8db) by [David Vacca](mailto:dvacca@fb.com))
- [Android] DrawerLayoutAndroid drawerPosition now expects a string, number is deprecated ([305b0a2](https://github.com/facebook/react-native/commit/305b0a2) by [Eli White](mailto:eliwhite@fb.com))
- [Android] Migrate ARTGroupShadowNode.java to Android target API 28 ([6625356](https://github.com/facebook/react-native/commit/6625356) by [Stepan Furdei](mailto:furdei@fb.com))
- [Android] Introduce NativeExceptionsManager.reportException API ([3a825c0](https://github.com/facebook/react-native/commit/3a825c0) by [Moti Zilberman](mailto:moti@fb.com))
- [Android] RN iOS: Support View Manager Commands that are strings ([0a34fb7](https://github.com/facebook/react-native/commit/0a34fb7) by [Eli White](mailto:eliwhite@fb.com))
- [Android] RN Android: Support View Manager Commands that are strings ([3cae6fa](https://github.com/facebook/react-native/commit/3cae6fa) by [Eli White](mailto:eliwhite@fb.com))
- [iOS] Remove old GIF code ([cf77067](https://github.com/facebook/react-native/commit/cf77067) by [zhongwuzw](mailto:zhongwuzw@qq.com))

### Removed

- Move `Text` component's proptypes to DeprecatedPropTypes ([0057cc9](https://github.com/facebook/react-native/commit/0057cc9) by [empyrical](mailto:empyrical@outlook.com))
- Delete ensureComponentIsNative.js ([9a31fa5](https://github.com/facebook/react-native/commit/9a31fa5) by [Eli White](mailto:eliwhite@fb.com))
- Tweak messages and fix the warning condition ([2a3ac04](https://github.com/facebook/react-native/commit/2a3ac04) by [Dan Abramov](mailto:gaearon@fb.com))
- Deprecate UIManagerModule.removeSubviewsFromContainerWithID ([2992518](https://github.com/facebook/react-native/commit/2992518) by [David Vacca](mailto:dvacca@fb.com))
- Deprecate UIManagerModule.replaceExistingNonRootView ([a863949](https://github.com/facebook/react-native/commit/a863949) by [David Vacca](mailto:dvacca@fb.com))
- Switch HMR connection to register bundle entry points via a message ([93bebf1](https://github.com/facebook/react-native/commit/93bebf1) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- moved all yoga node jni batching code to YogaNodeJNIBase and removed subclasses ([b329f99](https://github.com/facebook/react-native/commit/b329f99) by [Sidharth Guglani](mailto:sidharthguglani@fb.com))
- Simplify AppRegistry logging ([1f25d3c](https://github.com/facebook/react-native/commit/1f25d3c) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Create RootTagContext and provide it in AppContainer ([f9ecce7](https://github.com/facebook/react-native/commit/f9ecce7) by [Rubén Norte](mailto:rubennorte@fb.com))
- Unify "Hot Reloading" and "Reload-on-Save" into "Fast Refresh" ([a52e6d1](https://github.com/facebook/react-native/commit/a52e6d1) by [Dan Abramov](mailto:gaearon@fb.com))
- Remove useless module.hot checks ([08bfdfa](https://github.com/facebook/react-native/commit/08bfdfa) by [Dan Abramov](mailto:gaearon@fb.com))
- Generate UnimplementedNativeView ([004a90b](https://github.com/facebook/react-native/commit/004a90b) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Remove extra component wrapper from View ([28f1aac](https://github.com/facebook/react-native/commit/28f1aac) by [Eli White](mailto:eliwhite@fb.com))
- install watchman in e2e tests to fix CI ([488a91b](https://github.com/facebook/react-native/commit/488a91b) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Add fix for react-native-gesture-handler ([942de57](https://github.com/facebook/react-native/commit/942de57) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- Move ImageEditor JS files to FB internal ([1f8e08a](https://github.com/facebook/react-native/commit/1f8e08a) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Remove ImageStore JS files from RN open source ([8e16a60](https://github.com/facebook/react-native/commit/8e16a60) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- Sync React with Haste-style imports rewritten to use path-based imports instead ([69d1ed7](https://github.com/facebook/react-native/commit/69d1ed7) by [James Ide](mailto:ide@expo.io))
- Removed hardcoded references to port 8081 and replaced them by reading from RCT_METRO_PORT (w/ fallback to 8081) ([f5aa523](https://github.com/facebook/react-native/commit/f5aa523) by [Jim Berlage](mailto:james.berlage@gmail.com))
- Add deprecation messages for NetInfo and CameraRoll ([d31e906](https://github.com/facebook/react-native/commit/d31e906) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- `YGNode`: Field for web defaults ([19a88d7](https://github.com/facebook/react-native/commit/19a88d7) by [David Aurelio](mailto:davidaurelio@fb.com))
- [Android] Fix up NativeDialogManagerAndroid PR ([a5b925d](https://github.com/facebook/react-native/commit/a5b925d) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- [Android] Remove supportLibVersion variable in build.gradle ([fee7f06](https://github.com/facebook/react-native/commit/fee7f06) by [Kid Commit](mailto:26439946+ferdicus@users.noreply.github.com))
- [Android] Move ViewPagerAndroid JS code to FB Internal ([f8a400a](https://github.com/facebook/react-native/commit/f8a400a) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- [Android] Remove ToolbarAndroid ([82771f4](https://github.com/facebook/react-native/commit/82771f4) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- [iOS] iOS: removed turbo_modules_enabled from autolink ([7dc0d4b](https://github.com/facebook/react-native/commit/7dc0d4b) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] Add paperComponentName and paperComponentNameDeprecated ([ff5592c](https://github.com/facebook/react-native/commit/ff5592c) by [Rick Hanlon](mailto:rickhanlonii@fb.com))
- [iOS] Cleaned up debug menu ([796e9b0](https://github.com/facebook/react-native/commit/796e9b0) by [Tim Yung](mailto:yungsters@fb.com))

### Fixed

- fix SectionList scrollToLocation and prevent regressions ([8a82503](https://github.com/facebook/react-native/commit/8a82503) by [Vojtech Novak](mailto:vonovak@gmail.com))
- Fix handling of failed image downloads ([5cde7d2](https://github.com/facebook/react-native/commit/5cde7d2) by [Samuel Susla](mailto:samuelsusla@fb.com))
- Fix indentation in Gradle files ([9b0adb5](https://github.com/facebook/react-native/commit/9b0adb5) by [Jakob Krigovsky](mailto:jakob@krigovsky.com))
- Fix forceUpdate method on useWindowDimensions ([742a544](https://github.com/facebook/react-native/commit/742a544) by [Bruno Lemos](mailto:brunohplemos@gmail.com))
- Add ErrorUtils to eslint globals ([76af5f9](https://github.com/facebook/react-native/commit/76af5f9) by [Rodinei Fagundes](mailto:rodinei.jf@gmail.com))
- React sync for revisions ec6691a...55bc393 ([40e8a5f](https://github.com/facebook/react-native/commit/40e8a5f) by [Eli White](mailto:eliwhite@fb.com))
- Update react-devtools-core to 3.6.3 to fix React Inspector ([fffe2d0](https://github.com/facebook/react-native/commit/fffe2d0) by [Brian Vaughn](mailto:bvaughn@fb.com))
- Fix typos ([84f5ebe](https://github.com/facebook/react-native/commit/84f5ebe) by [Min ho Kim](mailto:minho42@gmail.com))
- Fixed typo in `VirtualizedList#maxToRenderPerBatch` ([d60fbe4](https://github.com/facebook/react-native/commit/d60fbe4) by [Abhishek Ghosh](mailto:abghosh@tesla.com))
- Publish `react-native.config.js` ([44c05da](https://github.com/facebook/react-native/commit/44c05da) by [Michał Pierzchała](mailto:thymikee@gmail.com))
- Minor markdown fix ([d847163](https://github.com/facebook/react-native/commit/d847163) by [James George](mailto:jamesgeorge998001@gmail.com))
- Send the server chosen protocol to the WebSocket object ([4b9c99d](https://github.com/facebook/react-native/commit/4b9c99d) by [Guilherme Iscaro](mailto:cabelitostos@gmail.com))
- Strengthen ModuleConfig Flow typing ([0f92984](https://github.com/facebook/react-native/commit/0f92984) by [Moti Zilberman](mailto:moti@fb.com))
- https link to EditorConfig.org ([1120611](https://github.com/facebook/react-native/commit/1120611) by [Christian Oliff](mailto:christianoliff@yahoo.com))
- mock Animated components with versions that skipSetNativeProps ([a4acd88](https://github.com/facebook/react-native/commit/a4acd88) by [Ryan Dy](mailto:ryan.dy@sony.com))
- Reland "[RN][turbomodule] Enable TurboModules for FB4A" ([72be568](https://github.com/facebook/react-native/commit/72be568) by [Ramanpreet Nara](mailto:ramanpreet@fb.com))
- Remove Map/Set from RN Open Source ([93b9ac7](https://github.com/facebook/react-native/commit/93b9ac7) by [Christoph Nakazawa](mailto:cpojer@fb.com))
- fix of Android's bug that doesn't let override ScrollView's Style with custom RefreshControl ([d9a8ac5](https://github.com/facebook/react-native/commit/d9a8ac5) by [Пётр Потапов](mailto:dr.potapoff.peter@gmail.com))
- standardize C-like MIT copyright headers throughout fbsource ([14f2491](https://github.com/facebook/react-native/commit/14f2491) by [Rain ⁣](mailto:rain1@fb.com))
- Fix connection of animated nodes and scroll offset with useNativeDriver ([bdc530b](https://github.com/facebook/react-native/commit/bdc530b) by [Mikael Sand](mailto:msand@abo.fi))
- Correctly bypass sync calls in UIManager during remote debugging ([417e191](https://github.com/facebook/react-native/commit/417e191) by [Brian Zhao](mailto:rezha@microsoft.com))
- Fix accessibilityActions accessors ([afc142b](https://github.com/facebook/react-native/commit/afc142b) by [Sharon Gong](mailto:xuelung@amazon.com))
- Move unistd.h include to cpp where its used ([7f489b6](https://github.com/facebook/react-native/commit/7f489b6) by [REDMOND\acoates](mailto:acoates@microsoft.com))
- Add a lint rule to disallow Haste imports ([33ee6f8](https://github.com/facebook/react-native/commit/33ee6f8) by [James Ide](mailto:ide@expo.io))
- Move accessibilityActions props to UIView+React ([651cc26](https://github.com/facebook/react-native/commit/651cc26) by [Sharon Gong](mailto:xuelung@amazon.com))
- [Android] Fix UIManager.measure() ([28d5018](https://github.com/facebook/react-native/commit/28d5018) by [Florian Cargoët](mailto:florian.cargoet@gmail.com))
- [Android] Add missing hermes include ([1db96a3](https://github.com/facebook/react-native/commit/1db96a3) by [Janic Duplessis](mailto:janicduplessis@gmail.com))
- [Android] Fixes compilation of Yoga ([341b509](https://github.com/facebook/react-native/commit/341b509) by [David Aurelio](mailto:davidaurelio@fb.com))
- [Android] Correctly set the border radius on android ([b432b8f](https://github.com/facebook/react-native/commit/b432b8f) by [Guilherme Iscaro](mailto:cabelitostos@gmail.com))
- [Android] Adding border radius styles to TouchableNative react-native run-android --port <x> correctly connects to dev server and related error messages display the correct port ([14b455f](https://github.com/facebook/react-native/commit/14b455f) by [Nate](mailto:nate.hunzaker@gmail.com))
- [Android] Remove unnecessary flag when running JS server ([a162554](https://github.com/facebook/react-native/commit/a162554) by [thecodrr](mailto:abdullahatta31@gmail.com))
- [Android] Use HYPHENATION_FREQUENCY_NONE instead of HYPHENATION_FREQUENCY_NORMAL to measure text ([24b2a66](https://github.com/facebook/react-native/commit/24b2a66) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [Android] Add codegen to AndroidDrawer ([b7782fb](https://github.com/facebook/react-native/commit/b7782fb) by [Michał Osadnik](mailto:osdnk@fb.com))
- [Android] Upgrade jsc-android to r245459 and fix crash on Samsung S7 Edge ([58d8794](https://github.com/facebook/react-native/commit/58d8794) by [Kudo Chien](mailto:ckchien@gmail.com))
- [Android] Reset sMatrixDecompositionContext before applying transformations ([ab80001](https://github.com/facebook/react-native/commit/ab80001) by [Guilherme Iscaro](mailto:cabelitostos@gmail.com))
- [Android] Set collapse property before starting an animation that uses the native driver ([df50eee](https://github.com/facebook/react-native/commit/df50eee) by [Guilherme Iscaro](mailto:cabelitostos@gmail.com))
- [Android] Fix some languages wrapped texts are cut off ([76c50c1](https://github.com/facebook/react-native/commit/76c50c1) by [soh335](mailto:sugarbabe335@gmail.com))
- [Android] ActivityIndicator appears as expected when `animated={false}` is later set to `true` ([8094377](https://github.com/facebook/react-native/commit/8094377) by [Nate](mailto:nate.hunzaker@gmail.com))
- [Android] Improves the initial copy for creating a new RN project on android ([9ed6dc7](https://github.com/facebook/react-native/commit/9ed6dc7) by [Orta Therox](mailto:orta.therox@gmail.com))
- [Android] Fix Picker ArrayOutOfBoundsException during Picker.Item update from a long list ([cbf1b39](https://github.com/facebook/react-native/commit/cbf1b39) by [Kudo Chien](mailto:ckchien@gmail.com))
- [Android] Fix Android native debug build assert crash ([ce80a67](https://github.com/facebook/react-native/commit/ce80a67) by [Kudo Chien](mailto:ckchien@gmail.com))
- [Android] Fix the explanation of the code to avoid misunderstanding ([5b72ec3](https://github.com/facebook/react-native/commit/5b72ec3) by [Charley](mailto:471705439@qq.com))
- [Android] Check if mCurrentActivity is set according to LifecycleState ([fb550e9](https://github.com/facebook/react-native/commit/fb550e9) by [Jerry.Luo](mailto:tiancailuohao@gmail.com))
- [Android][android] [Fixed] Scrolling improvements in ReactAndroid ([ae231c8](https://github.com/facebook/react-native/commit/ae231c8) by [Onti Vals](mailto:ontiv@microsoft.com))
- [Android] `react-native run-android --port <x>` correctly connects to dev server and related error messages display the correct port ([995b4d3](https://github.com/facebook/react-native/commit/995b4d3) by [Nate](mailto:nate.hunzaker@gmail.com))
- [Android] Fix missing whitespace in debug instructions ([b45d3b8](https://github.com/facebook/react-native/commit/b45d3b8) by [Michael Mason](mailto:mjmasn@users.noreply.github.com))
- [Android] Show proper error message instead of throwing a NullReferenceException if Gradle cannot find the NDK ([2aca234](https://github.com/facebook/react-native/commit/2aca234) by [Petter Hesselberg](mailto:petterh@microsoft.com))
- [Android] This branch checks also for `ACTION_NDEF_DISCOVERED` intent matches to set the initialURL ([54abe1f](https://github.com/facebook/react-native/commit/54abe1f) by [Andrea Cimitan](mailto:andrea.cimitan@gmail.com))
- [Android] Use OK as default text on Android Alert if button configuration specified without text ([fa97b23](https://github.com/facebook/react-native/commit/fa97b23) by [Malcolm Scruggs](mailto:malcolm.scruggs@appfolio.com))
- [Android] Changelog: [Android][fixed] - Fix backgroundColor top level prop of TextInput ([fb6cf25](https://github.com/facebook/react-native/commit/fb6cf25) by [Oleksandr Melnykov](mailto:omelnykov@fb.com))
- [Android] Fix ios/android e2e tests ([30a0a03](https://github.com/facebook/react-native/commit/30a0a03) by [nossbigg](mailto:chenggibson@gmail.com))
- [iOS] fix display problems when image fails to load ([71d7d68](https://github.com/facebook/react-native/commit/71d7d68) by [jsfu](mailto:sen870825@qq.com))
- [iOS] iOS fixed up inconsistent boolean convertion logic in RCTPlatform ([28e18e4](https://github.com/facebook/react-native/commit/28e18e4) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] Do not override ActivityIndicator color when setting its size ([14b0ed4](https://github.com/facebook/react-native/commit/14b0ed4) by [Guilherme Iscaro](mailto:cabelitostos@gmail.com))
- [iOS] Don't call sharedApplication in App Extension ([c5ea18f](https://github.com/facebook/react-native/commit/c5ea18f) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Fixed compatibility with CocoaPods frameworks ([8131b7b](https://github.com/facebook/react-native/commit/8131b7b) by [James Treanor](mailto:jtreanor3@gmail.com))
- [iOS] Fixes iOS packager connection not work ([4ab9da1](https://github.com/facebook/react-native/commit/4ab9da1) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Fixes template build failed in release mode ([0fcaca8](https://github.com/facebook/react-native/commit/0fcaca8) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] iOS build - en0 and en1 used when generating ip.txt file ([4a5a909](https://github.com/facebook/react-native/commit/4a5a909) by [options=1203<RXCSUM,TXCSUM,TXSTATUS,SW_TIMESTAMP>
  ](mailto:inet 127.0.0.1 netmask 0xff000000
  ))
- [iOS] iOS CocoaPods: Fixed typo in symlink, update cache ([c9694f7](https://github.com/facebook/react-native/commit/c9694f7) by [Kevin Gozali](mailto:fkg@fb.com))
- [iOS] Logs would get printed twice ([3b88f07](https://github.com/facebook/react-native/commit/3b88f07) by [Jonny Burger](mailto:jonathanburger11@gmail.com))
- [iOS] Debug message was logging to the console ([759b674](https://github.com/facebook/react-native/commit/759b674) by [Jonny Burger](mailto:jonathanburger11@gmail.com))
- [iOS] Fixed duplicate symbol in RCTAnimatedImage.h ([06de4e6](https://github.com/facebook/react-native/commit/06de4e6) by [Marco Zandonadi](mailto:marco.zandonadi@oculus.com))
- [iOS] Substantially lower chances of crashes from abundant GIF use ([3b67bfa](https://github.com/facebook/react-native/commit/3b67bfa) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- [iOS] Deprecation of `-[RCTRootView cancelTouches]` ([36307d8](https://github.com/facebook/react-native/commit/36307d8) by [Valentin Shergin](mailto:shergin@fb.com))
- [iOS] Don't apply empty attributed string for TextInput ([9b61896](https://github.com/facebook/react-native/commit/9b61896) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Fixes race condition of Network module ([831f5fe](https://github.com/facebook/react-native/commit/831f5fe) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Excluded tests file from JSI pod ([68bca1f](https://github.com/facebook/react-native/commit/68bca1f) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Removed autoresizing mask for modal host container view ([2dd7dd8](https://github.com/facebook/react-native/commit/2dd7dd8) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Xcode 11 beta build ([46c7ada](https://github.com/facebook/react-native/commit/46c7ada) by [Eric Lewis](mailto:ericlewis777@gmail.com))
- [iOS] Keep the order of Modals that we can dismiss in sequence ([fd7f5bb](https://github.com/facebook/react-native/commit/fd7f5bb) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Fixed the issue that the RNTester-tvOS is not compilable ([93dc403](https://github.com/facebook/react-native/commit/93dc403) by [spdr admin](mailto:spdradmin@spdrs-mac-mini.local))
- [iOS] Fixes wrong time unit of scroll event throttle ([1148c03](https://github.com/facebook/react-native/commit/1148c03) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Fix incorrect unhooking for UI manager views in `RCTProfileUnhookModules`, causing an infinite `RCTProfileTrampoline` recursion ([23f5787](https://github.com/facebook/react-native/commit/23f5787) by [Leo Natan](mailto:leo.natan@outlook.com))
- [iOS] Add ultrabold pairs for font weight ([9d0d7b6](https://github.com/facebook/react-native/commit/9d0d7b6) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Using presentingViewController to dismiss Modal ([284c5f0](https://github.com/facebook/react-native/commit/284c5f0) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Fixes text style lost when enable maxLength ([90938d6](https://github.com/facebook/react-native/commit/90938d6) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Timing: Fixes timer when app get into background ([3382984](https://github.com/facebook/react-native/commit/3382984) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS][tm] Fixes wrong headers import ([141a304](https://github.com/facebook/react-native/commit/141a304) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS][fabric] Break retain cycle between view component and observer ([e4240da](https://github.com/facebook/react-native/commit/e4240da) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Add NAN check for text font sizeMultiplier ([3616941](https://github.com/facebook/react-native/commit/3616941) by [zhongwuzw](mailto:zhongwuzw@qq.com))
- [iOS] Fixed RNTesterApp to not call setState() after the component has been unmounted ([6671165](https://github.com/facebook/react-native/commit/6671165) by [Tom Underhill](mailto:tomun@microsoft.com))
- [iOS] Disable iOS end-to-end tests ([9785a57](https://github.com/facebook/react-native/commit/9785a57) by [Héctor Ramos](mailto:hector@hectorramos.com))
- [iOS] Fix e2e detox build step ([adc0878](https://github.com/facebook/react-native/commit/adc0878) by [nossbigg](mailto:chenggibson@gmail.com))

## [0.60.5] - 2019-08-13

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/130) to improve the quality of the 0.60 release. Thanks to everyone who contributed!

### Added

- Added a default Prettier config for new projects ([f4d5e8c](https://github.com/facebook/react-native/commit/f4d5e8c) by [@jpdriver](https://github.com/jpdriver))

#### Android specific

- Add showSoftInputOnFocus to TextInput ([b476ca0](https://github.com/facebook/react-native/commit/b476ca0))

### Changed

- Bump CLI to ^2.6.0 ([72473c7](https://github.com/facebook/react-native/commit/72473c7) by [@thymikee](https://github.com/thymikee))

### Fixed

- Ensure right version of Metro bundler is used ([1bb197a](https://github.com/facebook/react-native/commit/1bb197a) by [@kelset](https://github.com/kelset))

#### Android specific

- Fix `ClassNotFound` exception in Android during Release builds ([ffdf3f2](https://github.com/facebook/react-native/commit/ffdf3f2) by [@thecodrr](https://github.com/thecodrr))
- Remove unnecessary flag when running JS server ([5a4fac7](https://github.com/facebook/react-native/commit/5a4fac7) by [@thecodrr](https://github.com/thecodrr))
- Correctly set the border radius on android ([feb931f](https://github.com/facebook/react-native/commit/feb931f) by [@cabelitos](https://github.com/cabelitos))
- Fix addition of comma at the end of accessibility labels on Android. ([812abfd](https://github.com/facebook/react-native/commit/812abfd) by [@marcmulcahy](https://github.com/marcmulcahy))

#### iOS specific

- Don't call sharedApplication in App Extension ([683908d](https://github.com/facebook/react-native/commit/683908d) by [@zhongwuzw](https://github.com/zhongwuzw))
- Delete fishhook ([95c747e](https://github.com/facebook/react-native/commit/95c747e) by [@mmmulani](https://github.com/mmmulani))

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## [0.60.4]

This is a patch release that contains two more Hermes related fixes, thanks to the contributors for helping improving the support!

### Fixed

#### Android specific

- Generate correct source map if hermes not enabled ([b1f81be](https://github.com/facebook/react-native/commit/b1f81be) by [@HazAT](https://github.com/HazAT))
- Generate source maps outside of assets/ ([60e75dc](https://github.com/facebook/react-native/commit/60e75dc) by [@motiz88](https://github.com/motiz88))

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## [0.60.3]

This is a patch release that fixes the binary path to Hermes package, thanks to [@zoontek](https://github.com/zoontek)) for creating the PR!

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## [0.60.2]

This is a patch release that fixes the path to Hermes package.

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## [0.60.1]

This is a patch release that includes the Hermes JavaScript Engine announced at Chain React Conf 2019.

Check out the documentation to opt-in and give [Hermes a try](facebook.github.io/react-native/docs/hermes).

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## [0.60]

This feature release of React Native includes many milestone changes for the platform. Please refer to the [blog post](https://facebook.github.io/react-native/blog/2019/07/03/version-60) for selected details. For upgrading users, some of the progress comes with breaking changes; manual intervention may be required for your app. We're also aware that existing CocoaPods integrations using `use_frameworks` are not out-of-the-box compatible with this version, but please consider [various workarounds](https://github.com/facebook/react-native/issues/25349) while we prepare a long-term solution for a future release. If you're interested in helping evaluate our next release (0.61), subscribe to the dedicated issue [here](https://github.com/react-native-community/react-native-releases/issues/130).

Have you ever considered contributing to React Native itself? Be sure to check out [Contributing to React Native](https://github.com/facebook/react-native/blob/master/CONTRIBUTING.md).

### Added

- CLI autolinking support ([5954880](https://github.com/facebook/react-native/commit/5954880), [da7d3df](https://github.com/facebook/react-native/commit/da7d3df) by [@zhongwuzw](https://github.com/zhongwuzw) and [@hramos](https://github.com/hramos))
- New Intro screen ([6b393b2](https://github.com/facebook/react-native/commit/6b393b2), [233fddb](https://github.com/facebook/react-native/commit/233fddb), [fe88e9e](https://github.com/facebook/react-native/commit/fe88e9e), [aa926e3](https://github.com/facebook/react-native/commit/aa926e3), [a9e8a71](https://github.com/facebook/react-native/commit/a9e8a71), [ad4a5d9](https://github.com/facebook/react-native/commit/ad4a5d9), and [0245fd7](https://github.com/facebook/react-native/commit/0245fd7) by [@cpojer](https://github.com/cpojer), [@eliperkins](https://github.com/eliperkins), [@lucasbento](https://github.com/lucasbento), and [@orta](https://github.com/orta))
- Add enhanced accessibility actions support ([14b4668](https://github.com/facebook/react-native/commit/14b4668) by [@xuelgong](https://github.com/xuelgong))
- Add additional accessibility roles and states ([1aeac1c](https://github.com/facebook/react-native/commit/1aeac1c))
- Add `isReduceMotionEnabled()` plus `reduceMotionChanged` to `AccessibilityInfo` ([0090ab3](https://github.com/facebook/react-native/commit/0090ab3) by [@estevaolucas](https://github.com/estevaolucas)])
- Add support for cancelling fetch requests with `AbortController` ([h5e36b0c](https://github.com/facebook/react-native/commit/5e36b0c) by [@janicduplessis](https://github.com/janicduplessis))

#### Android specific

- Enable views to be nested within **Text**; this brings feature parity to Android, but be aware that it [has some limitations](https://github.com/facebook/react-native/commit/a2a03bc68ba062a96a6971d3791d291f49794dfd) ([a2285b1](https://github.com/facebook/react-native/commit/a2285b1) by [@rigdern](https://github.com/rigdern))
- Add a `touchSoundDisabled` prop to **Button**, **Touchable**, and **TouchableWithoutFeedback** ([45e77c8](https://github.com/facebook/react-native/commit/45e77c8) by [@yurykorzun](https://github.com/yurykorzun))

#### iOS specific

- Add `announceForAccessibility` and `announcementFinished` APIs for making screen reader announcemenets ([cfe0032](https://github.com/facebook/react-native/commit/cfe0032) by [@rigdern](https://github.com/rigdern))
- Ability to force network requests to use WiFi using the `allowsCellularAccess` property. This can ensure that network requests are sent over WiFi if communicating with a local hardware device and is accomplished by setting a flag. Default behavior of allowing network connections over cellular networks when available is unchanged. ([01c70f2](https://github.com/facebook/react-native/commit/01c70f2) and [916186a](https://github.com/facebook/react-native/commit/916186a) by [@bondparkerbond](https://github.com/bondparkerbond)and [@zhongwuzw](https://github.com/zhongwuzw))
- `$RN_CACHE_DIR` can now be used to manually specify the iOS build cache directory ([845eee4](https://github.com/facebook/react-native/commit/845eee4) by [@hramos](https://github.com/hramos))

### Changed

- _BREAKING_ Migrated to AndroidX; please see [this thread](https://github.com/react-native-community/discussions-and-proposals/issues/129#issuecomment-503829184) for more details on this change
- Cleanup **RedBox** message and stack output; it's now far easier to understand ([49d26eb](https://github.com/facebook/react-native/commit/49d26eb) by [@thymikee](https://github.com/thymikee))
- Add default `scrollEventThrottle` value to **Animated.FlatList** and **Animated.SectionList**; this now behaves consistently with **Animated.ScrollView** ([933e65e](https://github.com/facebook/react-native/commit/933e65e) by [@janicduplessis](https://github.com/janicduplessis))
- Remove invariant on nested sibling **VirtualizedLists** without unique listKey props; they now trigger a **RedBox** ([af5633b](https://github.com/facebook/react-native/commit/af5633b))
- **FlatList** and **VirtualizedList**'s default `keyExtractor` now checks `item.id` and `item.key` ([de0d7cf](https://github.com/facebook/react-native/commit/de0d7cf) by [@sahrens](https://github.com/sahrens))
- **SectionList**'s `scrollToLocation` on iOS now counts `itemIndex` like Android; both platforms are now consistent, and the `itemIndex` value 0 now represents scrolling to the first heading ([248a108](https://github.com/facebook/react-native/commit/248a108) by [@vonovak](https://github.com/vonovak))
- Slightly speedup core initialization by moving native version check to DEV only ([5bb2277](https://github.com/facebook/react-native/commit/5bb2277) by [@mmmulani](https://github.com/mmmulani))
- `react` is now at v16.8.6 ([53cec2d](https://github.com/facebook/react-native/commit/53cec2d), [ee681b7](https://github.com/facebook/react-native/commit/ee681b7), and [6001acb](https://github.com/facebook/react-native/commit/6001acb) by [@kelset](https://github.com/kelset), [@mdvacca](https://github.com/mdvacca), [@gaearon](https://github.com/gaearon))
- `react-native-community/cli` is now at v2.0.0 (by [@thymikee](https://github.com/thymikee))
- `flow` is now at v0.98 ([0e1dfd4](https://github.com/facebook/react-native/commit/0e1dfd4) by [@nmote](https://github.com/nmote))
- `prettier` is now at v1.17.0 ([ff9f8f3](https://github.com/facebook/react-native/commit/ff9f8f3))
- `metro` packages are now at v0.54.1 ([7ff3874](https://github.com/facebook/react-native/commit/7ff3874), [343f0a1](https://github.com/facebook/react-native/commit/343f0a1) by [@motiz88](https://github.com/motiz88))
- Replace patched fetch polyfill with `whatwg-fetch@3.0` ([5447196](https://github.com/facebook/react-native/commit/5447196) by [@janicduplessis](https://github.com/janicduplessis))

#### Android specific

- Use class canonical name for `PARTIAL_WAKE_LOCK` tag ([88dbb45](https://github.com/facebook/react-native/commit/88dbb45) by [@timwangdev](https://github.com/timwangdev))

#### iOS specific

- _BREAKING_: Split React.podspec into separate podspecs for each Xcode project; your libraries will need to update for this change as well to avoid CocoaPods build errors ([2321b3f](https://github.com/facebook/react-native/commit/2321b3f) by [@fson](https://github.com/fson))
- Improve handling of native module exceptions; they are now propagated to crash reporting tools with the context and callstack ([629708b](https://github.com/facebook/react-native/commit/629708b) by [@pvinis](https://github.com/pvinis))
- Switch **Slider** `onSlidingComplete` event to a non-bubbling event on iOS to match Android ([7927437](https://github.com/facebook/react-native/commit/7927437) by [@rickhanlonii](https://github.com/rickhanlonii))

### Deprecated

- **StatusBar** is no longer deprecated; thank you for the feedback ([a203ebe](https://github.com/facebook/react-native/commit/a203ebe) by [@cpojer](https://github.com/cpojer))

### Removed

- **NetInfo** has been removed; its replacement is now available via the [react-native-community/netinfo](https://github.com/react-native-community/react-native-netinfo) package ([5a30c2a](https://github.com/facebook/react-native/commit/5a30c2a) by [@cpojer](https://github.com/cpojer))
- **WebView** has been removed; its replacement is now available via the [react-native-community/webview](https://github.com/react-native-community/react-native-webview) package ([](https://github.com/facebook/react-native/commit/6ca438a), [1ca9a95](https://github.com/facebook/react-native/commit/1ca9a95), and [954f715](https://github.com/facebook/react-native/commit/954f715) by [@cpojer](https://github.com/cpojer) and [@thorbenprimke](https://github.com/thorbenprimke))
- **Geolocation** has been removed; its replacement is now available via the [react-native-community/geolocation](https://github.com/react-native-community/react-native-geolocation) package ([17dbf98](https://github.com/facebook/react-native/commit/17dbf98) and [9834c58](https://github.com/facebook/react-native/commit/9834c58) by [@cpojer](https://github.com/cpojer) and [@mmmulani](https://github.com/mmmulani))

### Fixed

- Fix `Animated.Value` value after animation if component was re-mounted ([b3f7d53](https://github.com/facebook/react-native/commit/b3f7d53) by [@michalchudziak](https://github.com/michalchudziak))
- Consistent reporting native module name on crash on native side ([d6c33f9](https://github.com/facebook/react-native/commit/d6c33f9) and [b79d7db](https://github.com/facebook/react-native/commit/b79d7db) by [@DimitryDushkin](https://github.com/DimitryDushkin))
- Handle null filenames in symbolicated stack trace gracefully in **ExceptionsManager** ([2e8d39b](https://github.com/facebook/react-native/commit/2e8d39b) by [@motiz88](https://github.com/motiz88))
- Fix HasteImpl platform name regex ([28e0de0](https://github.com/facebook/react-native/commit/28e0de0) by [@CaptainNic](https://github.com/CaptainNic))
- Fix a JS memory leak in Blob handling; this resolves multiple leaks around `fetch` ([c5c79e5](https://github.com/facebook/react-native/commit/c5c79e5) and [9ef5107](https://github.com/facebook/react-native/commit/9ef5107) by [@janicduplessis](https://github.com/janicduplessis))
- **SectionList**'s `scrollToLocation` now scrolls to the top of the sticky header as expected ([d376a44](https://github.com/facebook/react-native/commit/d376a44) by [@danilobuerger](https://github.com/danilobuerger))

#### Android specific

- Fix duplicate resource error in Android build ([962437f](https://github.com/facebook/react-native/commit/962437f) and [eb534bc](https://github.com/facebook/react-native/commit/eb534bc) by [@mikehardy](https://github.com/mikehardy) and [@Dbroqua](https://github.com/Dbroqua))
- Reorder operations of native view hierarchy ([5f027ec](https://github.com/facebook/react-native/commit/5f027ec) by [@lunaleaps](https://github.com/lunaleaps))
- Fix performance regression from new custom fonts implementation ([fd6386a](https://github.com/facebook/react-native/commit/fd6386a) by [@dulmandakh](https://github.com/dulmandakh))
- Fix internal test case around disabled state of buttons ([70e2ab2](https://github.com/facebook/react-native/commit/70e2ab2))
- Fix extra call of **PickerAndroid**'s `onValueChange` on initialization; now it is only called when `selectedValue` changes ([82148da](https://github.com/facebook/react-native/commit/82148da) by [@a-c-sreedhar-reddy](https://github.com/a-c-sreedhar-reddy))
- Fix **PickerAndroid** will reset selected value during items update ([310cc38](https://github.com/facebook/react-native/commit/310cc38) by [@Kudo](https://github.com/Kudo))
- Fix unexpected PARTIAL_WAKE_LOCK when no headless tasks registered. ([bdb1d43](https://github.com/facebook/react-native/commit/bdb1d43) by [@timwangdev](https://github.com/timwangdev))
- Fix calling **TextInput**'s `onKeyPress` method when the user types an emoji ([a5c57b4](https://github.com/facebook/react-native/commit/a5c57b4))
- Fix value of **TextInput**'s `onSelectionChange` start and end arguments by normalizing them ([2ad3bb2](https://github.com/facebook/react-native/commit/2ad3bb2) by [@uqmessias](https://github.com/uqmessias))
- In `Linking.getInitialURL` method, use the `InteractionManager` to wait for the current activity to finish initializing ([c802d0b](https://github.com/facebook/react-native/commit/c802d0b) by [@mu29](https://github.com/mu29))
- Disable delta bundles on the first app run ([e4aff42](https://github.com/facebook/react-native/commit/e4aff42) by [@wojteg1337](https://github.com/wojteg1337))
- In **DatePickerAndroid**, work around Android Nougat bug displaying the wrong the spinner mode ([bb060d6](https://github.com/facebook/react-native/commit/bb060d6) by [@luancurti](https://github.com/luancurti))
- Fix crash in Animated Interpolation when inputMin === inputMax ([7abfd23](https://github.com/facebook/react-native/commit/7abfd23) by [@olegbl](https://github.com/olegbl))
- Fix symbolication for **RedBox** and **YellowBox** when using delta bundling ([a05e9f8](https://github.com/facebook/react-native/commit/a05e9f8) by [@motiz88](https://github.com/motiz88))
- Fix **CameraRoll** crash on mime type guessing ([ebeb893](https://github.com/facebook/react-native/commit/ebeb893) by [@Sroka](https://github.com/Sroka))

#### iOS specific

- Call designated initializer for SurfaceHostingProxyRootView ([3c125e8](https://github.com/facebook/react-native/commit/3c125e8) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix **RedBox** JS symbolication when adding JS engine tag to the message ([920632c](https://github.com/facebook/react-native/commit/920632c) by [@motiz88](https://github.com/motiz88))
- Fix **TextInput**'s `onSelectionChange` behavior in single line text inputs ([fc8008e](https://github.com/facebook/react-native/commit/fc8008e) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix accesibility problem with **TextInput** Clear Button ([4e37d37](https://github.com/facebook/react-native/commit/4e37d37) by [@shergin](https://github.com/shergin))
- Fix `renderingMode` not applied to GIF **Image**s ([75380aa](https://github.com/facebook/react-native/commit/75380aa) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix **ScrollView** `centerContent` not work in some cases ([2cdf969](https://github.com/facebook/react-native/commit/2cdf969) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix crash on performance logger ([5d3d398](https://github.com/facebook/react-native/commit/5d3d398) by [@zhigang1992](https://github.com/zhigang1992))
- Do not run packager in Release mode ([4ea6204](https://github.com/facebook/react-native/commit/4ea6204) by [@lucasbento](https://github.com/lucasbento))
- Fix `code` and `reason` arguments being ignored when calling `WebSocket.close` ([0ac2171](https://github.com/facebook/react-native/commit/0ac2171) by [@jeanregisser](https://github.com/jeanregisser))
- Fix return value of `Linking.openURL()` ([4a5d0bd](https://github.com/facebook/react-native/commit/4a5d0bd) by [@thib92](https://github.com/thib92))
- When an accessibilityLabel can't be discerned, return `nil` instead of `@""` ([d4ff5ed](https://github.com/facebook/react-native/commit/d4ff5ed) by [@sammy-SC](https://github.com/sammy-SC))
- Fix Xcode build when the project's path contains whitespace ([f0770b6](https://github.com/facebook/react-native/commit/f0770b6))
- Move accessibility props to UIView+React ([9261035](https://github.com/facebook/react-native/commit/9261035) by [@janicduplessis](https://github.com/janicduplessis))

## [0.59.10]

This is likely the last patch release for version 59 of React Native for the foreseeable future: it contains an important Android side update for the JavaScript Core, to prevent a great number of crashes mostly related to Samsung devices - thanks to [@Kudo](https://github.com/Kudo) for his work on fixing this via [557989a](https://github.com/facebook/react-native/commit/557989a86f8730113393ed229927d607a478e524)!

Thanks everyone who participated in the [discussion](https://github.com/react-native-community/releases/issues/127).

## [0.59.9]

This is a patch fix release addressing a couple ScrollView regressions, and "future-proof" RN 59 from crashes caused by upgrading Gradle (now can support up to 5.4.1 & 3.4.0 for the plugin) and Xcode 11 Beta 1. You can upgrade to this version without upgrading your tooling.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/124) for cherry-picking commits. You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/127).

### Changed

- If `isInteraction` is not specified in the config, it would always default to `true` which would block interactions like VirtualizedList updates. This is generally not what you want with useNativeDriver since the animation won't be interrupted by JS. If something does end up interfering with an animation and causes frame drops, `isInteraction` can be set manually. ([ded7119](https://github.com/facebook/react-native/commit/ded7119) by [@sahrens](https://github.com/sahrens))

- Update detox to match master ([c6a5c09](https://github.com/facebook/react-native/commit/c6a5c09) by [@kelset](https://github.com/kelset))

#### Android specific

- Bump Gradle to 5.4.1 & Android Gradle plugin to 3.4.0 ([2282c15](https://github.com/facebook/react-native/commit/2282c15), [4652392](https://github.com/facebook/react-native/commit/4652392), [184108f](https://github.com/facebook/react-native/commit/184108f), [deb41eb](https://github.com/facebook/react-native/commit/deb41eb) by [@dulmandakh](https://github.com/dulmandakh))

### Fixed

- Fixes wrong time unit of scroll event throttle ([ebe2827](https://github.com/facebook/react-native/commit/ebe2827) by [@zhongwuzw](https://github.com/zhongwuzw))

#### Android specific

- Fix indexed RAM bundle ([2b0e11c](https://github.com/facebook/react-native/commit/2b0e11c) by [@dratwas](https://github.com/dratwas))

#### iOS specific

- Fix Xcode 11 Beta 1 builds ([52cda84](https://github.com/facebook/react-native/commit/52cda84) by [@ericlewis](https://github.com/ericlewis))

## [0.59.8]

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points (in particular, check the `KeyboardAvoidingView` change). Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/118) for cherry-picking commits.

### Fixed

- Fix regexp on `hasteImpl` ([bcd1e2](https://github.com/facebook/react-native/commit/bcd1e23) by [@CaptainNic](https://github.com/CaptainNic))
- Fix sparse array handling in `EventEmitter#listeners()` ([f68dc8](https://github.com/facebook/react-native/commit/f68dc8) by [@ide](https://github.com/ide))
- Fix **VirtualizedList** to call `_updateViewableItems` immediately ([08141e](https://github.com/facebook/react-native/commit/08141ef1559) by [@sahrens](https://github.com/sahrens))
- Fix prop overrides of **TouchableWithoutFeedback** ([0c4206](https://github.com/facebook/react-native/commit/0c420644d9e) by [@aleclarson](https://github.com/aleclarson))
- Fix resolve relative size rendering error in inspector ([4884ab](https://github.com/facebook/react-native/commit/4884ab6799b) by [@gandreadis](https://github.com/gandreadis))
- Fix **VirtualizedSectionList** by making sure to check array bounds ([54f91d](https://github.com/facebook/react-native/commit/54f91d3ca9b) by [@vonovak](https://github.com/vonovak))
- Update `_scrollAnimatedValue` offset of **ScrollView** ([e0d1b3](https://github.com/facebook/react-native/commit/e0d1b3ab84c) by [@miyabi](https://github.com/miyabi))
- Fix infinite `setState` in **VirtualizedList** ([c40a93](https://github.com/facebook/react-native/commit/c40a938ead3) by [@sahrens](https://github.com/sahrens))

#### iOS specific

- Fix incorrect opacity behaviour for **Text** component ([f71357](https://github.com/facebook/react-native/commit/f71357aa816) by [@shergin](https://github.com/shergin))
- Fix **Text** shadow displays when `textShadowOffset` is `{0,0}` ([17a81b](https://github.com/facebook/react-native/commit/17a81be40d0) by [@Woodpav](https://github.com/Woodpav))
- Add convert compatible of **NSString** for bridge message data ([c37e9c](https://github.com/facebook/react-native/commit/c37e9c89058) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix nullability warnings in **RCTExceptionsManager** ([2b7d79](https://github.com/facebook/react-native/commit/2b7d7999e13) by [@jtreanor](https://github.com/jtreanor))
- Fix app to reconnect with metro after the bundler is closed and reopened ([c28676](https://github.com/facebook/react-native/commit/c286769d28c) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix throttle below 16ms on **ScrollView** ([39776a](https://github.com/facebook/react-native/commit/39776a82f0c) by [@sahrens](https://github.com/sahrens))

#### Android specific

- Fix JS errors during bundle load were reported as `UnknownCppException` ([84e263](https://github.com/facebook/react-native/commit/84e26360042))
- Add logic to catch `MissingWebViewPackageException` ([379874](https://github.com/facebook/react-native/commit/379874dc499) by [@thorbenprimke](https://github.com/thorbenprimke))
- Revert "[improve RTL](https://github.com/facebook/react-native/commit/871290f)" ([f3801d](https://github.com/facebook/react-native/commit/f3801d90fad) by [@thorbenprimke](https://github.com/thorbenprimke))

### Added

- Add listener for non-value animated node ([4a82dc](https://github.com/facebook/react-native/commit/4a82dca3b17) by [@osdnk](https://github.com/osdnk))
- Set **ScrollView** throttle by default ([74d740](https://github.com/facebook/react-native/commit/74d740c97bc5e65c38e3090d6a87b2d6066b96f8) by [@sahrens](https://github.com/sahrens))

### Changed

- Make **KeyboardAvoidingView** with `behavior="height"` resize on keyboard close ([7140a7](https://github.com/facebook/react-native/commit/7140a7f7d15) by [@WaldoJeffers](https://github.com/WaldoJeffers))
- Update network inspector to have smarter scroll stickiness ([57dc37](https://github.com/facebook/react-native/commit/57dc37ec5b3) by [@AlanFoster](https://github.com/AlanFoster))

## [0.59.7]

This patch release was unpublished.

## [0.59.6]

This patch release was unpublished.

## [0.59.5]

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/113) for cherry-picking commits.

### Fixed

- Remove wrapper around **ListEmptyComponent** ([54af5b](https://github.com/facebook/react-native/commit/54af5b151efbfb82127374b6653b89fcc6eaa61b) by [@AntoineDoubovetzky](https://github.com/AntoineDoubovetzky))

#### Android specific

- Enforced thread safety on UIImplementation methods that mutate the shadowNodeRegistry ([f5a318](https://github.com/facebook/react-native/commit/f5a31801a03b61df3d7bc2fc86df7bad272082e2) by [@SudoPlz](https://github.com/sunnylqm))
- Fixed a `NoSuchKeyException` when parsing JS stack frames without line numbers ([d7bd6c](https://github.com/facebook/react-native/commit/d7bd6cce38d42dbced48fc8abed96472126e5d69) by [@Salakar](https://github.com/Salakar))
- Fixed `mostRecentEventCount` is not updated ([b8aac0](https://github.com/facebook/react-native/commit/b8aac029f15b812bdfc80b00347a4d4140119831) by [@jainkuniya](https://github.com/jainkuniya))

#### iOS specific

- Pass back correct dimensions for application window in Dimensions module ([72b4cc](https://github.com/facebook/react-native/commit/72b4cc091d8451b80855c47e248fb693c78dc4a9) by [@rdonnelly](https://github.com/rdonnelly))
- Fixed warning: "RCTImagePickerManager requires main queue setup" ([effb02](https://github.com/facebook/react-native/commit/effb028ad5010e7ce6dc01f7758de2fa507d719a) by [@scarlac](https://github.com/scarlac))

## [0.59.4]

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/100) for cherry-picking commits.

### Changed

- Make Jest transform @react-native-community packages by default ([17292c9](https://github.com/facebook/react-native/commit/17292c9) by [@thymikee](https://github.com/thymikee))

#### iOS specific

- Add `scrollToOverflowEnabled` prop to **ScrollView** ([e3ac329](https://github.com/facebook/react-native/commit/e3ac329) by [@mysport12](https://github.com/mysport12))

### Fixed

- Fix **Touchable** long-press ([05723ed](https://github.com/facebook/react-native/commit/05723ed) by [@Kida007](https://github.com/Kida007))

#### Android specific

- Fix a crash when setting `underlineColorAndroid` in **TextInput** ([d6bca97](https://github.com/facebook/react-native/commit/d6bca97) by [@sunnylqm](https://github.com/sunnylqm))

#### iOS specific

- Fix universal links not working in iOS 12 / Xcode 10 ([836a8e0](https://github.com/facebook/react-native/commit/836a8e0) by [@IljaDaderko](https://github.com/IljaDaderko))
- Fix triangle views ([0167cf2](https://github.com/facebook/react-native/commit/0167cf2) by [@zhongwuzw](https://github.com/zhongwuzw))

## [0.59.3]

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/100) for cherry-picking commits.

### Changed

#### Android specific

- Improve RTL support ([871290f](https://github.com/facebook/react-native/commit/871290f) by [@dulmandakh](https://github.com/dulmandakh))

### Fixed

- Fix **VirtualizedList**, **SectionList** and **FlatList** behavior on rendering list headers with inverted prop and zero items ([e94d344](https://github.com/facebook/react-native/commit/e94d344) by [@michalchudziak](https://github.com/michalchudziak))
- Fix **VirtualizedList** debug mode crash ([d7e7b3e](https://github.com/facebook/react-native/commit/d7e7b3e))
- Fix running Metro on Windows ([581dc3e](https://github.com/facebook/react-native/commit/581dc3e) and [775553b](https://github.com/facebook/react-native/commit/775553b) by [@aliazizi](https://github.com/aliazizi) and [@nazreinkaram](https://github.com/nazreinkaram))

#### Android specific

- Fix IllegalStateException when invalid URL or headers are passed ([e4f9ee9](https://github.com/facebook/react-native/commit/e4f9ee9) by [@dryganets](https://github.com/dryganets))
- Fix IllegalStateException when tapping next on Android Keyboard ([13cb5a9](https://github.com/facebook/react-native/commit/13cb5a9) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific

- Show Perf Monitor after reloading JS ([bdf809e](https://github.com/facebook/react-native/commit/bdf809e) by [@usrbowe](https://github.com/usrbowe))
- Fix **TextInput**'s `maxLength` when inserting characters at begin ([1a35bc5](https://github.com/facebook/react-native/commit/1a35bc5) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix runtime crash in Xcode 10.2 when using `RCT_EXTERN_MODULE` for swift classes ([df7ea67](https://github.com/facebook/react-native/commit/df7ea67))

## [0.59.2]

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/100) for cherry-picking commits.

### Fixed

#### Android specific

- Crash on pre-26 Android devices when setting **TextInput** content type ([7263a77](https://github.com/facebook/react-native/commit/7263a77) by [@hramos](https://github.com/hramos))
- Crash when scroll to index 0 in a **SectionList** ([699fad7](https://github.com/facebook/react-native/commit/699fad7) by [@danilobuerger](https://github.com/danilobuerger))
- **Switch**'s `trackColor` being reset when toggled ([4260907](https://github.com/facebook/react-native/commit/4260907) and [becc154](https://github.com/facebook/react-native/commit/becc154) by [@dulmandakh](https://github.com/dulmandakh) and [@ejanzer](https://github.com/ejanzer))

#### iOS specific

- **ScrollView** offset out of content size ([f6516d2](https://github.com/facebook/react-native/commit/f6516d2) by [@zhongwuzw](https://github.com/zhongwuzw))
- **RefreshControl** state's race condition ([6aca514](https://github.com/facebook/react-native/commit/6aca514b3a6e94a771708188c056743d84f0654c) by [@rostislav-simonik](https://github.com/rostislav-simonik))
- Start Metro packager from project root ([392b084](https://github.com/facebook/react-native/commit/392b084) by [@MatthieuLemoine](https://github.com/MatthieuLemoine))
- **TextInput**s that are single-line reverting to default text ([a38dc73](https://github.com/facebook/react-native/commit/a38dc73) by [@PeteTheHeat](https://github.com/PeteTheHeat))

### Changed

#### Android specific

- Add TLS 1.3 support to all Android versions using Conscrypt; to use this, you must add `implementation('org.conscrypt:conscrypt-android:2.0.0')` to `build.gradle` ([fab86ee](https://github.com/facebook/react-native/commit/fab86ee) by [@dulmandakh](https://github.com/dulmandakh))
- Turn off Metro JS Deltas by default for Android ([3f1d2b0](https://github.com/facebook/react-native/commit/3f1d2b0) by [@PeteTheHeat](https://github.com/PeteTheHeat))

## [0.59.1]

This is a small patch release that addresses two critical issues from the 0.59.0 release.

### Fixed

#### Android specific

- Template build gradle error on x86_64 ([4b996da](https://github.com/facebook/react-native/commit/4b996da) by [@grabbou](https://github.com/grabbou))

#### iOS specific

- Build error warning of **Text** module ([000119d](https://github.com/facebook/react-native/commit/000119d) by [@zhongwuzw](https://github.com/zhongwuzw))

## [0.59]

Welcome to release 0.59 of React Native! For highlights of this release, please view the dedicated [blog post](http://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059). Thanks to those who gave feedback during the [release candidate phase](https://github.com/react-native-community/react-native-releases/issues/79). If you're interested in helping evaluate our next release (0.60), subscribe to the dedicated issue [here](https://github.com/react-native-community/react-native-releases/issues/99).

### Added

- Add a Metro configuration to the template with inline require/import options; read more about it [in the blog post](http://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059) ([ae11993](https://github.com/facebook/react-native/commit/ae11993) by [@cpojer](https://github.com/cpojer))

#### Android specific

- **Text** and **TextInput** now has prop [maxFontSizeMultiplier](https://facebook.github.io/react-native/docs/text#maxfontsizemultiplier) ([4936d28](https://github.com/facebook/react-native/commit/4936d28) by [@rigdern](https://github.com/rigdern))
- **TextInput** now has prop [autoComplete](https://facebook.github.io/react-native/docs/textinput#autocomplete) prop ([179d490](https://github.com/facebook/react-native/commit/179d490))
- **CameraRoll**'s `getPhotos` now supports `assetType: "All"` to let users pick from video and photos simultaneously ([54534e7](https://github.com/facebook/react-native/commit/54534e7) by [@kesha-antonov](https://github.com/kesha-antonov))
- **Text** and **TextInput** now support `textAlign:justify` for android O+ (api level >=26) ([d2153fc](https://github.com/facebook/react-native/commit/d2153fc) by [sunnylqm](https://github.com/sunnylqm))

#### iOS specific

- **TextInput** now has prop `rejectResponderTermination` to enable TextInputs inside Swipeables to function properly ([11df0ea](https://github.com/facebook/react-native/commit/11df0ea) by [@cmcewen](https://github.com/cmcewen))
- **ActionSheetIOS** has a new prop `destructiveButtonIndexes` for an `Array<number>` of destructive indexes ([67e7f16](https://github.com/facebook/react-native/commit/67e7f16) by [@sdg9](https://github.com/sdg9))
- Add `isEventFromThisApp` to `KeyboardEvent` notifications to disambiguate keyboard events when apps are running side-by-side ([05f35c2](https://github.com/facebook/react-native/commit/05f35c2) by [@nossbigg](https://github.com/nossbigg))
- Allow changing the project path in `react-native-xcode.sh` using env var `PROJECT_ROOT` ([9ccde37](https://github.com/facebook/react-native/commit/9ccde37) by [@janicduplessis](https://github.com/janicduplessis))

### Changed

- `React` is now at `v16.8.3` ([ccefc70](https://github.com/facebook/react-native/commit/ccefc70) and ([2af13b4](https://github.com/facebook/react-native/commit/2af13b4) by [@cpojer](https://github.com/cpojer) and [@hramos](https://github.com/hramos))
- `Flow` dependency is now at `v0.92.0` ([5ee7386](https://github.com/facebook/react-native/commit/5ee7386) by [@pakoito](https://github.com/pakoito))
- `@react-native-community/cli` dependency is at `v1.2.1` ([a252aee](https://github.com/facebook/react-native/commit/a252aee) and [5e1504b](https://github.com/facebook/react-native/commit/5e1504b) by [@grabbou](https://github.com/grabbou))
- Enhance Flow types definitions for **ViewPropTypes** ([7ff9456](https://github.com/facebook/react-native/commit/7ff9456) by [@danibonilha](https://github.com/danibonilha))

#### Android specific

- Clarify error message to direct people to `react-native start` rather than `react-native bundle` ([46aaa02](https://github.com/facebook/react-native/commit/46aaa02) by [@sunnylqm](https://github.com/sunnylqm))
- **BREAKING** - removed `OkHttpClientProvider.replaceOkHttpClient` method; please use `OkHttpClientProvider.setOkHttpClientFactory` from 0.54+ ([7cbdd7b](https://github.com/facebook/react-native/commit/7cbdd7b) by [@cdlewis](https://github.com/cdlewis))
- **BREAKING** - remove `ViewHelper`, use `ViewCompat` instead; this may also require changing the `android:theme` to be from `Theme.AppCompat`; read more about it [in the blog post](http://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059) ([c493cfe](https://github.com/facebook/react-native/commit/c493cfe) by [@dulmandakh](https://github.com/dulmandakh))
- Add nullable annotations to `ReadableMap`, `WritableMap`, `ReadableArray`, `Writable`, `ReactPackage`, and native module interfaces; this may impact Kotlin usage ([b640b6f](https://github.com/facebook/react-native/commit/b640b6f), [c93cbdf](https://github.com/facebook/react-native/commit/c93cbdf), [7b33d6b](https://github.com/facebook/react-native/commit/7b33d6b), and [e6d8ac8](https://github.com/facebook/react-native/commit/e6d8ac8) by [@dulmandakh](https://github.com/dulmandakh))
- `Soloader` is now at `v0.6.0` ([07d1075](https://github.com/facebook/react-native/commit/07d1075) by [@dulmandakh](https://github.com/dulmandakh))
- Android Support Library is now at `v28.0.0` ([5bbed43](https://github.com/facebook/react-native/commit/5bbed43) by [@dulmandakh](https://github.com/dulmandakh))
- `targetSdkVersion` is now at `v28` ([818f6bb](https://github.com/facebook/react-native/commit/818f6bb) by [@dulmandakh](https://github.com/dulmandakh))
- Android Plugin is now at `v3.3.1` ([51a7ad5](https://github.com/facebook/react-native/commit/51a7ad5) by [@dulmandakh](https://github.com/dulmandakh))
- Enable Java 8 support ([38eb2a7](https://github.com/facebook/react-native/commit/38eb2a7) by [@dulmandakh](https://github.com/dulmandakh))
- Suppress misleading missing permission warnings ([d53dbb0](https://github.com/facebook/react-native/commit/d53dbb0) by [@dulmandakh](https://github.com/dulmandakh))
- Add back `buildToolsVersion` to build.gradle ([cf52ab5](https://github.com/facebook/react-native/commit/cf52ab5) by [@dulmandakh](https://github.com/dulmandakh))
- **TimePickerAndroid** has better Flow types definitions ([2ed1bb2](https://github.com/facebook/react-native/commit/2ed1bb2) by [@yushimatenjin](https://github.com/yushimatenjin))
- `ReactActivity`, `ReactSlider`, `ReactTextView`, and `ReactPicker` extends `AppCompatActivity`; updates to `TimePickerDialogModule` and `DatePickerDialogModule` as well ([dda2b82](https://github.com/facebook/react-native/commit/dda2b82), [3b9604f](https://github.com/facebook/react-native/commit/3b9604f), [52e5136](https://github.com/facebook/react-native/commit/52e5136), [833429d](https://github.com/facebook/react-native/commit/833429d), [adc1410](https://github.com/facebook/react-native/commit/adc1410), [c6c5a17](https://github.com/facebook/react-native/commit/c6c5a17), and [be361d0](https://github.com/facebook/react-native/commit/be361d0) by [@dulmandakh](https://github.com/dulmandakh))
- Fix lint error/warnings that cause older Android crashes ([d2fc19f](https://github.com/facebook/react-native/commit/d2fc19f) by [@dulmandakh](https://github.com/dulmandakh))
- The error message on getting Android drawable folder suffix now gives more information ([a159a33](https://github.com/facebook/react-native/commit/a159a33) by [@BrunoVillanova](https://github.com/BrunoVillanova))
- `SYSTEM_ALERT_WINDOW` permissions available only in debug builds ([56fc630](https://github.com/facebook/react-native/commit/56fc630) by [@dulmandakh](https://github.com/dulmandakh))
- Add talkback navigation support for links and header ([8e5eb63](https://github.com/facebook/react-native/commit/8e5eb63) by [@yangweigbh](https://github.com/yangweigbh))
- **FlatList** has `removeClippedSubviews` default to `true` on Android ([1a499f4](https://github.com/facebook/react-native/commit/1a499f4) by [@fred2028](https://github.com/fred2028))

#### iOS specific

- Moved iOS build cache directory from `~/.rncache` to `~/Library/Caches/com.facebook.ReactNativeBuild` ([1024dc2](https://github.com/facebook/react-native/commit/1024dc2) by [@sryze](https://github.com/sryze))
- Keyboard API Event flow types have been improved ([7ee13cc](https://github.com/facebook/react-native/commit/7ee13cc) by [@nossbigg](https://github.com/nossbigg))
- Expose **AsyncLocalStorage** get/set methods to native code ([7b8235a](https://github.com/facebook/react-native/commit/7b8235a) by [@ejmartin504](https://github.com/ejmartin504))
- Clear RCTBridge **launchOptions** when bridge is reloaded ([19d04a3](https://github.com/facebook/react-native/commit/19d04a312bf4221cd26beff6d0da6dd296a28cd0) by [@venik](https://github.com/venik))

### Deprecated

The following deprecations are part of our Lean Core initiative; read more about it [in the blog post](http://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059).

- Deprecated [MaskedViewIOS](https://facebook.github.io/react-native/docs/maskedviewios) as it has now been moved to [react-native-community/masked-view](https://github.com/react-native-community/react-native-masked-view) ([4ac65f5](https://github.com/facebook/react-native/commit/4ac65f5) by [@FonDorn](https://github.com/FonDorn))
- Deprecated [ViewPagerAndroid](https://facebook.github.io/react-native/docs/viewpagerandroid) as it has now been moved to [react-native-community/viewpager](https://github.com/react-native-community/react-native-viewpager) ([77300ca](https://github.com/facebook/react-native/commit/77300ca) by [@ferrannp](https://github.com/ferrannp))
- Deprecated [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage) as it has now been moved to [react-native-community/asyncstorage](https://github.com/react-native-community/react-native-async-storage) ([ffe3748](https://github.com/facebook/react-native/commit/ffe3748) by [@Krizzu](https://github.com/Krizzu))
- Deprecated [Slider](https://facebook.github.io/react-native/docs/slider) as it has now been moved to [react-native-community/slider](https://github.com/react-native-community/react-native-slider) ([bf888a7](https://github.com/facebook/react-native/commit/bf888a7) by [@michalchudziak](https://github.com/michalchudziak))
- Deprecated [NetInfo](https://facebook.github.io/react-native/docs/netinfo) as it has now been moved to [react-native-community/netinfo](https://github.com/react-native-community/react-native-netinfo) ([d9c0dfe](https://github.com/facebook/react-native/commit/d9c0dfe) by [@matt-oakes](https://github.com/matt-oakes))
- Deprecated [ImageStore](https://facebook.github.io/react-native/docs/imagestore) and directed users to `expo-file-system` and `react-native-fs` ([62599fa](https://github.com/facebook/react-native/commit/62599fa) by [@EvanBacon](https://github.com/EvanBacon))

#### iOS specific

- Replace deprecated `stringByReplacingPercentEscapesUsingEncoding:` with `stringByAddingPercentEncodingWithAllowedCharacters:` ([61ca119](https://github.com/facebook/react-native/commit/61ca119) by [@pvinis](https://github.com/pvinis))

### Removed

- `react-native-git-upgrade` is now officially dead; use `react-native upgrade` instead (which uses [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge) under the covers) ([a6bdacb](https://github.com/facebook/react-native/commit/a6bdacb) by [@cpojer](https://github.com/cpojer))

#### iOS specific

- Remove the previously deprecated **TabBarIOS** ([0269729](https://github.com/facebook/react-native/commit/0269729) by [@axe-fb](https://github.com/axe-fb))
- **AlertIOS** is now replaced with **Alert** ([e2bd7db](https://github.com/facebook/react-native/commit/e2bd7db) by [@wellmonge](https://github.com/wellmonge))

### Fixed

- **KeyboardAvoidingView** now shows the correct height after the keyboard is toggled ([745484c](https://github.com/facebook/react-native/commit/745484c) by [@shauns](https://github.com/shauns))
- Adds fixes for react-native-windows UWP ([dfcbf97](https://github.com/facebook/react-native/commit/dfcbf97) by [@rozele](https://github.com/rozele))
- The `Map` and `Set` polyfills no longer reject non-extensible object keys; also fix hash collision scenario ([90850ca](https://github.com/facebook/react-native/commit/90850ca) by [@benjamn](https://github.com/benjamn))
- Corrected StyleSheet's transformation perspective to match iOS's behavior, regardless of screen density ([4c10f93](https://github.com/facebook/react-native/commit/4c10f93) by [@syaau](https://github.com/syaau))
- Fix `yarn test` in new projects ([5218932](https://github.com/facebook/react-native/commit/5218932) by [@Esemesek](https://github.com/Esemesek))
- Fix issue with `getInspectorDataForViewTag` that caused red screen when toggling inspector ([46f3285](https://github.com/facebook/react-native/commit/46f3285) by [@TranLuongTuanAnh](https://github.com/TranLuongTuanAnh))
- Fix `displayName` for `Image`; this will make tests no longer mistake it as `Component` ([4989123](https://github.com/facebook/react-native/commit/4989123) by [@linnett](https://github.com/linnett))
- Fix regression of **VirtualizedList** jumpy header ([e4fd9ba](https://github.com/facebook/react-native/commit/e4fd9ba) by [@danilobuerger](https://github.com/danilobuerger))
- Set `wait_for_recheck=true` to work around crash in Flow ([c599625](https://github.com/facebook/react-native/commit/c599625) by [@gabelevi](https://github.com/gabelevi))
- Fix flow typing of **Text** ([10c8352](https://github.com/facebook/react-native/commit/10c8352) by [@sahrens](https://github.com/sahrens))
- Fix `jest` and `jest-junit` to be only development dependencies ([c7b57f1](https://github.com/facebook/react-native/commit/c7b57f1) by [@vovkasm](https://github.com/vovkasm))
- Fix layout issue with **SwipeableQuickActionButton** ([ad52f52](https://github.com/facebook/react-native/commit/ad52f52) by [@varungupta85](https://github.com/varungupta85))

#### Android specific

- Fix textTransform when used with other text styles on Android (#22670) ([3a33e75](https://github.com/facebook/react-native/commit/3a33e75) by [@janicduplessis](https://github.com/janicduplessis))
- Fix warnings related to updating to gradle 4.10.1 or higher ([5be50d4](https://github.com/facebook/react-native/commit/5be50d4) by [@misaku](https://github.com/misaku))
- Fix issue with use of Android API 28 by adding security config for metro access ([724d83a](https://github.com/facebook/react-native/commit/724d83a), [01d5a3b](https://github.com/facebook/react-native/commit/01d5a3b), [3b0b7ce](https://github.com/facebook/react-native/commit/3b0b7ce), and [84572c4](https://github.com/facebook/react-native/commit/84572c4) by [@Salakar](https://github.com/Salakar) and [@dulmandakh](https://github.com/dulmandakh))
- Fix Inverted Horizontal **ScrollView** ([32cb9ec](https://github.com/facebook/react-native/commit/32cb9ec) by [@dmainas](https://github.com/dmainas))
- Fix crash on **CheckBox** on older Android versions ([58437cd](https://github.com/facebook/react-native/commit/58437cd) by [@vonovak](https://github.com/vonovak))
- Fix undefined error description in **Image** `onError` callback ([7795a67](https://github.com/facebook/react-native/commit/7795a67) by [@Jyrno42](https://github.com/Jyrno42))
- Fix Android crash on animating with `useNativeDriver` ([e405e84](https://github.com/facebook/react-native/commit/e405e84) by [@scisci](https://github.com/scisci))
- Fix dev settings menu not appearing for certain codebases due to namespace conflicts ([9968d0c](https://github.com/facebook/react-native/commit/9968d0c) by [@khaled-cliqz](https://github.com/khaled-cliqz))
- Fix exception occurring while fading a **TextView** ([f83281e](https://github.com/facebook/react-native/commit/f83281e) by [@mdvacca](https://github.com/mdvacca))
- Fix **StatusBar** overwriting previously set `SystemUiVisibility` flags ([8afa037](https://github.com/facebook/react-native/commit/8afa037) by [@rogerkerse](https://github.com/rogerkerse))
- Prevent `fetch()` POST requests from appending `charset=utf-8` to `Content-Type` header ([4cad737](https://github.com/facebook/react-native/commit/4cad737) and [d7c4c37](https://github.com/facebook/react-native/commit/d7c4c37) by [@nhunzaker](https://github.com/nhunzaker))
- Fix issue with **Location** that led to exceptions in two cases ([2b7346f](https://github.com/facebook/react-native/commit/2b7346f) by [@mikelambert](https://github.com/mikelambert))

#### iOS specific

- Fix **TextInput** mistakenly capitalizing I's after emojiis ([f307ac7](https://github.com/facebook/react-native/commit/f307ac7) by [@dchersey](https://github.com/dchersey))
- Fix **TextView**'s `setAttrbutedText` for CJK languages on single-line text fields ([05ebf77](https://github.com/facebook/react-native/commit/05ebf77) by [@mandrigin](https://github.com/mandrigin))
- Fix RCTImageLoader multi thread crash ([5ed31ce](https://github.com/facebook/react-native/commit/5ed31ce))
- Fix removing keys of large values from **AsyncStorage** ([27b4d21](https://github.com/facebook/react-native/commit/27b4d21) by [@esprehn](https://github.com/esprehn))
- Fix overscroll behavior on virtualized lists; behavior is now consistent ([4d5f85e](https://github.com/facebook/react-native/commit/4d5f85e))
- Fix **Alert** to not block input focus and blur ([e4364fa](https://github.com/facebook/react-native/commit/e4364fa) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix broken JSIexecutor search path ([2aa2401](https://github.com/facebook/react-native/commit/2aa2401) by [@amccarri](https://github.com/amccarri))
- Fix potential linker issues when using Xcode project ([9f72e6a](https://github.com/facebook/react-native/commit/9f72e6a) by [@tyrone-sudeium](https://github.com/tyrone-sudeium))
- Fix crash when `scrollEnabled` used in singleline textinput ([9ff43ab](https://github.com/facebook/react-native/commit/9ff43ab) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix crash in gif image usage ([d0cd3ca](https://github.com/facebook/react-native/commit/d0cd3ca) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix **geolocation** to not constantly reset accuracy to default of 100 meters ([bbcb97a](https://github.com/facebook/react-native/commit/bbcb97a) by [@omnikron](https://github.com/omnikron))
- Fix iOS build issue related to missing `DoubleConversion` and `glog` to `cxxreact`, `jsi` and `jsiexecutor` subspecs in `React.podspec` file ([11c12d5](https://github.com/facebook/react-native/commit/11c12d5) by [@alexruperez](https://github.com/alexruperez))
- Fix "'folly/folly-config.h' file not found" build error when using React via CocoaPods ([415cc25](https://github.com/facebook/react-native/commit/415cc25) by [@Salakar](https://github.com/Salakar))
- Fix image cache to follow [MDN strategy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#Freshness) ([e98d5a2](https://github.com/facebook/react-native/commit/e98d5a2) and [fb8ba3f](https://github.com/facebook/react-native/commit/fb8ba3f) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix crash due to IllegalArgumentException when creating CookieManage ([fee5031](https://github.com/facebook/react-native/commit/fee5031) by [@mdvacca](https://github.com/mdvacca))
- Fix cursor placement after toggling `secureTextEntry` cursor spacing ([c1392c2](https://github.com/facebook/react-native/commit/c1392c2) by [@ericlewis](https://github.com/facebook/react-native/commits?author=ericlewis))

## [0.58.6]

This release is fairly small, as we approach stable status for [0.59](https://github.com/react-native-community/react-native-releases/issues/79).

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/95) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/97).

### Fixed

#### Android specific

- Fix Inverted Horizontal ScrollView on Android (#23233) ([2aa2420](https://github.com/facebook/react-native/commit/2aa2420) by [@dmainas](https://github.com/dmainas))

#### iOS specific

- Map TextInput textContentType strings to Objective-C constants (#22611) ([2d56e06](https://github.com/facebook/react-native/commit/2d56e06) by [@levibuzolic](https://github.com/levibuzolic))
- Don't reconnect inspector if connection refused (#22625) ([82c84c5](https://github.com/facebook/react-native/commit/82c84c5) by [@msand](https://github.com/msand))

## [0.58.5]

This release resolves a few bugs and includes a few improvements, listed below.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/86) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/95).

### Removed

- Remove fallback cache ([9d60c20](https://github.com/facebook/react-native/commit/9d60c20) by [@grabbou](https://github.com/grabbou))

### Fixed

- Fixes capitalized I's when emojiis are present after the text being edited. (#21951) ([a4f8820](https://github.com/facebook/react-native/commit/a4f8820) by [@dchersey](https://github.com/dchersey))
- Fix broken jsiexecutor search path. (#23274) ([519ad8c](https://github.com/facebook/react-native/commit/519ad8c) by [@amccarri](https://github.com/amccarri))
- Fix duplicate symbols linker error in xcodeproj (#23284) ([805e4fe](https://github.com/facebook/react-native/commit/805e4fe) by [@tyrone-sudeium](https://github.com/tyrone-sudeium))
- apply Network Security Config file (fixes #22375) (part 2 of #23105) (#23135) ([b5270e8](https://github.com/facebook/react-native/commit/b5270e8) by [@Salakar](https://github.com/Salakar))
- Fix crash for web socket in some race conditions (#22439) ([0fc2392](https://github.com/facebook/react-native/commit/0fc2392) by [@zhongwuzw](https://github.com/zhongwuzw))

#### iOS specific

- Don't attempt to load RCTDevLoadingView lazily ([0af31ce](https://github.com/facebook/react-native/commit/0af31ce) by [@fkgozali](https://github.com/fkgozali))

### Security

#### Android specific

- improve Android Network Security config (#23429) ([fbd31c5](https://github.com/facebook/react-native/commit/fbd31c5) by [@dulmandakh](https://github.com/dulmandakh))

## [0.58.4]

This release resolves a few bugs and includes a few improvements, listed below.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/86).

### Added

#### Android specific

- Add error description to Image onError callback ([2781ef0](https://github.com/facebook/react-native/commit/2781ef0) by [@Jyrno42](https://github.com/Jyrno42))

### Changed

#### Android specific

- bump soloader to `0.6.0` ([e1694ee](https://github.com/facebook/react-native/commit/e1694ee) by [@dulmandakh](https://github.com/dulmandakh))

### Removed

- Remove jest and jest-junit from runtime dependencies (#23276) ([6943b2e](https://github.com/facebook/react-native/commit/6943b2e) by [@vovkasm](https://github.com/vovkasm))

### Fixed

#### Android specific

- Fixes Android crash on animated style with string rotation ([c3bd341](https://github.com/facebook/react-native/commit/c3bd341) by [@scisci](https://github.com/scisci))

#### iOS specific

- fix incorrect type which makes animated gifs not loop forever on device (#22987) ([5e87547](https://github.com/facebook/react-native/commit/5e87547) by [@chrisnojima](https://github.com/chrisnojima))
- Fixes for running the simulator ([9a8c959](https://github.com/facebook/react-native/commit/9a8c959) by [@osunnarvik](https://github.com/osunnarvik)), ([98bcfe0](https://github.com/facebook/react-native/commit/98bcfe0) by [@cpojer](https://github.com/cpojer)) and ([8bddcb6](https://github.com/facebook/react-native/commit/8bddcb6) by [@cpojer](https://github.com/cpojer))

## [0.58.3]

This release resolves a regression in **StatusBar** using [these fixes](https://github.com/facebook/react-native/compare/v0.58.2...v0.58.3).

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/81).

## [0.58.2]

This release fixes an issue caused by a wrongly reverted merge commit, that caused a short timeframe of commits to not actually be in the original 0.58.0. Those commits have been added to the 0.58 changelog below, as many are intertwined with the original work.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/81).

## [0.58.1]

There were some regressions with developer tools that prevented `react-native run-ios` from working properly in 0.58.0; this patch fix addresses that.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate to the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/81).

## [0.58]

Welcome to first stable release of React Native of 2019!
There are a number of significant changes in this version, and we'd like to especially draw your attention to them:

- [Modernizing](https://github.com/facebook/react-native/issues/21581) and [strengthening flow types](https://github.com/facebook/react-native/issues/22100) for core components
- Breaking changes to `ScrollView`, `CameraRollView`, and `SwipeableRow` that make it no longer bound to the component instance in certain methods
- Support for mutual TLS in WebKit
- Asset serving from directories besides `/assets`
- Numerous crash fixes and resolutions for unexpected behavior

Aside from those:

- if you are an iOS developer, you'll need to manually link `JavaScriptCore.framework` when upgrading; this can be done via Xcode, and following the steps shown [here](https://camo.githubusercontent.com/c09cd42747364b498efa7c82fcb73978ba076eae/687474703a2f2f646f63732e6f6e656d6f62696c6573646b2e616f6c2e636f6d2f696f732d61642d73646b2f616464696e672d6672616d65776f726b732e706e67).

- Android developers, please note that Android's target SDK 27 is supported. Work is still underway to land target SDK 28 support, and it will come soon.

Thanks to those who gave feedback during the [release candidate phase](https://github.com/react-native-community/react-native-releases/issues/41). If you're interested in helping evaluate our next release (0.59), subscribe to the dedicated issue [here](https://github.com/react-native-community/react-native-releases/issues/79).

### Added

- Add support for `publicPath` to enable serving static assets from different locations ([0b31496](https://github.com/facebook/react-native/commit/0b31496) by [@gdborton](https://github.com/gdborton))
- Add **TouchableBounce** now has a simple `bounce()` function that can be used to trigger a bounce without callbacks ([383ea99](https://github.com/facebook/react-native/commit/383ea99))

#### Android specific

- Bundler server host can now be set using Android System Properties, making for easier debugging across multiple apps or app installs `adb shell setprop metro.host` ([e02a154](https://github.com/facebook/react-native/commit/e02a154) by [@stepanhruda](https://github.com/stepanhruda))
- Native Modules can now reject a promise with an additional `WritableMap` arg for extra properties (`userInfo`). See the interface defined in [`Promise.java`](https://github.com/facebook/react-native/blob/60b3942389be508935589df41c2a7203922cc5a7/ReactAndroid/src/main/java/com/facebook/react/bridge/Promise.java) for available methods. This is accessible in JavaScript as `Error.userInfo`. This is to match iOS's existing `Error.userInfo` behaviour. See PR for examples. (#20940 by @Salakar)
- Native Modules now expose a `nativeStackAndroid` property to promises rejected with an Exception/Throwable - making native error stacks available inside Javascript: `Error.nativeStackAndroid`. This is to match iOS's existing `Error.nativeStackIOS` support. See PR for examples. (#20940 by @Salakar)

#### iOS specific

- Add `moduleForName: lazilyLoadIfNecessary` to **RCTBridge.h** to lookup modules by name and force load them, plus various improvements to LazyLoading ([d7a0c44](https://github.com/facebook/react-native/commit/d7a0c44), [6534718](https://github.com/facebook/react-native/commit/6534718), [d7865eb](https://github.com/facebook/react-native/commit/d7865eb), [04ea976](https://github.com/facebook/react-native/commit/04ea976), [1f394fa](https://github.com/facebook/react-native/commit/1f394fa), [80f92ad](https://github.com/facebook/react-native/commit/80f92ad), and [81b74ec](https://github.com/facebook/react-native/commit/81b74ec) by [@dshahidehpour](https://github.com/dshahidehpour), [@fkgozali](https://github.com/fkgozali), and [@mmmulani](https://github.com/mmmulani))
- Add ability for **WebView** to `setClientAuthenticationCredential` when `useWebKit={true}` for mutual TLS authentication ([8911353](https://github.com/facebook/react-native/commit/8911353) and [8911353](https://github.com/facebook/react-native/commit/8911353) by [@mjhu](https://github.com/mjhu))

### Changed

- Major improvements to Flow types for Core Components ([499c195](https://github.com/facebook/react-native/commit/499c195), [fbc5a4f](https://github.com/facebook/react-native/commit/fbc5a4f), [f9050e0](https://github.com/facebook/react-native/commit/f9050e0), [6476151](https://github.com/facebook/react-native/commit/6476151), [c03fc40](https://github.com/facebook/react-native/commit/c03fc40), [69213ee](https://github.com/facebook/react-native/commit/69213ee), [136dfc8](https://github.com/facebook/react-native/commit/136dfc8), [3c0211b](https://github.com/facebook/react-native/commit/3c0211b), [c127000](https://github.com/facebook/react-native/commit/c127000), [636e146](https://github.com/facebook/react-native/commit/636e146), [6fa997d](https://github.com/facebook/react-native/commit/6fa997d), [35a65cd](https://github.com/facebook/react-native/commit/35a65cd), [7927497](https://github.com/facebook/react-native/commit/7927497), [45c5183](https://github.com/facebook/react-native/commit/45c5183), [a97d104](https://github.com/facebook/react-native/commit/a97d104), [fb4825a](https://github.com/facebook/react-native/commit/fb4825a), [84c5416](https://github.com/facebook/react-native/commit/84c5416), [3649a50](https://github.com/facebook/react-native/commit/3649a50) by [@mottox2](https://github.com/mottox2), [@saitoxu](https://github.com/saitoxu), [@RSNara](https://github.com/RSNara), [@watanabeyu](https://github.com/watanabeyu), [@Tnarita0000](https://github.com/Tnarita0000), [@exced](https://github.com/exced), [@nd-02110114](https://github.com/nd-02110114), [@flowkraD](https://github.com/flowkraD))
- Many public components were converted to ES6 classes ([ScrollView](https://github.com/facebook/react-native/commit/221e2fe4095bc9ae15878725bdac4071d53e61f5) by [@thymikee](https://github.com/thymikee), [CameraRollView](https://github.com/facebook/react-native/pull/21619), [SwipeableRow](https://github.com/facebook/react-native/pull/21876/files) and [ProgressBarAndroid](https://github.com/facebook/react-native/pull/21874) by [@exceed](https://github.com/exceed), [ProgressViewIOS](https://github.com/facebook/react-native/pull/21588) by [@empyrical](https://github.com/empyrical), [SegmentedControlIOS](https://github.com/facebook/react-native/pull/21888/files), [ToolbarAndroid](https://github.com/facebook/react-native/pull/21893/files) by [@nd-02110114](https://github.com/nd-02110114)
- Flow dependency is now at `v0.85.0` ([adc8a33f](https://github.com/facebook/react-native/commit/adc8a33f) by [@samwgoldman](https://github.com/samwgoldman))
- metro dependency is now at `v0.49.1` ([f867db3](https://github.com/facebook/react-native/commit/f867db3), [8888295](https://github.com/facebook/react-native/commit/8888295), [31bb551](https://github.com/facebook/react-native/commit/31bb551), [de60e86](https://github.com/facebook/react-native/commit/de60e86), and [a525941](https://github.com/facebook/react-native/commit/a525941) by [@alexkirsz](https://github.com/alexkirsz) and [@rafeca](https://github.com/rafeca))
- jest dependency is now at `v24.0.0-alpha.6` ([1b4fd64](https://github.com/facebook/react-native/commit/1b4fd64), [66aba09](https://github.com/facebook/react-native/commit/66aba09), and [06c13b3](https://github.com/facebook/react-native/commit/06c13b3) by [@rafeca](https://github.com/rafeca) and [@rubennorte](https://github.com/rubennorte))
- fbjs-scripts dependency is now at `v1.0.0` (#21880) ([cdbf719](https://github.com/facebook/react-native/commit/cdbf719) by [@jmheik](https://github.com/jmheik))
- folly dependency is now at `v2018.10.22.00` ([a316dc6](https://github.com/facebook/react-native/commit/a316dc6), [19a7ecc](https://github.com/facebook/react-native/commit/19a7ecc), and [a70625a](https://github.com/facebook/react-native/commit/a70625a) by [@Kudo](https://github.com/Kudo) and [@radko93](https://github.com/radko93))
- React is set to `16.6.3` now via sync for revisions 4773fdf...6bf5e85 ([0cb59b5](https://github.com/facebook/react-native/commit/0cb59b5) and [e54d1e2](https://github.com/facebook/react-native/commit/e54d1e2) by [@yungsters](https://github.com/yungsters))
- Clearer error messages when hot reloading ([c787866](https://github.com/facebook/react-native/commit/c787866) by [@alexkirsz](https://github.com/alexkirsz))
- Allow CxxModules to implement functions which take two callbacks ([8826d8b](https://github.com/facebook/react-native/commit/8826d8b) by [@acoates-ms](https://github.com/acoates-ms))

#### Breaking Changes 💥

- Public methods of components converted to ES6 classes are no longer bound to their component instance. For `ScrollView`, the affected methods are `setNativeProps`, `getScrollResponder`, `getScrollableNode`, `getInnerViewNode`, `scrollTo`, `scrollToEnd`, `scrollWithoutAnimationTo`, and `flashScrollIndicators`. For `CameraRollView`, the affected methods are: `rendererChanged`. For `SwipeableRow`, the affected methods are: `close`. Therefore, it is no longer safe to pass these method by reference as callbacks to functions. Auto-binding methods to component instances was a behaviour of `createReactClass` that we decided to not preserve when switching over to ES6 classes. (you can refer to [this example](https://github.com/react-native-community/react-native-releases/issues/81#issuecomment-459252692))
- Native Modules in Android now require `@ReactModule` annotations to access `.getNativeModule` method on the `ReactContext`. This is how your updated Native Module should look like:

  ```diff
  // CustomModule.java

  // ...
  +  import com.facebook.react.module.annotations.ReactModule;

  +  @ReactModule(name="CustomBridge")
  public class CustomModule extends ReactContextBaseJavaModule {
    // ...

    @Override
    public String getName() {
        return "CustomBridge";
    }

    // ...
  }
  ```

#### Android specific

- Optimize `PlatformConstants.ServerHost`, `PlatformConstants.isTesting`, and `PlatformConstants.androidID` for performance ([2bf0d54](https://github.com/facebook/react-native/commit/2bf0d54), [339d9d3](https://github.com/facebook/react-native/commit/339d9d3), and [9f9390d](https://github.com/facebook/react-native/commit/9f9390d) by [@stepanhruda](https://github.com/stepanhruda), [@fkgozali](https://github.com/fkgozali), and [@axe-fb](https://github.com/axe-fb))

#### iOS specific

- Suppress yellow box about missing export for native modules ([5431607](https://github.com/facebook/react-native/commit/5431607) by [@fkgozali](https://github.com/fkgozali))

### Removed

- Remove `UIManager.measureViewsInRect()` ([d623679](https://github.com/facebook/react-native/commit/d623679) by [@shergin](https://github.com/shergin))

### Fixed

- Fix potential UI thread stalling scenario from Yoga JNI bindings ([2a8f6c3](https://github.com/facebook/react-native/commit/2a8f6c3) by [@davidaurelio](https://github.com/davidaurelio))
- Fix crash happening due to race condition around bridge cxx module registry ([6770b53](https://github.com/facebook/react-native/commit/6770b53), [1c31919](https://github.com/facebook/react-native/commit/1c31919), and [188cbb0](https://github.com/facebook/react-native/commit/188cbb0) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix **View** and **Text**'s displayName; show the specific name rather than generic "Component" ([7a914fc](https://github.com/facebook/react-native/commit/7a914fc) by [@rajivshah3](https://github.com/rajivshah3))
- Fix `react-native init --help` so that it doesn't return `undefined` ([58732a8](https://github.com/facebook/react-native/commit/58732a8) by [@ignacioola](https://github.com/ignacioola))
- Fix `react-native --sourceExts` ([ce86080](https://github.com/facebook/react-native/commit/ce86080) by [@elyalvarado](https://github.com/elyalvarado))
- Fix accidental showing of **Modal** when `visible` prop is undefined or null ([cc13a73](https://github.com/facebook/react-native/commit/cc13a73) by [@MateusAndrade](https://github.com/MateusAndrade))
- Fix crash during **VirtualizedList** pagination ([5803772](https://github.com/facebook/react-native/commit/5803772))
- Fix scenario where removing a module with remote debugging and Delta bundles may cause incorrect stack traces ([bea57d8](https://github.com/facebook/react-native/commit/bea57d8) by [@alexkirsz](https://github.com/alexkirsz))
- Fix regression in **StyleSheet** `setStyleAttributePreprocessor` ([0408533](https://github.com/facebook/react-native/commit/0408533) by [@brentvatne](https://github.com/brentvatne))
- Fix React Native AsyncMode and DevTools ([aacb06c](https://github.com/facebook/react-native/commit/aacb06c) by [@bvaughn](https://github.com/bvaughn))

#### Android specific

- Fix crash when removing root nodes ([b649fa9](https://github.com/facebook/react-native/commit/b649fa9) by [@ayc1](https://github.com/ayc1))
- Fix various **ReactInstanceManager** deadlocks and race conditions ([df7e8c6](https://github.com/facebook/react-native/commit/df7e8c6), [309f85a](https://github.com/facebook/react-native/commit/309f85a), and [be282b5](https://github.com/facebook/react-native/commit/be282b5) by [@ayc1](https://github.com/ayc1))
- Fix IllegalArgumentException when dismissing ReactModalHostView and DialogManager ([e57ad4e](https://github.com/facebook/react-native/commit/e57ad4e) and [38e01a2](https://github.com/facebook/react-native/commit/38e01a2) by [@mdvacca](https://github.com/mdvacca))
- Fix incorrect merged asset path with flavor for Android Gradle Plugin 3.2 ([e90319e](https://github.com/facebook/react-native/commit/e90319e) by [@yatatsu](https://github.com/yatatsu))
- Fix HTTP connection ontimeout callback ([a508134](https://github.com/facebook/react-native/commit/a508134))
- Fix websocket properly closing when remote server initiates close ([2e465bc](https://github.com/facebook/react-native/commit/2e465bc) by [@syaau](https://github.com/syaau))
- Fix compatibility issue for Android 16 device ([5939d07](https://github.com/facebook/react-native/commit/5939d07), [f22473e](https://github.com/facebook/react-native/commit/f22473e), and [d4d457b](https://github.com/facebook/react-native/commit/d4d457b) by [@gengjiawen](https://github.com/gengjiawen))
- Fix issue where `Image.resizeMode` isn't respected while source is loading, resulting in unexpected padding ([673ef39](https://github.com/facebook/react-native/commit/673ef39) by [@dulmandakh](https://github.com/dulmandakh))
- Fix Android 28's inverted **ScrollView** so that momentum is in the proper direction ([b971c5b](https://github.com/facebook/react-native/commit/b971c5b) by [@mandrigin](https://github.com/mandrigin))
- Fix HTTP connection timeout callback to be appropriately called ([a508134](https://github.com/facebook/react-native/commit/a508134))
- Fix compatibility issue with Android 16 device ([5939d07](https://github.com/facebook/react-native/commit/5939d07) by [@gengjiawen](https://github.com/gengjiawen))
- Fix crash when releasing RN views and removing root nodes([83405ff](https://github.com/facebook/react-native/commit/83405ff) and [b649fa9](https://github.com/facebook/react-native/commit/b649fa9) by [@ayc1](https://github.com/ayc1))
- Close websocket properly when remote server initiates close ([2e465bc](https://github.com/facebook/react-native/commit/2e465bc) by [@syaau](https://github.com/syaau))
- Workaround a wrong fling direction for inverted ScrollViews on Android P ([b971c5b](https://github.com/facebook/react-native/commit/b971c5b) by [@mandrigin](https://github.com/mandrigin))
- Fix **Image** to respect `resizeMode` for `defaultSource` images rather than showing padding while loading ([673ef39](https://github.com/facebook/react-native/commit/673ef39) by [@dulmandakh](https://github.com/dulmandakh))

#### iOS specific

- Fix case where content of inline views didn't get relaid out ([798517a](https://github.com/facebook/react-native/commit/798517a) by [@rigdern](https://github.com/rigdern))
- Fix issue with **ImagePickerIOS**'s inconsistent image when using the front-facing camera ([4aeea4d](https://github.com/facebook/react-native/commit/4aeea4d))
- Fix race condition and crash around shutdown of the JSC for iOS 11 and earlier ([bf2500e](https://github.com/facebook/react-native/commit/bf2500e) by [@mhorowitz](https://github.com/mhorowitz))
- Fix crash in **NetInfo**'s \_firstTimeReachability ([eebc8e2](https://github.com/facebook/react-native/commit/eebc8e2) by [@mmmulani](https://github.com/mmmulani))
- Fix case where inline view is visible even though it should have been truncated ([70826db](https://github.com/facebook/react-native/commit/70826db) by [@rigdern](https://github.com/rigdern))
- Fix crash with **ScrollView** related to content offsets ([f6566c7](https://github.com/facebook/react-native/commit/f6566c7) by [@shergin](https://github.com/shergin))
- Fix an issue where **CameraRoll** wasn't showing the front-facing camera consistently during capture and preview ([4aeea4d](https://github.com/facebook/react-native/commit/4aeea4d))
- Fix case where inline view is visible even though it should have been truncated ([70826db](https://github.com/facebook/react-native/commit/70826db) by [@rigdern](https://github.com/rigdern))

### Known issues

It is possible that you'll face an AAPT error regarding missing resources, [here](https://github.com/infinitered/ignite-andross/issues/244) is an example of this error, in this case, you should try to update the build tools versions to `buildToolsVersion = "28.0.2"` in your android/build.gradle file. If you maintain a react-native library which uses native code you should avoid using hardcoded versions of the build tools and use the packaged version numbers, here is an example you can [follow](https://github.com/react-native-community/react-native-linear-gradient/blob/master/android/build.gradle)

## [0.57.8]

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.3"`.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/71) for cherry-picking commits - you can participate to the decision process for the next release [here](https://github.com/react-native-community/react-native-releases/issues/75).

### Added

- Fix: Add displayName to ActivityIndicator (#22417) ([1d8744f](https://github.com/facebook/react-native/commit/1d8744f))

### Changed

- Switch: Improve Accessibility ([83d1e85](https://github.com/facebook/react-native/commit/83d1e85) by [@yungsters](https://github.com/yungsters))
- React sync for revisions 3ff2c7c...6bf5e85 ([8d1d47a](https://github.com/facebook/react-native/commit/8d1d47a) by [@yungsters](https://github.com/yungsters))

#### iOS specific

- Extend reason message for `RCTFatalException` (#22532) ([ba50151](https://github.com/facebook/react-native/commit/ba50151) by [@zackzachariah](https://github.com/zackzachariah))

### Removed

- Remove trailing slash from origin header if no port is specified (#22290) ([f7e3def](https://github.com/facebook/react-native/commit/f7e3def))

### Fixed

- Fix text alpha bug ([c43b741](https://github.com/facebook/react-native/commit/c43b741) by [@necolas](https://github.com/necolas))
- fix possible NPE in StatusBarModule ([1b169fc](https://github.com/facebook/react-native/commit/1b169fc) by [@mdvacca](https://github.com/mdvacca))
- Fixes animated gifs incorrectly looping/not stopping on last frame (#21999) ([95ef882](https://github.com/facebook/react-native/commit/95ef882) by [@staufman](https://github.com/staufman))
- Fix ListEmptyComponent is rendered upside down when using inverted flag. (#21496) ([30c2fb8](https://github.com/facebook/react-native/commit/30c2fb8) by [@hyochans](https://github.com/hyochans))
- Fix bug in comparison logic of object property (#22348) ([692fc2e](https://github.com/facebook/react-native/commit/692fc2e) by [@vreality64](https://github.com/vreality64))
- Fix dispatch of OnLayout event for first render ([3576819](https://github.com/facebook/react-native/commit/3576819) by [@mdvacca](https://github.com/mdvacca))
- KeyboardAvoidingView: Duration cannot be less then 10ms (#21858) ([472e978](https://github.com/facebook/react-native/commit/472e978))
- default hitSlop values to 0 (#22281) ([274f5b8](https://github.com/facebook/react-native/commit/274f5b8) by [@Taylor123](https://github.com/Taylor123))

#### iOS specific

- Fixed for supporting mediaPlaybackRequiresUserAction under iOS 10. (#22208) ([79011d7](https://github.com/facebook/react-native/commit/79011d7) by [@ifsnow](https://github.com/ifsnow))
- Use main.jsbundle in iOS template for production build (#22531) ([8ba5d4c](https://github.com/facebook/react-native/commit/8ba5d4c) by [@radeno](https://github.com/radeno))
- Use relative path for SCRIPTDIR (#22598) ([0301a2e](https://github.com/facebook/react-native/commit/0301a2e) by [@sunnylqm](https://github.com/sunnylqm))
- Fix UIScrollView crash ([b739c11](https://github.com/facebook/react-native/commit/b739c11) by [@shergin](https://github.com/shergin))
- Avoid using `-[UITextView setAttributedString:]` while user is typing (#19809) ([26775d5](https://github.com/facebook/react-native/commit/26775d5))

### Security

- Bump ws package to 1.1.5 due to vulnerability issues (#21769) ([d350f37](https://github.com/facebook/react-native/commit/d350f37) by [@prog1dev](https://github.com/prog1dev))

## [0.57.7]

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.1"`.

This patch release fixes version 0.57.6 about losing focus in `TextInput` because of [356ac5d](https://github.com/facebook/react-native/commit/356ac5d).

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/64) for cherry-picking commits.

## [0.57.6]

**INFO NOTE**: It's highly recommended that you skip this version and upgrade to 0.57.7.

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.1"`.
This patch release fixes a number of crashes, resolves build issues (both for iOS and Android). Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/64) for cherry-picking commits.

### Added

#### iOS specific

- Add iOS 12 textContentType options (#21079) ([d0c8cb1](https://github.com/facebook/react-native/commit/d0c8cb1) by [@ultramiraculous](https://github.com/ultramiraculous))

### Removed

- Remove useless additionnal blur call (#22156) ([356ac5d](https://github.com/facebook/react-native/commit/356ac5d))

### Fixed

- Improving Modal `visible` prop check to handle undefined and null (#22072) ([6c85356](https://github.com/facebook/react-native/commit/6c85356) by [@MateusAndrade](https://github.com/MateusAndrade))
- Fix crash in nativeInjectHMRUpdate (#22412) ([0b4fd62](https://github.com/facebook/react-native/commit/0b4fd62) by [@vovkasm](https://github.com/vovkasm))
- Fix IllegalArgumentException when dismissing ReactModalHostView ([e360b0b](https://github.com/facebook/react-native/commit/e360b0b) by [@mdvacca](https://github.com/mdvacca))
- Fix regression in StyleSheet.setStyleAttributePreprocessor (#22262) ([5ba44f7](https://github.com/facebook/react-native/commit/5ba44f7) by [@brentvatne](https://github.com/brentvatne))
- Fix React Native AsyncMode and DevTools ([f41383f](https://github.com/facebook/react-native/commit/f41383f) by [@bvaughn](https://github.com/bvaughn))
- CxxReact: Silence 'unused lambda capture' warnings in open-source (#22240) ([87c9d92](https://github.com/facebook/react-native/commit/87c9d92) by [@empyrical](https://github.com/empyrical))

#### Android specific

- Fixed HTTP connection timeout on Android (#22164) ([695784a](https://github.com/facebook/react-native/commit/695784a))
- resizeMode applies to Image.defaultSource (#22216) ([ec1bbfd](https://github.com/facebook/react-native/commit/ec1bbfd) by [@dulmandakh](https://github.com/dulmandakh))
- Android: Close websocket properly when remote server initiates close (#22248) ([6e7576b](https://github.com/facebook/react-native/commit/6e7576b) by [@syaau](https://github.com/syaau))
- Workaround a wrong fling direction for inverted ScrollViews on Android P (#21117) ([90cb45f](https://github.com/facebook/react-native/commit/90cb45f) by [@mandrigin](https://github.com/mandrigin))
- Fix crash when releasing RN views ([de3711e](https://github.com/facebook/react-native/commit/de3711e) by [@ayc1](https://github.com/ayc1))

#### iOS specific

- iOS: Support inline view truncation (#21456) ([ac5aaec](https://github.com/facebook/react-native/commit/ac5aaec) by [@rigdern](https://github.com/rigdern))
- NetInfo: try to solve crash with releasing \_firstTimeReachability ([35c1c27](https://github.com/facebook/react-native/commit/35c1c27) by [@mmmulani](https://github.com/mmmulani))
- Generate ip.txt before SKIP_BUNDLING check (#20554) ([26b5a6e](https://github.com/facebook/react-native/commit/26b5a6e) by [@keatongreve](https://github.com/keatongreve))
- Revert [Performance improvement for loading cached images on iOS ] ([7eeb305](https://github.com/facebook/react-native/commit/7eeb305) by [@kelset](https://github.com/kelset))
- Fix inability to remove 'Disabled' state from AccessibilityStates ([79b3311](https://github.com/facebook/react-native/commit/79b3311))

## [0.57.5]

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.1"`.

This patch release fixes a number of crashes, resolves build issues (both for iOS and Android), and brings React to v16.6.1. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/54) for cherry-picking commits.

### Changed

- React is now at v16.6.1 ([19c8164](https://github.com/facebook/react-native/commit/19c8164) and [76c99f2](https://github.com/facebook/react-native/commit/76c99f2) by [@yungsters](https://github.com/yungsters))

#### iOS specific

- Performance improvement for loading cached images ([ce09d6e](https://github.com/facebook/react-native/commit/ce09d6e) and [68dee8a](https://github.com/facebook/react-native/commit/68dee8a) by [@esamelson](https://github.com/esamelson) and others)

### Fixed

- Fix crash in **VirtualizedList** during pagination ([483d4e2](https://github.com/facebook/react-native/commit/483d4e2))
- Fix polyfilling of **regeneratorRuntime** to avoid setting it to undefined in some situations ([53616e6](https://github.com/facebook/react-native/commit/53616e6) by [@rafeca](https://github.com/rafeca))
- Fix **View**, **Text**, and **ActivityIndicator**'s `displayName` ([311ba9a](https://github.com/facebook/react-native/commit/311ba9a) and [0b32a65](https://github.com/facebook/react-native/commit/0b32a65) by [@rajivshah3](https://github.com/rajivshah3) and others)
- Fix crash that happens when a component throws an exception that contains a null message ([e8c9f3c](https://github.com/facebook/react-native/commit/e8c9f3c) by [@mdvacca](https://github.com/mdvacca))

#### Android specific

- Fix incorrect merged asset path with flavor for Android Gradle Plugin 3.2 ([09184a7](https://github.com/facebook/react-native/commit/09184a7) by [@yatatsu](https://github.com/yatatsu))
- Fix crash in **ReadableNativeArray.getType** when size of ReadableNativeArray's length > 512 ([8206122](https://github.com/facebook/react-native/commit/8206122) by [@dryganets](https://github.com/dryganets))

#### iOS specific

- Fix crash in rapid use of **NetInfo.getCurrentConnectivity** ([03bc46d](https://github.com/facebook/react-native/commit/03bc46d) by [@mmmulani](https://github.com/mmmulani))
- Fix Xcode 10 errors relating to third-party ([277c19c](https://github.com/facebook/react-native/commit/277c19c) by [@mmccartney](https://github.com/mmccartney))
- Fix build errors when path to `$NODE_BINARY` contains spaces ([ce25c54](https://github.com/facebook/react-native/commit/ce25c54) by [@sundbry](https://github.com/sundbry))
- Fix case where content of inline views didn't get relaid out ([1131463](https://github.com/facebook/react-native/commit/1131463) by [@rigdern](https://github.com/rigdern))
- Fix **InputAccessoryView**'s safe area when not attached to a **TextInput** ([4420e39](https://github.com/facebook/react-native/commit/4420e39) by [@janicduplessis](https://github.com/janicduplessis))

## [0.57.4]

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.0-alpha.8af6728"` (next version, 0.57.5, will update to `16.6.0`, and it will come soon). Also, please check the _Known issues_ section below, especially if you are using Xcode 10.

Thanks to everyone that contributed to the [discussion](https://github.com/react-native-community/react-native-releases/issues/48) for cherry-picking the commits that landed in this release, and the developers who submitted those commits!

### Added: new features

#### Android specific additions

- Android textTransform style support ([22cf5dc](https://github.com/facebook/react-native/commit/22cf5dc5660f19b16de3592ccae4c42cc16ace69) by Stephen Cook)

### Changes: existing functionality that is now different

- Add deprecation notice to SwipeableListView ([99471f8](https://github.com/facebook/react-native/commit/99471f87b944b26bbdaa0fb0881db91c1118b741) by [@TheSavior](https://github.com/TheSavior))

#### Android specific changes

- Consolidate native dependencies versions ([ba608a2](https://github.com/facebook/react-native/commit/ba608a2db786a8e983a6e30b31662fac254286c0) by [@dulmandakh](https://github.com/dulmandakh))
- bump okhttp3 to 3.11 ([10fc548](https://github.com/facebook/react-native/commit/10fc548809cc08db209ae6696b723341925137d1) by [@dulmandakh](https://github.com/dulmandakh))
- Android: Send `<Text>` metrics in onTextLayout events ([737f937](https://github.com/facebook/react-native/commit/737f93705ca8b5d3fdd207f870cf27adcf1e885b) by [@mmmulani](https://github.com/mmmulani))
- Use TextLegend example in Android as well ([335927d](https://github.com/facebook/react-native/commit/335927db44fe47e20db4503a1ab5fcf8d62144a8) by [@mmmulani](https://github.com/mmmulani))

#### iOS specific changes

- Bump xcode@1.0.0 ([b951499](https://github.com/facebook/react-native/commit/b9514995a26b4c3f6d555257740457dd4d6cfeae) by [@peat-psuwit](https://github.com/peat-psuwit))
- Text: send metrics after rendering (iOS) ([64a5253](https://github.com/facebook/react-native/commit/64a52532fe88b482ae4b998133d340e6e1141a0f) by [@mmmulani](https://github.com/mmmulani))
- Allow specifying iOS version for run-ios with simulator option ([0fab27c](https://github.com/facebook/react-native/commit/0fab27cbaca57b90119ab36104af4d0b3052ae30) by [@elyalvarado](https://github.com/elyalvarado))
- Relax the requirement that lazy module cannot be initialized on the main thread ([dbc864c](https://github.com/facebook/react-native/commit/dbc864c9cd95f9df268d85a642742e84e2360db4) by [@spredolac](https://github.com/spredolac))

### Fixed: bugs that have been resolved

- Fix crashes on invalid regex ([298f14d](https://github.com/facebook/react-native/commit/298f14da1210460b3e25c6002e8d1aa5f7b4e0ef) by [@RSNara](https://github.com/RSNara))
- Fix pull to refresh refresh component clipping on Android ([8a3a0ad](https://github.com/facebook/react-native/commit/8a3a0ad2d0f894a3d8c1e403a9336dab17c2dde8) by Andy Huang)
- ListView requestAnimationFrame leak ([70b5eb3](https://github.com/facebook/react-native/commit/70b5eb3aa27822fa11571c3d8d3628ecf03268ab) by [@exced](https://github.com/exced))

#### Android specific fixes

- reverted [Update bad method](https://github.com/facebook/react-native/commit/1592a8d)
- Fix accessibility role crash ([139559f](https://github.com/facebook/react-native/commit/139559fc0716a9ab7b78c9524df5eb295d882547) by Haseeb Saeed)
- Fix accessibilityRole value lookup ([1f96ff6](https://github.com/facebook/react-native/commit/1f96ff62cf786f93c91e6625bf2b819077902251) by [@ayc1](https://github.com/ayc1))
- Fix DynamicFromMap object pool synchronization ([b0d68c0](https://github.com/facebook/react-native/commit/b0d68c0bb971a44dfdf7722682933f1e96e1cd45) by [@haitaoli](https://github.com/haitaoli))
- Back out "[react-native][pr] Rounded corner rendering fixed on Android N." ([bb407fa](https://github.com/facebook/react-native/commit/bb407fa1ec0bd0367373961fdc0e840150840068) by Jonathan Lee)
- Fix onTextLayout metrics on Android when using alignText ([1c240ae](https://github.com/facebook/react-native/commit/1c240ae898e26534b8d9a09a334dec02e96faa05) by [@mmmulani](https://github.com/mmmulani))
- Cleaning up imports in ViewGroupManager ([082a869](https://github.com/facebook/react-native/commit/082a869daef3cf602a088d0418c185279052b8c3) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific fixes

- Fix issue when inserting text at 0 when maxLength is set ([36507e4](https://github.com/facebook/react-native/commit/36507e4a3c2fa58dcfdc9bd389b37536c66006d0) by [@ejanzer](https://github.com/ejanzer))

### Known issues

There are a few issues that don't have a finalized solution (as it happens for 0.x projects). In particular:

- when using Xcode 10 and `react-native init`, your build may fail due to third-party build steps ([#20774](https://github.com/facebook/react-native/issues/20774)). There is a [commit](https://github.com/facebook/react-native/commit/b44c5ae92eb08125d466cf151cb804dabfbbc690) we are planning to cherry pick in a future release that should help - in the meantime, you should be able to run these commands from the project folder to fix the issue (you should need to do it only once per project):

  ```bash
  cd node_modules/react-native
  scripts/ios-install-third-party.sh
  cd third-party/glog-0.3.5/
  ../../scripts/ios-configure-glog.sh
  ```

- React `16.6.0` works for the most part, aside from the Context API (check [this issue](https://github.com/facebook/react-native/issues/21975)) - and if you are eager to test the new React Hooks you will have to be patient, as they are not production ready and `16.7.alpha` is **not** yet [supported](https://github.com/facebook/react-native/issues/21967) by React Native.

## [0.57.3]

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.0-alpha.8af6728"`. Also, please check the _Known issues_ section below, especially if you are using Xcode 10.

Thanks to everyone that contributed to the [discussion](https://github.com/react-native-community/react-native-releases/issues/46) for cherry-picking the commits that landed in this release, and the developers who submitted those commits!

### Added: new features

- Expose enableBabelRuntime config param externally ([a3a69ca](https://github.com/facebook/react-native/commit/a3a69cae348b2bab0ec5ce68a56c6197cfa33ad6) by [@rafeca](https://github.com/rafeca))

#### Android specific additions

- Add test for InterpolatorType ([69a51da](https://github.com/facebook/react-native/commit/69a51da3a1fa0e4d9bfeb54da73f1cdb50dc11d4) by [@ejanzer](https://github.com/ejanzer))

### Changes: existing functionality that is now different

- React sync for revisions ade5e69...d836010 ([049e56e](https://github.com/facebook/react-native/commit/c9948d1d36eca633e62e4ea4ab530a865208d0e1) by [@yungsters](https://github.com/yungsters))
- React: Bump Canary Version ([a0b7854](https://github.com/facebook/react-native/commit/a0b7854c94af20dea5de493fb3252fbd783de9a9) by [@yungsters](https://github.com/yungsters))
- FBJS: Upgrade to ^1.0.0 ([2134102](https://github.com/facebook/react-native/commit/2134102027552d49de21460c7859c5a49e3160e8) by [@yungsters](https://github.com/yungsters))
- Bump metro@0.48.1 ([2784a03](https://github.com/facebook/react-native/commit/2784a03fc52b0b6b241ff8d6ec1fa371ab494e7f) by [@rafeca](https://github.com/rafeca))
- Update to Detox 9 ([47a1b04](https://github.com/facebook/react-native/commit/47a1b0461b92ca9146050f4770b6030b4de2ec32) by [@kelset](https://github.com/kelset))
- Add Deprecation Warning to ListView ([25a3cff](https://github.com/facebook/react-native/commit/25a3cff5a71b8f04a613f5987b90a56a82b960e8) by [@TheSavior](https://github.com/TheSavior))
- Deprecate legacyImplementation of FlatList ([131db26](https://github.com/facebook/react-native/commit/131db26cbd8c45dd08941e8a9677f7eb9165f080) by [@TheSavior](https://github.com/TheSavior))

#### Android specific changes

- bump Android NDK to r17c ([b7d0594](https://github.com/facebook/react-native/commit/b7d0594dfc6ad3b48e21dfa2ffe20c431669483d) by [@dulmandakh](https://github.com/dulmandakh))
- Resolve protocol http, https when not in lowercase ([09178f8](https://github.com/facebook/react-native/commit/09178f8bb905e3c305f84833bdfc8d4c12f66618) by [@hyunjongL](https://github.com/hyunjongL))
- Normalize scheme for URL on Android ([b1aed4d](https://github.com/facebook/react-native/commit/b1aed4d376e39fafd3d43f0fb156b30211c9b007) by [@radeno](https://github.com/radeno))

#### iOS specific changes

- Bump up the buffer size and show a warning if the trace might be truncated ([a4ef256](https://github.com/facebook/react-native/commit/a4ef25616775be3375e5f82e79d214bb95a4df60) by [@alexeylang](https://github.com/alexeylang))

### Fixed: bugs that have been resolved

- Fix deprecation warning message in Switch ([e7ea1f8](https://github.com/facebook/react-native/commit/e7ea1f840cc66bcc25113f0a8bbda1737529fc9f) by [@radko93](https://github.com/radko93))

#### Android specific fixes

- Fix default accessibility delegate ([677f1de](https://github.com/facebook/react-native/commit/677f1de70bfffda9207534004852426a8a3ae4fa) by [@ayc1](https://github.com/ayc1))
- Fix accessibility role/label ([049e56e](https://github.com/facebook/react-native/commit/049e56e272a1a481d4bdc401fc6ed3e85e56e28b) by [@ayc1](https://github.com/ayc1))
- When converting arguments JS->Java, handle integers correctly ([413e7c8](https://github.com/facebook/react-native/commit/413e7c83048b7723cf0668785d55507171ed72f9) by [@mhorowitz](https://github.com/mhorowitz))
- Fix CameraRoll.getPhotos() crash on Android if device has a problematic video asset ([2658048](https://github.com/facebook/react-native/commit/265804867cd6f0cd3b164c6ffe91bee08230dcaf) by [@naxel](https://github.com/naxel))
- Android ScrollView fix for snapToInterval not snapping to end ([1fa7150](https://github.com/facebook/react-native/commit/1fa7150ce984fae57898de0564f176eb02389098) by [@olegbl](https://github.com/olegbl))
- Fix for InterpolatorType crash ([300ba7a](https://github.com/facebook/react-native/commit/300ba7a87e254a2b044864736525530fa8d46576) by [@ejanzer](https://github.com/ejanzer))
- Update bad method ([1592a8d](https://github.com/facebook/react-native/commit/1592a8d42411d1f91c8ceb738c0533c1cee73f71) by [@grabbou](https://github.com/grabbou))

#### iOS specific fixes

- Dealloc first time RCTNetInfo reachability callback ([9ae5bd0](https://github.com/facebook/react-native/commit/9ae5bd0c92d797e3c2fb31b7ea2d358a462b10e6) by [@mmmulani](https://github.com/mmmulani))
- iOS: fix the baseline issue when displaying a mixture of different-language characters ([ce8dddb](https://github.com/facebook/react-native/commit/ce8dddb506c336eb40558f04c3b4ef73671d2b97) by [@BingBingL](https://github.com/BingBingL))
- Fix artifacting on RN-drawn borders with asymmetric radii ([dba2235](https://github.com/facebook/react-native/commit/dba2235d95e46514206bcfaefc7e965193536fe8) by [@jamesreggio](https://github.com/jamesreggio))
- check isAvailable key on simulator object ([9e6212a](https://github.com/facebook/react-native/commit/9e6212a8186c8f9585394b5f950861d146fec4ca) by [@antonychan](https://github.com/antonychan))
- ios-simulator: change default iphone version ([1d1a41e](https://github.com/facebook/react-native/commit/1d1a41e303c0af5acc1e05b2f5c7928809e6bf62) by Vitor Capretz)

### Known issues

There are a few issues that don't have a finalized solution. In particular, when using Xcode 10 and `react-native init`, your build may fail due to third-party build steps ([#20774](https://github.com/facebook/react-native/issues/20774)). There is an open pull request which we are testing and hope to land soon ([#21458](https://github.com/facebook/react-native/pull/21458)). In the meantime, you can find a workaround here: [https://github.com/facebook/react-native/issues/20774](https://github.com/facebook/react-native/issues/20774).

## [0.57.2]

Thanks to everyone that contributed to the [discussion](https://github.com/react-native-community/react-native-releases/issues/45) for cherry-picking the commits that landed in this release, and the developers who submitted those commits!

### Added: new features

#### Android specific additions

- Android subpixel text ([c17787e](https://github.com/facebook/react-native/commit/c17787e91a7642cdcccbb74ff28d7bfdb836707c) by [@kevinresol](https://github.com/kevinresol))

### Changes: existing functionality that is now different

- ReactScrollView should account for `overflow: scroll` ([e6677b0](https://github.com/facebook/react-native/commit/e6677b0ec84d262944899f73f2a8ddb987e258ac) by [@mcolotto](https://github.com/mcolotto))
- bump metro 0.47.0 ([4faa0e6](https://github.com/facebook/react-native/commit/4faa0e6cdab38c7d7d7b01ad6833c552dce0b0ce) by [@rafeca](https://github.com/rafeca))
- Use babel runtime instead of relying on global babelHelpers and regenerator ([60b05ca](https://github.com/facebook/react-native/commit/60b05cae9ededbff538a7fce6c59520399077264) by [@janicduplessis](https://github.com/janicduplessis))
- React: Upgrade to react-devtools@^3.4.0 ([a1cf657](https://github.com/facebook/react-native/commit/a1cf65791c2eeea3249c47c6541945a6eb8e1955) by [@yungsters](https://github.com/yungsters))
- Change new Date() to Date.now() to save on date allocations ([ddce06f](https://github.com/facebook/react-native/commit/ddce06ffd11e816716771991e1cac51796811870) by [@dulinriley](https://github.com/dulinriley))
- Make config object read-only ([279c090](https://github.com/facebook/react-native/commit/279c0905f09068bb9c0e1932104992ee4f342dd8) by [@rafeca](https://github.com/rafeca))
- Cleanup the transformer flow types ([920cf54](https://github.com/facebook/react-native/commit/920cf54c0cff4c7d7210ec0a87a4ff7c25099423) by [@rafeca](https://github.com/rafeca))
- bump metro 0.47.1 ([aecf6df](https://github.com/facebook/react-native/commit/aecf6dfaecb55b267544528b54fa49a8b7a816d0) by [@rafeca](https://github.com/rafeca))

#### Android specific changes

- Android ScrollView support for `overflow: visible` ([5906c26](https://github.com/facebook/react-native/commit/5906c26466f347ff74fc637ecb33ceeb908269e0) by [@olegbl](https://github.com/olegbl))
- Expose a getter for overflow setting in ReactViewGroup ([bc973d2](https://github.com/facebook/react-native/commit/bc973d20e01abaf89bd792c667909f2180df645e) by [@kmagiera](https://github.com/kmagiera))
- Add workaround for Android Gradle Plugin 3.2 change to asset dir ([a4fed6e](https://github.com/facebook/react-native/commit/a4fed6e203efd481175e61b7d2aa1c2b037a4279) by [@edilaic](https://github.com/edilaic))

### Fixed: bugs that have been resolved

- Fix HEAD request failing with `Invalid response for blob` ([9e377c3](https://github.com/facebook/react-native/commit/9e377c394779a23af755189737bdca7b89f7412f) by [@anthonyhumphreys](https://github.com/anthonyhumphreys))
- Check if child view != null before dropping ([8744e00](https://github.com/facebook/react-native/commit/8744e00ea99821f95f8de23d69c88ee858e90d83) by [@chrusart](https://github.com/chrusart))

#### Android specific fixes

- Fix event handlers for DPad arrows on Android TV ([9ac2877](https://github.com/facebook/react-native/commit/9ac2877478c8df7044065c2110e58fb5ddb5a393) by [@krzysztofciombor](https://github.com/krzysztofciombor))
- Rounded corner rendering fixed on Android N ([b460f0d](https://github.com/facebook/react-native/commit/b460f0d20184114e75e4f7f159c812c0af346a3a) by [@dryganets](https://github.com/dryganets))
- Android: fix cookies lost on Android 5.0 and above ([b01ac3b](https://github.com/facebook/react-native/commit/b01ac3bffea0180002439a15e3ecf435e34dd0fe) by chenwenyu)
- allow zero offset when shadow radius is nonzero ([b7ba225](https://github.com/facebook/react-native/commit/b7ba2255df109b9cb8999d0e1584bc2b95a4e07c) by Timothy Kukulski)
- Android ScrollView fix for pagingEnabled ([0869e54](https://github.com/facebook/react-native/commit/0869e546fe1448f6c56b4ae97e41e8a67278d7dd) by [@olegbl](https://github.com/olegbl))

### Removed: features that have been removed; these are breaking

- Remove global babelHelpers and regenerator ([5627616](https://github.com/facebook/react-native/commit/5627616e3f052bcb6a549120335fbdb2cacf8f03) by [@janicduplessis](https://github.com/janicduplessis))
- Remove overflow hidden killswitch ([f1fabe5](https://github.com/facebook/react-native/commit/f1fabe5752e14bb977ce62cada74c5ee9a266ba2) by [@ayc1](https://github.com/ayc1))
- Remove absolute path parameter from transformers ([e2b9b71](https://github.com/facebook/react-native/commit/e2b9b716522cb1500580817a0e5d43b634a411e7) by [@rafeca](https://github.com/rafeca))

## [0.57.1]

We are trying, for 0.57, to approach it as a version with a longer "support", while waiting for some features to land that will allow for [0.58 to be cut](https://github.com/react-native-community/react-native-releases/issues/41).

Thanks to everyone that contributed to the [discussion](https://github.com/react-native-community/react-native-releases/issues/34) for cherry-picking the commits that landed in this release, and the developers who submitted those commits!

### Added: new features

- Expose AllowFileAccess property in WebView ([8dc8071](https://github.com/facebook/react-native/commit/8dc8071795859aafc69ff5d1203a3ed2d483879c) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific additions

- Expose scrollEnabled as iOS prop for TextInput ([cd091e8](https://github.com/facebook/react-native/commit/cd091e8534e168517bdf953a3f55265f6a3d44b4) by Chun Chen)

### Changes: existing functionality that is now different

- Give RNPM the ability to look for plugins in `@Scoped` modules ([e8345cc](https://github.com/facebook/react-native/commit/e8345cc621f2f9e68f1b33905a7406226e03ac42) by [empyrical](https://github.com/empyrical))
- Upgrade babel-eslint to 9.0.0 ([87b5672](https://github.com/facebook/react-native/commit/87b5672819a4ee4ce8eff30f17ef4e85c44e86dd) by [@rafeca](https://github.com/rafeca))
- bump metro 0.45.6 ([7bac056](https://github.com/facebook/react-native/commit/7bac0565e82981d4a6e2b500d376ba9fa8aba721) by [@rafeca](https://github.com/rafeca))

#### iOS specific changes

- Making RCTIsIPhoneX() return true for the R and Max models ([e884d7f](https://github.com/facebook/react-native/commit/e884d7f9fcf6a05542cd6ab90519225e4d5e29b5) by [@shergin](https://github.com/shergin))
- Way to register RCT_MODULE in Plugin2.0 instead of +load ([5f85b25](https://github.com/facebook/react-native/commit/5f85b256ccd688b6ab030d7d8b1938ac6afaee38) by Jeff Thomas)
- Update RCTLinkingManager.h to explicitly state the 'nullability' of parameters ([bf84166](https://github.com/facebook/react-native/commit/bf8416657164c798b93371c5e96fe1fa09f14092) by Warren Knox)

### Fixed: bugs that have been resolved

- Pass the maxWorkers config param correctly to Metro ([202715c](https://github.com/facebook/react-native/commit/202715c95d13c6a03e43087231d14f8ebebaa6e3) by [@rafeca](https://github.com/rafeca))
- Fix ignored --projectRoot/watchFolders arguments (([fb109e9](https://github.com/facebook/react-native/commit/fb109e9120e4366e40d7468625fcd6b14a5fe1e9) by [@oblador](https://github.com/oblador))
- Debug only code were leaking into release builds on iOS. (([0a5eefb](https://github.com/facebook/react-native/commit/0a5eefbf298f37a0660f094cf4be7f59d06784ad) by [@dryganets](https://github.com/dryganets))

#### iOS specific fixes

- Fix RCTNetInfo first time connection status ([4ea3ac7](https://github.com/facebook/react-native/commit/4ea3ac73031b3d0da209ef25e052e60b458652a3) by [@karanjthakkar](https://github.com/karanjthakkar))

### Removed: features that have been removed; these are breaking

#### iOS specific removals

- Removing development team from Xcode project ([202bb14](https://github.com/facebook/react-native/commit/202bb144698b9fbdb9cfb3bc6f62fba5c9c80fce) by [@hramos](https://github.com/hramos))

## [0.57]

Welcome to the 0.57 release of React Native! This release addresses a number of issues and has some exciting improvements. We again skipped a monthly release, focused on quality by extending the release candidate phase, and let some upstream packages reach stable for inclusion.

This release includes [599 commits by 73 different contributors](https://github.com/facebook/react-native/compare/0.56-stable...0.57-stable)! In response to feedback, we've prepared a changelog that contains only user-impacting changes. Please share your input and let us know how we can make this even more useful, and as always [let us know](https://github.com/react-native-community/react-native-releases/issues/34) if you have any feedback on this process.

### Highlights

#### New features

- Accessibility APIs now support accessibility hints, inverted colors, and easier usage of defining the element's role and states; read more at [@ziqichen6's excellent blog post](https://facebook.github.io/react-native/blog/2018/08/13/react-native-accessibility-updates)
- On iOS, `WKWebView` can now be used within the `WebView` component; read more at [@rsnara's awesome blog post](https://facebook.github.io/react-native/blog/2018/08/27/wkwebview)
- Better support for out-of-tree platforms. For details, please refer to [the discussion](https://github.com/react-native-community/discussions-and-proposals/issues/21) that the community used to get this up and running (there will be a new page in the docs dedicated to it too) - huge props to @empyrical for working on this!

#### Tooling updates

- Android tooling has been updated to match newer configuration requirements (SDK 27, gradle 4.4, and support library 27); building with Android plugin 3.2 doesn't work due to the gradle scripts, so **please** stay on Android Studio 3.1 for now
- Support Babel 7 stable landed! Be sure to read [here](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/) about using TypeScript and check out the [Babel 7 migration guide](https://babeljs.io/docs/en/next/v7-migration) for help migrating.
- Metro has been upgraded (with Babel 7 and better transformer support), and in the next major release we plan on having two new features (ram bundles and inline requires) optional for you all to use - you can read how it will happen [here](https://github.com/react-native-community/discussions-and-proposals/blob/master/core-meetings/2018-09-metro-meeting.md); moreover, if you have a custom packager config, we recommend you read also the "updating to this version" section.
- Flow, React, and related packages have also been updated; this includes [working support](https://github.com/facebook/react-native/commit/cf5f3e97eb68c5bcf1d9f27261795d0221e27be4) for the [React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html).

#### The Slimmening is happening

As mentioned a few times in the past, the core team is reviewing the repository to trim it to the base React Native features in order to make the whole ecosystem more maintainable (by using a _divide-et-impera_ approach, the community will move faster and enable pull requests to be reviewed and merged quicker). This change requires extracting some components into their own separate repos and removing old, unused code ([details here](https://github.com/react-native-community/discussions-and-proposals/issues/6)).

0.57 is **not** directly affected by any changes, but we want you to know that:

- `WebView` will be moved to its own repo at [react-native-community/react-native-webview](https://github.com/react-native-community/react-native-webview). There is already a base implementation there. Help us out by giving that a try, and expect that `WebView` will be deprecated soon
- `NavigatorIOS` will be **fully** removed from the main codebase starting 0.58.0 (via [this commit](https://github.com/facebook/react-native/commit/0df92afc1caf96100013935d50bdde359b688658)); it is now deprecated

### Updating to this version

1. Upgrade the version of React Native in the `package.json` from `0.56.0` to `0.57.0`, and the React version to `16.5`
2. Change the babel-preset dependency from `"babel-preset-react-native": "^5",` to `"metro-react-native-babel-preset": "^0.45.0",`, then change the `.babelrc` configuration to:

   ```JSON
     {
       "presets": ["module:metro-react-native-babel-preset"]
     }
   ```

3. Ensure that you have all the babel dependencies to version `^7.0.0` (you may also need to add `"babel-core": "7.0.0-bridge.0"` as a yarn resolution to ensure retro-compatibility). The Babel team has released a tool, [babel-upgrade](https://github.com/babel/babel-upgrade), that should help you in this migration.
4. Upgrading android gradle version to 4.4
   1. In your project's `android/gradle/wrapper/gradle-wrapper.properties` file, change the `distributionUrl` to `https\://services.gradle.org/distributions/gradle-4.4-all.zip`
   2. In `android/build.gradle` file add `google()` right above `jcenter()` in both `buildscript` and `allprojects` repositories. Then change Android build tools to version 3.1.4 `classpath 'com.android.tools.build:gradle:3.1.4'`
   3. In `android/app/build.gradle` file update all your `compile` statements to be `implementation`, e.g. `implementation 'com.facebook.fresco:animated-gif:1.10.0'`
   4. Do note that when running your app from within Android Studio, you may encounter `Missing Byte Code` errors. This is due to [a known issue](https://issuetracker.google.com/issues/72811718) with version 3.1.x of the android tools plugin. You'll need to disable Instant Run to get past this error.
5. If you have a custom packager configuration via `rn-cli.config.js`, you probably need to update it to work with the updated Metro configuration structure (for full detail refer to Metro's [documentation](https://facebook.github.io/metro/docs/en/configuration)); here are some commonly encountered changes to `rn-cli.config.js`:

   ```diff
   -const blacklist = require('metro/src/blacklist')
   +const blacklist = require('metro-config/src/defaults/blacklist')

   // ...

   module.exports = {
   +  watchFolders: alternateRoots,
   +  resolver: {
   +    blacklistRE: blacklist
   +  },
   +  transformer: {
   +    babelTransformerPath: require.resolve('./scripts/transformer.js'),
   +  },
   -  getProjectRoots() {
   -    return [
   -      path.resolve(__dirname),
   -    ].concat(alternateRoots)
   -  },
   -  getBlacklistRE() {
   -    return blacklist;
   -  },
   -  transformModulePath: require.resolve('./scripts/transformer.js'),
   }
   ```

6. Run `yarn` to ensure that all the new dependencies have been installed

### Added: new features

- Add .nvmrc and ensure node version required is compatible with ESLint 5 ([30b9d81](https://github.com/facebook/react-native/commit/30b9d81) by [@slorber](https://github.com/slorber))
- Major improvements to accessibility features ([9f01e4c](https://github.com/facebook/react-native/commit/9f01e4c), [b5b704d](https://github.com/facebook/react-native/commit/b5b704d), [c36e8b3](https://github.com/facebook/react-native/commit/c36e8b3), [40f6998](https://github.com/facebook/react-native/commit/40f6998), [c1d0ccd](https://github.com/facebook/react-native/commit/c1d0ccd), [679bff2](https://github.com/facebook/react-native/commit/679bff2), [10b603f](https://github.com/facebook/react-native/commit/10b603f), [d9eeae9](https://github.com/facebook/react-native/commit/d9eeae9), [3cfa7ae](https://github.com/facebook/react-native/commit/3cfa7ae), [5acb721](https://github.com/facebook/react-native/commit/5acb721), [5741f77](https://github.com/facebook/react-native/commit/5741f77), [d0b86ec](https://github.com/facebook/react-native/commit/d0b86ec), [e739143](https://github.com/facebook/react-native/commit/e739143), [c27b495](https://github.com/facebook/react-native/commit/c27b495), [5aa040d](https://github.com/facebook/react-native/commit/5aa040d), [03036f7](https://github.com/facebook/react-native/commit/03036f7), [3bedc78](https://github.com/facebook/react-native/commit/3bedc78), [ca01290](https://github.com/facebook/react-native/commit/ca01290), [121e2e5](https://github.com/facebook/react-native/commit/121e2e5), [1bc5226](https://github.com/facebook/react-native/commit/1bc5226), [48b3d13](https://github.com/facebook/react-native/commit/48b3d13), [ef3d8b2](https://github.com/facebook/react-native/commit/ef3d8b2), [5f8b44f](https://github.com/facebook/react-native/commit/5f8b44f), [50e4001](https://github.com/facebook/react-native/commit/50e4001), and [f39d092](https://github.com/facebook/react-native/commit/f39d092) by [@ziqichen6](https://github.com/ziqichen6))
- Add `YogaNodeProperties` implementation based on `ByteBuffer` ([0c97e75](https://github.com/facebook/react-native/commit/0c97e75) and [23657cc](https://github.com/facebook/react-native/commit/23657cc) by [@davidaurelio](https://github.com/davidaurelio))
- Add `FlatList` and `SectionList` to Animated exports ([daa7c78](https://github.com/facebook/react-native/commit/daa7c78) by [@yunyu](https://github.com/yunyu))
- Adding new styling props to `FlatList`/`VirtualizedList` for `ListHeaderComponent` and `ListFooterComponent` ([a2675ce](https://github.com/facebook/react-native/commit/a2675ce))
- Added more info to Module Registry systraces ([c7fdd27](https://github.com/facebook/react-native/commit/c7fdd27) by [@axe-fb](https://github.com/axe-fb))
- Added support for out-of-tree platform plugins via a new `haste` field in `package.json`; read more in the [docs entry](https://facebook.github.io/react-native/docs/out-of-tree-platforms) ([6bcd51a](https://github.com/facebook/react-native/commit/6bcd51a) by [@empyrical](https://github.com/empyrical))
- Added `snapToOffsets` to `ScrollView` and made a number of fixes to `snapToInterval` as well ([ef7e99c](https://github.com/facebook/react-native/commit/ef7e99c) by [@olegbl](https://github.com/olegbl))

#### Android specific additions

- Allow registering custom packager command handlers ([b3ef1c3](https://github.com/facebook/react-native/commit/b3ef1c3) by [@fkgozali](https://github.com/fkgozali))
- Implement `AccessibilityInfo.setAccessibilityFocus` for Android ([be715ec](https://github.com/facebook/react-native/commit/be715ec) by [@draperunner](https://github.com/draperunner))
- Add Support for `overflow` style property ([b81c8b5](https://github.com/facebook/react-native/commit/b81c8b5) and [bbdc12e](https://github.com/facebook/react-native/commit/bbdc12e)by [@yungsters](https://github.com/yungsters))

#### iOS specific additions

- `WebView` can now use `WKWebView` internally if you pass `useWebKit={true}` ([e90d9ca](https://github.com/facebook/react-native/commit/e90d9ca), [9b3a6ec](https://github.com/facebook/react-native/commit/9b3a6ec), [f7f9d01](https://github.com/facebook/react-native/commit/f7f9d01), [94560ca](https://github.com/facebook/react-native/commit/94560ca), [06cce04](https://github.com/facebook/react-native/commit/06cce04), [1c3af59](https://github.com/facebook/react-native/commit/1c3af59), [5662598](https://github.com/facebook/react-native/commit/5662598), [1984f4b](https://github.com/facebook/react-native/commit/1984f4b), [1b73e76](https://github.com/facebook/react-native/commit/1b73e76), [d0b5a38](https://github.com/facebook/react-native/commit/d0b5a38), [0fa5bd8](https://github.com/facebook/react-native/commit/0fa5bd8), [527792a](https://github.com/facebook/react-native/commit/527792a), [ee971a7](https://github.com/facebook/react-native/commit/ee971a7), [d29c253](https://github.com/facebook/react-native/commit/d29c253), [0009d09](https://github.com/facebook/react-native/commit/0009d09), [078799f](https://github.com/facebook/react-native/commit/078799f), [f46dbc2](https://github.com/facebook/react-native/commit/f46dbc2), [262d286](https://github.com/facebook/react-native/commit/262d286), [959aacf](https://github.com/facebook/react-native/commit/959aacf), and [e0df3a1](https://github.com/facebook/react-native/commit/e0df3a1) by [@rsnara](https://github.com/rsnara))
- Add `accessibilityHint` for iOS ([253b29d](https://github.com/facebook/react-native/commit/253b29d) by [@draperunner](https://github.com/draperunner))

### Changes: existing functionality that is now different

- _[BREAKING]_ In the CLI, `unbundle` is now `ram-bundle` ([ebf5aea](https://github.com/facebook/react-native/commit/ebf5aea) by [@jeanlauliac](https://github.com/jeanlauliac))
- Bump minimum Node version to 8.3 (#20236) ([e64e13f](https://github.com/facebook/react-native/commit/e64e13f) by [@hramos](https://github.com/hramos))
- Updated React ([70913a4](https://github.com/facebook/react-native/commit/70913a4), [b7bb25f](https://github.com/facebook/react-native/commit/b7bb25f), and [0b30129](https://github.com/facebook/react-native/commit/0b30129) by [@acdlite](https://github.com/acdlite), [@hramos](https://github.com/hramos), and [@yungsters](https://github.com/yungsters))
- Upgrade Flow to v0.76.0 ([eac34e3](https://github.com/facebook/react-native/commit/eac34e3) by [@gabelevi](https://github.com/gabelevi))
- Upgrade jest to 23.4.1 ([51cf9eb](https://github.com/facebook/react-native/commit/51cf9eb) by [@rafeca](https://github.com/rafeca))
- Upgrade babel-eslint to v9.0.0-beta.2 with better support for Flow ([abf1188](https://github.com/facebook/react-native/commit/abf1188) by [@rubennorte](https://github.com/rubennorte))
- Upgrade ESLint to 5.1.0 ([0f2f0ca](https://github.com/facebook/react-native/commit/0f2f0ca) by [@rubennorte](https://github.com/rubennorte))
- Upgrade Babel to v7.0.0 ([b9d1c83](https://github.com/facebook/react-native/commit/b9d1c83), [724c749](https://github.com/facebook/react-native/commit/724c749) by Peter van der Zee, and [9f83fcc](https://github.com/facebook/react-native/commit/9f83fcc) by [@rubennorte](https://github.com/rubennorte) and [@rafeca](https://github.com/rafeca))
- Metro is now at v0.45.0 ([169d683](https://github.com/facebook/react-native/commit/169d683), [bda84a3](https://github.com/facebook/react-native/commit/bda84a3), [5288656](https://github.com/facebook/react-native/commit/5288656), [1bfa422](https://github.com/facebook/react-native/commit/1bfa422), [96939ad](https://github.com/facebook/react-native/commit/96939ad) by [@CompuIves](https://github.com/CompuIves) and [@rafeca](https://github.com/rafeca))
- Hide pre-bundled notification when not on dev mode ([edf7100](https://github.com/facebook/react-native/commit/edf7100) by [@yancouto](https://github.com/yancouto))
- Refined `StyleSheet.compose` Flow Type ([50a481d](https://github.com/facebook/react-native/commit/50a481d) by [@yungsters](https://github.com/yungsters))
- Catch JS bundle load failure and prevent calls to JS after that ([201ba8c](https://github.com/facebook/react-native/commit/201ba8c) by [@fkgozali](https://github.com/fkgozali))
- Use new Metro configuration in react-native cli ([a32620d](https://github.com/facebook/react-native/commit/a32620d) and [aaf797a](https://github.com/facebook/react-native/commit/aaf797a) by [@CompuIves](https://github.com/CompuIves))
- Whitelist `react-native-dom` in haste/cli config defaults ([c4bcca6](https://github.com/facebook/react-native/commit/c4bcca6) by [@vincentriemer](https://github.com/vincentriemer))
- In the CLI, don't override `metro.config.js` settings ([3afe711](https://github.com/facebook/react-native/commit/3afe711) by [@rozele](https://github.com/rozele))

#### Breaking Changes

- Public methods of Image (`blur`, `focus`, `measure`, `measureInWindow`, `measureLayout`, `setNativeProps`) are no longer bound to the image component instance. Therefore, it is unsafe to pass these methods by reference (i.e: as callbacks) to functions. So, things like `setTimeout(this._imgRef.focus, 1000)` will no longer work. Please instead do: `setTimout(() => this._imgRef.focus(), 1000)`.

#### Android specific changes

- `Image` source without a uri now returns null ([28c7ccf](https://github.com/facebook/react-native/commit/28c7ccf) by [@himabindugadupudi](https://github.com/himabindugadupudi))
- `targetSdkVersion` is 26 ([bfb68c0](https://github.com/facebook/react-native/commit/bfb68c0) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade NDK to r17b ([6117a6c](https://github.com/facebook/react-native/commit/6117a6c) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade NDK toolchain to 4.9 ([ccdd450](https://github.com/facebook/react-native/commit/ccdd450) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade Android Support Library to version 27.1.1 and set compileSdkVersion to 27; buildToolsVersion comes along for the ride, too ([d9868f7](https://github.com/facebook/react-native/commit/d9868f7) and [5992f8d](https://github.com/facebook/react-native/commit/5992f8d) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade Android gradle plugin to 3.1.4, Gradle wrapper to 4.4 ([6eac2d4](https://github.com/facebook/react-native/commit/6eac2d4) and [33d20da](https://github.com/facebook/react-native/commit/33d20da) by [@gengjiawen](https://github.com/gengjiawen) and [@dulmandakh](https://github.com/dulmandakh))
- Upgrade to soloader 0.5.1 ([b6f2aad](https://github.com/facebook/react-native/commit/b6f2aad) by [@gengjiawen](https://github.com/gengjiawen))
- Upgrade mockito to 2.19.1 ([3ea803a](https://github.com/facebook/react-native/commit/3ea803a) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade glog to 0.3.5 ([b5fca80](https://github.com/facebook/react-native/commit/b5fca80) by [@dulmandakh](https://github.com/dulmandakh))

### Fixed: bugs that have been resolved

- Fixed builds on Windows machines ([3ac86c3](https://github.com/facebook/react-native/commit/3ac86c3) by [@rafeca](https://github.com/rafeca))
- Fixed building tvOS ([1f1ddd0](https://github.com/facebook/react-native/commit/1f1ddd0))
- Fixed `TextInputState`'s `currentlyFocusedField()` ([b4b594c](https://github.com/facebook/react-native/commit/b4b594c) by [@janicduplessis](https://github.com/janicduplessis))
- `<VirtualizedList>` fix for jumpy content when `initialScrollIndex` specified ([e0c7363](https://github.com/facebook/react-native/commit/e0c7363) by [@rbrosboel](https://github.com/rbrosboel))
- Fix local-cli assetRegistryPath and middlewares ([f05943d](https://github.com/facebook/react-native/commit/f05943d) by [@janicduplessis](https://github.com/janicduplessis))
- Fix issue with when all are `flexGrow` and `flexShrink` set to 0 except for one ([90a408e](https://github.com/facebook/react-native/commit/90a408e) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Fix react-native CLI's debugger UI path and metro host/port arg usage ([5067540](https://github.com/facebook/react-native/commit/5067540) by [@Kureev](https://github.com/Kureev))
- Hotfix to include `react-native-windows` in hasteImpl accepted paths ([5494274](https://github.com/facebook/react-native/commit/5494274) by [@rubennorte](https://github.com/rubennorte))
- Fix some classes of incorrect Flow errors for `Animated` ([db2159d](https://github.com/facebook/react-native/commit/db2159d) by [@yunyu](https://github.com/yunyu))
- Fixed a typo in DockerTests.md ([c1831d5](https://github.com/facebook/react-native/commit/c1831d5) by [@kant](https://github.com/kant))
- Fix invalid use of destructuring in jest preprocessor ([9d5bd50](https://github.com/facebook/react-native/commit/9d5bd50) by [@umairda](https://github.com/umairda))
- Fixed a CLI crash when using old versions of node ([9a4c21f](https://github.com/facebook/react-native/commit/9a4c21f) by [@keksipurkki](https://github.com/keksipurkki))

#### Android specific fixes

- Fix issue with AsyncStorage not behaving properly on Android 7+ ([1b09bd7](https://github.com/facebook/react-native/commit/1b09bd7))
- Fixed extreme `<TextInput>` slowness ([5017b86](https://github.com/facebook/react-native/commit/5017b86) by [@gnprice](https://github.com/gnprice))
- Fixed `<TextInput>` placeholder not being completely visible ([8402232](https://github.com/facebook/react-native/commit/8402232) and [86f24cc](https://github.com/facebook/react-native/commit/86f24cc) by [@jainkuniya](https://github.com/jainkuniya))
- Fix Horizontal `<ScrollView>`'s scroll position during layout changes with RTL content ([de57327](https://github.com/facebook/react-native/commit/de57327))
- Fix Horizontal `<ScrollView>` overflow issue ([d5465a9](https://github.com/facebook/react-native/commit/d5465a9))
- Fixing crash on SDK 15 on ReactTextInputLocalData ([1bb2bea](https://github.com/facebook/react-native/commit/1bb2bea))
- Fix Drawing Rect for ReactScrollView ([6a16bec](https://github.com/facebook/react-native/commit/6a16bec) by [@yungsters](https://github.com/yungsters))
- Fixed NoSuchKeyException Thrown From ReadableNativeMap bysafely unwrapping ReadableMap by defaulting to 0 if key not present ([1a6666a](https://github.com/facebook/react-native/commit/1a6666a) by [@Bhavik-P](https://github.com/Bhavik-P))
- Fixed runAndroid to enable the use of a package on port <> 8081 for Windows ([3cd0737](https://github.com/facebook/react-native/commit/3cd0737) by [@ihenshaw](https://github.com/ihenshaw))
- Don't crash on upload retry when trying to fetch on a varying quality network ([7a246e4](https://github.com/facebook/react-native/commit/7a246e4) by [@dryganets](https://github.com/dryganets))

#### iOS specific fixes

- Fix `TextInput.clear()` and `TextInput.setNativeProps({text: ''})` to work ([057d3ef](https://github.com/facebook/react-native/commit/057d3ef) by [@magicien](https://github.com/magicien))
- Correct fishhook import in RCTReconnectingWebSocket ([75a0273](https://github.com/facebook/react-native/commit/75a0273))
- Change in RCTImagePickerManager to handle crashes if height/width is nil ([82af7c9](https://github.com/facebook/react-native/commit/82af7c9) by [@abhi06276](https://github.com/abhi06276))
- Fix controlled `<TextInput>` on iOS when inputting in Chinese/Japanese ([892212b](https://github.com/facebook/react-native/commit/892212b) by [@mmmulani](https://github.com/mmmulani))
- Fixed `<ScrollView>` bug encountered with brownfield apps ([fab5fff](https://github.com/facebook/react-native/commit/fab5fff) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fixed missing selection indicator lines on `<PickerIOS>` ([e592d6f](https://github.com/facebook/react-native/commit/e592d6f) by [@VSchlattinger](https://github.com/VSchlattinger))
- Fix crash in RCTImagePicker on iOS ([934c50f](https://github.com/facebook/react-native/commit/934c50f) by [@mmmulani](https://github.com/mmmulani))
- Fix `undefined_arch` error received when building in Xcode 10 beta ([e131fff](https://github.com/facebook/react-native/commit/e131fff) by [@futuun](https://github.com/futuun))
- Add support for connecting to the Packager when running the iOS app on device when using custom Debug configuration ([079bf3f](https://github.com/facebook/react-native/commit/079bf3f))
- Fixed RCTAnimation import for integrating with cocoapods ([7525f38](https://github.com/facebook/react-native/commit/7525f38) by [@LukeDurrant](https://github.com/LukeDurrant))

### Removed: features that have been removed; these are breaking

- _[BREAKING]_ Removed `ScrollView.propTypes`; use flow or typescript for verifying correct prop usage instead ([5b6ff01](https://github.com/facebook/react-native/commit/5b6ff01) by [@sahrens](https://github.com/sahrens))

#### Android specific removals

- `ReactInstancePackage` is now deprecated; use `@link ReactPackage` or `@link LazyReactPackage` ([b938cd5](https://github.com/facebook/react-native/commit/b938cd5) by [@axe-fb](https://github.com/axe-fb))

## [0.56]

Welcome to the June 2018 release of React Native!
Over 60 contributors made [821 commits](https://github.com/facebook/react-native/compare/0.55-stable...0.56-stable) since March - and we are extremely grateful to every single one of you.

As you'll see in a second, this new version has some important **breaking changes** that required a lot of extra efforts to bring to a stable 0.56. This was the main reason behind skipping April and May from the monthly release cycle, but looking forward we are planning on going back to do a rollout every month.

### Highlights

#### React Native now uses **Babel 7**

When upgrading to 0.56, make sure to bump your `babel-preset-react-native` `package.json` dependency to `5.0.2` or newer (but still as _fixed_ value).

React Native library authors will need to update their libraries to make use of the updated Babel preset as Babel 7 is **not** backwards compatible.

If you have issues upgrading to Babel 7, please double check the [related documentation](https://new.babeljs.io/docs/en/next/v7-migration.html#versioning-dependencies-blog-2017-12-27-nearing-the-70-releasehtml-peer-dependencies-integrations), in particular the sections related to _Package Renames_ and _Scoped Packages_.

The [`babel-bridge`](https://github.com/babel/babel-bridge) library may be used if you need to use libraries that have not yet upgraded to Babel 7. You may also enforce the Babel 7 dependency via tools like [yarn resolutions](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/). Overall, you need to ensure all the `@babel/*` deps are fixed at version `7.0.0-beta.47`.

#### **Node 8** is now the minimum required version

Trailing commas are now allowed.

#### **iOS 9** is now the minimum required version

Any device that can run iOS 8, can upgrade to iOS 9. Developers who support iOS 8 in their apps may continue doing so as this is a Xcode-level setting (`IPHONEOS_DEPLOYMENT_TARGET`).

#### **Xcode 9** is now the minimum required version

We recommend using Xcode 9.4 as that is what we use to run our tests.

#### **Android** projects are now compiled using the _Android 26 SDK_

The target API level is left unchanged in this release.

Starting August 2018, new apps submitted to the Play Store will need to target API 26 as a minimum. You can now opt your project in to use API 26 (or newer) as the target. Please let us know about any issues, as we'd like to finalize support for Android API 26 by the time `0.57.0` is released.

#### `WebView` will only load http(s) URLs by default

Geolocation is disabled by default.

#### Consistently Throw for `<Text><View /></Text>`

Removes a pitfall that people may run into when releasing an app for Android if the bulk of the testing has been performed on iOS only. Nesting a `<View>` within a `<Text>` component (e.g. `<Text><View /></Text>`) is unsupported on Android, but using this pattern on iOS has not thrown errors in the past. With this release, nesting a `<View>` inside a `<Text>` will now throw an error on iOS in order to reduce the parity gap between the platforms.

#### Flow improvements, migrating away from PropTypes

Added Flow types for several components.

We're migrating away from PropTypes and runtime checks and instead relying on **Flow**. You'll notice many improvements related to Flow in this release.

- Fix project settings warnings on newer Xcode versions, remove unnecessary console logging.
- Modernized `YellowBox`.
  Sort warnings by recency, group warnings by format string, present stack traces, show status of loading source maps, support inspecting each occurrence of a warning, and bug fixes.
- Prettier files!
- Lots of bug fixes.

#### State of React Native

Heads-up: the Facebook internal team is [currently working on a rewrite of some core architecture pieces](https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018). This is a **work in progress** and we do not expect it to be ready for use in open source quite yet, but we felt the need to let you know what those commits mentioning Fabric are about.

---

### Added: new features

- Update `babelHelpers` with Babel 7 support ([fbd1bea](https://github.com/facebook/react-native/commit/fbd1beaf666be9c09a380784f8c0cd34ba083a6b))
- `FlatList` is now Strict Mode compliant ([a90d0e3](https://github.com/facebook/react-native/commit/a90d0e3614c467c33cf85bcbe65be71903d5aecc))
- Enable `?.` optional chaining operator plugins ([aa6f394](https://github.com/facebook/react-native/commit/aa6f394c4236e5a4998c3be8ed61ec1bab950775))
- Support `flexWrap: 'wrap-reverse'` ([d69e550](https://github.com/facebook/react-native/commit/d69e55060fd76d91eccc45905d250a9fce4b2c49))
- Add prop type `accessibilityTraits` to `Text` ([654435d](https://github.com/facebook/react-native/commit/654435d1ed9e584e65fff601e1fa50591e042664))
- Add devDependencies support for templates ([c4ab03a](https://github.com/facebook/react-native/commit/c4ab03a18e75e6ed55444b5d86f3ceee435b9a78))
- Add support for springDamping in `SpringInterpolator` ([1dde989](https://github.com/facebook/react-native/commit/1dde989919d2c272ca7fcaa5c4b2d9ee02c490a0))

#### Android specific additions

- Add support for build.gradle with CRLF for use with `react-native link` ([843cfc3](https://github.com/facebook/react-native/commit/843cfc3b202433aad9a236b1b623da7c45e1ac15))
- add decimal pad to android ([5b7a817](https://github.com/facebook/react-native/commit/5b7a817723e626453eedc800e71a4babd256218f))
- Add a way to dismiss PopupMenu elements ([353c070](https://github.com/facebook/react-native/commit/353c070be9e9a5528d2098db4df3f0dc02d758a9))
- Implement `Image.defaultSource` ([b0fa322](https://github.com/facebook/react-native/commit/b0fa3228a77d89d6736da6fcae5dd32f74f3052c))
- Support Image resizeMode=repeat ([0459e4f](https://github.com/facebook/react-native/commit/0459e4ffaadb161598ce1a5b14c08d49a9257c9c))
- Yoga: Add back deprecated `getParent` methods for non-breaking API change ([c3c5c3c](https://github.com/facebook/react-native/commit/c3c5c3cbce24a31f73ae6339e377ee76ca6401ad))

#### iOS specific additions

- Run tests using Xcode 9.4 and iOS 11.4 ([c55bcd6](https://github.com/facebook/react-native/commit/c55bcd6ea729cdf57fc14a5478b7c2e3f6b2a94d))
- Add support for Homebrew-installed Node ([0964135](https://github.com/facebook/react-native/commit/0964135a178b459e06b44a49a4ecb0dd6c5bec9b))
- Add textTransform style support ([8621d4b](https://github.com/facebook/react-native/commit/8621d4b79731e13a0c6e397abd93c193c6219000))
- Add docs for Swift usage to `RCTBridgeModule.h` ([ca898f4](https://github.com/facebook/react-native/commit/ca898f4367083e0943603521a41c48dec403e6c9))

---

### Changes: existing functionality that is now different

- Upgrade React Native to Babel 7 ([f8d6b97](https://github.com/facebook/react-native/commit/f8d6b97140cffe8d18b2558f94570c8d1b410d5c))
- New projects created using `react-native init` will use Babel 7 ([e315ec9](https://github.com/facebook/react-native/commit/e315ec9891eb0bcb51afb0e797dbd49aa8f9ac71))
- Restrict `WebView` to only http(s) URLs: ([634e7e1](https://github.com/facebook/react-native/commit/634e7e11e3ad39e0b13bf20cc7722c0cfd3c3e28), [23f8f7a](https://github.com/facebook/react-native/commit/23f8f7aecb1f21f4f5e44fb9e4a7456ea97935c9))
- Node 8 is now the minimum required version ([c1e6f27](https://github.com/facebook/react-native/commit/c1e6f278237e84c8ed26d3d2eb45035f250e2d40))
- Upgrade React to v16.4.1, sync React Renderer to revision ae14317 ([72d22e8](https://github.com/facebook/react-native/commit/72d22e8828feece1500487b9c28bb1df21b090f5))
- Update new project template's Flow config to fix `Cannot resolve module X` isse due to removal of `@providesModule` ([843a433](https://github.com/facebook/react-native/commit/843a433e87b0ccaa64ab70d07e22bffbabad8045))
- Upgrade Flow to v0.75 ([3bed272](https://github.com/facebook/react-native/commit/3bed272a620ac806a6142327013265ea8138641a), [8aaf73b](https://github.com/facebook/react-native/commit/8aaf73b4b0bef0d224004b9f1b1c877d46493e71), [6264b69](https://github.com/facebook/react-native/commit/6264b6932a08e1cefd83c4536ff7839d91938730))
- Upgrade Flow definitions ([f8b4850](https://github.com/facebook/react-native/commit/f8b4850425f115c8a23dead7ec0716b61663aed6))
- Upgrade Prettier to v1.13.6 ([29fb2a8](https://github.com/facebook/react-native/commit/29fb2a8e90fa3811f9485d4b89d9dbcfffea93a6), [8aaf73b](https://github.com/facebook/react-native/commit/8aaf73b4b0bef0d224004b9f1b1c877d46493e71))
- Upgrade Jest to v23.2.0 ([536c937](https://github.com/facebook/react-native/commit/536c9372692712b12317e657fc3e4263ecc70164), [8aaf73b](https://github.com/facebook/react-native/commit/8aaf73b4b0bef0d224004b9f1b1c877d46493e71))
- Upgrade Metro to v0.38 ([d081f83](https://github.com/facebook/react-native/commit/d081f83a0487ffbc7d19f8edc7532611b359dfc6))
- Modernized `YellowBox` ([d0219a0](https://github.com/facebook/react-native/commit/d0219a0301e59e8b0ef75dbd786318d4b4619f4c))
- Disallow requiring from invariant/warning ([521fb6d](https://github.com/facebook/react-native/commit/521fb6d041167ec8a8d0e98ac606db1f27f0c5c8))
- Remove native prop type validation ([8dc3ba0](https://github.com/facebook/react-native/commit/8dc3ba0444c94d9bbb66295b5af885bff9b9cd34))
- Add `$FlowFixMe` to invalid prop accesses where Flow wasn't complaining before ([f19ee28](https://github.com/facebook/react-native/commit/f19ee28e7d896aaacf26c6f850230019bdef0d3d))
- Create Flow props for `Image` ([8bac869](https://github.com/facebook/react-native/commit/8bac869f5d1f2ef42e707d0ec817afc6ac98b3b2))
- Flow type for `SegmentedControlIOS` ([113f009](https://github.com/facebook/react-native/commit/113f009698dbd8f1b4c1048d77ff1eb373021083))
- Flow type for `ProgressViewIOS` ([c87701b](https://github.com/facebook/react-native/commit/c87701ba05a8524756e87c089eb92c8f3c81823e))
- Flow type for `PickerIOS` ([1c66cdc](https://github.com/facebook/react-native/commit/1c66cdc7e8ce8190dfbef76629601497446b2b0a))
- Flow type for `Switch` ([06052a2](https://github.com/facebook/react-native/commit/06052a2330fc9c1dd0d56c6bbe5a17703f80c6b9))
- Flow type for `Slider` ([cbe045a](https://github.com/facebook/react-native/commit/cbe045a95f1ca53d99ae521742a93299a53d6136))
- Flow type for `RefreshControl` ([891dfc3](https://github.com/facebook/react-native/commit/891dfc3da4b5825097aedf73ff04e8982c00aeff))
- Flow type for `ListView` ([4b1ecb6](https://github.com/facebook/react-native/commit/4b1ecb62045fbb78764d1f51030f2253be705c5c))
- Flow type for `TextInput` ([c8bcda8](https://github.com/facebook/react-native/commit/c8bcda8150278fde07331ca6958976b2b3395688))
- Flow type for `TouchableBounce` ([8454a36](https://github.com/facebook/react-native/commit/8454a36b0bc54cb1e267bc264657cc693607da71))
- Flow type for `TouchableOpacity` ([44743c0](https://github.com/facebook/react-native/commit/44743c07ad672e39668f92a801578906ec92996a))
- Flow type for `TouchableHighlight` ([f0c18dc](https://github.com/facebook/react-native/commit/f0c18dc820537892dcc33d5aebbf4f52cf299b95))
- Flow type for `TouchableWithoutFeedback` ([0b79d1f](https://github.com/facebook/react-native/commit/0b79d1faa21eb3c29aeeba08ee0fb2ed62e6cc54))
- Flow type for `ScrollView` ([b127662](https://github.com/facebook/react-native/commit/b1276622791d5dbe4199bb075f473908c3e62b31))
- Flow type for `DatePickerIOS` ([97e572e](https://github.com/facebook/react-native/commit/97e572ea6d7b1fd829ca20f5d5c8ff970d88e68b))
- Flow type for `KeyboardAvoidingView` ([188b118](https://github.com/facebook/react-native/commit/188b118b6075be1614c553596b85d430767f2dbc))
- Flow type for `ActivityIndicator` ([0b71d1d](https://github.com/facebook/react-native/commit/0b71d1ddb03c036ed118574c105b0af505da19fc))
- Remove `$FlowFixMe` in `TouchableBounce` ([ffda017](https://github.com/facebook/react-native/commit/ffda0178509ed92396f15db37a41d3d668ade4e6))
- Remove `$FlowFixMe` in `ScrollView` ([af6e2eb](https://github.com/facebook/react-native/commit/af6e2eb02d3651f869b5436e68e61ef3ab3405a0))
- Remove `$FlowFixMe` in `ListView` ([af6e2eb](https://github.com/facebook/react-native/commit/af6e2eb02d3651f869b5436e68e61ef3ab3405a0))
- Remove `$FlowFixMe` in `Text` ([6042592](https://github.com/facebook/react-native/commit/6042592cf46787f089e76b661376705380607207))
- Remove `$FlowFixMe` in `RTLExample` ([206ef54](https://github.com/facebook/react-native/commit/206ef54aa415e3e2bb0d48111104dfc372b97e0f))
- Remove `$FlowFixMe` in `AppContainer` ([a956551](https://github.com/facebook/react-native/commit/a956551af73cf785ee4345e92e71fd5b17c5644e))
- Remove `$FlowFixMe` in `Slider` ([1615f9d](https://github.com/facebook/react-native/commit/1615f9d16149c7082ce0e1485aa04a6f2108f7ba))
- `StyleSheet`: Support animated values for border dimensions ([3e3b10f](https://github.com/facebook/react-native/commit/3e3b10f4044ada7b523d363afb614720468c217f))
- Update `react-devtools-core` and `plist` to include security fixes reported by `npm audit` ([3a1d949](https://github.com/facebook/react-native/commit/3a1d949906acb0c3b44d125d54d0c99305bbbb56))
- Update `Switch` to ES6 Class ([970caa4](https://github.com/facebook/react-native/commit/970caa4552d4ba87c1a954391535ff42b00832e7))
- Update `Slider` to ES6 Class ([5259450](https://github.com/facebook/react-native/commit/5259450c143f71c65e157d6b7d3f0e1655eb7aa1))
- Update `ActivityIndicator` to ES6 Class ([edd7acb](https://github.com/facebook/react-native/commit/edd7acbb1e6fe185600a19cc1cbb38feb16c85ad))
- Update `RefreshControl` to ES6 Class ([a35a238](https://github.com/facebook/react-native/commit/a35a23831789030e17f766f72d307ae315be107d))
- Update `KeyboardAvoidingView` to ES6 Class ([c017dcb](https://github.com/facebook/react-native/commit/c017dcb0f2903b49b2f21cc150226aeb7f5026ee))
- Update `DatePickerIOS` to ES6 Class ([f8c8231](https://github.com/facebook/react-native/commit/f8c8231706492b588331354d45b833aa21434e13))
- Update `Text` to ES6 Class ([ab92c00](https://github.com/facebook/react-native/commit/ab92c00245c0ce717819ddb0ab8b9204d4c13c34))
- Replace `context.isInAParentText` w/ `React.createContext` ([e1339bc](https://github.com/facebook/react-native/commit/e1339bc18303ca5394cd0c9dc97cededb2261581))
- Cleanup `Text` implementation ([06c05e7](https://github.com/facebook/react-native/commit/06c05e744d8af9582bde348210f254d76dae48b9))
- Switch `Text` to `React.forwardRef` ([e708010](https://github.com/facebook/react-native/commit/e708010d18f938e2d6b6424cfc9485d8e5dd2800))
- Switch `View` to `React.forwardRef` ([3e534b9](https://github.com/facebook/react-native/commit/3e534b9aab5156adac67762877b2457408fe8934))
- Update uses of `genMockFunction` and `genMockFn` to `fn` in tests ([390ded8](https://github.com/facebook/react-native/commit/390ded871cb905d149e9c1f4a082e67a7ec7addb))
- Make `ViewProps` exact ([65c336f](https://github.com/facebook/react-native/commit/65c336f38f4afd43c8b5f81745abf38bd9b8ddbf))
- Spread `TVViewProps` into `ViewProps` instead of intersection ([bc658d3](https://github.com/facebook/react-native/commit/bc658d3c4405676643d952a126295dbc7fc26217))
- Allow trailing commas ([1e2de71](https://github.com/facebook/react-native/commit/1e2de712907e5fe0d17648f0ff5c81d4384ca85b))
- Use `let`/`const` ([8f5ebe5](https://github.com/facebook/react-native/commit/8f5ebe5952d0675b463137103a82f3fb0c26ae0d))
- Refactor `MockNativeMethods` in Jest ([5d4c542](https://github.com/facebook/react-native/commit/5d4c542c58d84bbe05f76bf01d9efdd9d438572c))
- Use app name from `app.json` after ejecting ([57774a4](https://github.com/facebook/react-native/commit/57774a4a981e2f12cfe9b029447e34f203221b18))
- Suggest `git apply --reject` for failed upgrades ([4fbd244](https://github.com/facebook/react-native/commit/4fbd244b9a6b62e0efe1b4b5a7ec3de468f020f6))
- Moved `TouchHistoryMath` from React to React Native ([06085d3](https://github.com/facebook/react-native/commit/06085d38366373f3135074dc14e2c9871ca4fe29))
- Refactor `RCTInputAccessoryView` ([c136c54](https://github.com/facebook/react-native/commit/c136c54ff0211e2bf149fab600cd6e295f9d19dd))
- Don't wrap `ListEmptyComponent` in an extra view ([db061ea](https://github.com/facebook/react-native/commit/db061ea8c7b78d7e9df4a450c9e7a24d9b2382b4))
- Move `Text` PropTypes to its own file ([cd8128b](https://github.com/facebook/react-native/commit/cd8128b2eccf6898cdf798a1e1be1f7a5762a0d4))
- Mock `ReactNative.NativeComponent` native methods in Jest ([3e9a371](https://github.com/facebook/react-native/commit/3e9a371ace5f25b2eb7a0d30177251f8a0c10ed9))
- Tightening types for `View` and `VirtualizedList` ([5035af8](https://github.com/facebook/react-native/commit/5035af80ecddb44e2a8444780f25f336b760bf32))
- Make values optional in `ViewPropTypes` ([f1316ca](https://github.com/facebook/react-native/commit/f1316cab6c351852ef1da9939d4c8f0244fb8a6f))
- propTypes are optional for native components ([dbdf43b](https://github.com/facebook/react-native/commit/dbdf43b428da19a9eba012753904bcf33339ea9a))
- Rename `Style` to `DangerouslyImpreciseStyle` ([4895c64](https://github.com/facebook/react-native/commit/4895c645ea17ff939811f3d5ec6218cd4e31c5fb))
- _[BREAKING]_ `requireNativeComponent`'s signature has been simplified to only take extraOptions ([820673e](https://github.com/facebook/react-native/commit/820673e), [b549e36](https://github.com/facebook/react-native/commit/b549e36), [28d3778](https://github.com/facebook/react-native/commit/28d3778), [1c90a2b](https://github.com/facebook/react-native/commit/1c90a2b), and [1ab7d49](https://github.com/facebook/react-native/commit/1ab7d49) by [@yungsters](https://github.com/yungsters))

#### Breaking Changes

- Public methods of Text (`blur`, `focus`, `measure`, `measureInWindow`, `measureLayout`, `setNativeProps`) are no longer bound to the text component instance. It is therefore unsafe to pass these methods by reference (i.e: as callbacks) to functions. So, things like `setTimeout(this._txtRef.focus, 1000)` will no longer work. Please instead do: `setTimout(() => this._txtRef.focus(), 1000)`.

### iOS specific changes

- _[BREAKING]_ WebViews now can only use https; do not use it for `file://` ([634e7e1](https://github.com/facebook/react-native/commit/634e7e1) by [@mmmulani](https://github.com/mmmulani))
- iOS 9 is now the minimum required version ([f50df4f](https://github.com/facebook/react-native/commit/f50df4f5eca4b4324ff18a49dcf8be3694482b51))
- Update podspecs to target iOS 9 ([092103e](https://github.com/facebook/react-native/commit/092103e7525e58e04346e0a1a16a67ca4f31c2e9))
- Xcode 9.4 is now used to run tests ([c55bcd6](https://github.com/facebook/react-native/commit/c55bcd6ea729cdf57fc14a5478b7c2e3f6b2a94d))
- Prevent console logging on iOS 11.3+ within WebSocket ([8125be9](https://github.com/facebook/react-native/commit/8125be942bd5fd8fe851bad04ae6b9bcb0af4727))
- Expose `RCTFont` size overrides ([6611fef](https://github.com/facebook/react-native/commit/6611fefef7559c4cd3d1824235d263bff210d5e2))

### Android specific changes

- Projects are now compiled using Android SDK 26 ([065c5b6](https://github.com/facebook/react-native/commit/065c5b6590de18281a8c592a04240751c655c03c))
- Use Google Maven repo in new Android projects ([6d56a23](https://github.com/facebook/react-native/commit/6d56a234e3cf5984335ff2713236260fac977f5f))
- Upgrade Buck to v2018.03.26.01 ([1324e7b](https://github.com/facebook/react-native/commit/1324e7b5580db815471172cf6dd140124bd2f11a))
- Upgrade gradle-plugin to 2.3.3, gradle to 3.5.1, gradle-download-task to 3.4.3 ([699e5ee](https://github.com/facebook/react-native/commit/699e5eebe807d1ced660d2d2f39b5679d26925da))
- Bump NDK APP_PLATFORM to android-16 ([5ae9799](https://github.com/facebook/react-native/commit/5ae97990418db613cd67b1fb9070ece976d17dc7))
- Bump glog to 0.3.5 (added libc++ support) ([8bd4344](https://github.com/facebook/react-native/commit/8bd43449f0bdf5a5be1e29328810ae68e20c42af))
- `ReactFragmentActivity` deprecated as it's not necessary when targeting API level 14 and above ([8ea8dd6](https://github.com/facebook/react-native/commit/8ea8dd6d48bc3db0b8255f320537e662e8fa2a09))
- Touchables now play a sound on press ([722f88c](https://github.com/facebook/react-native/commit/722f88ca9058c5d902c416b826a7a7ab347326b8))
- Default `underlineColorAndroid` to transparent ([a3a98eb](https://github.com/facebook/react-native/commit/a3a98eb1c7fa0054a236d45421393874ce8ce558))
- Disable `WebView` geolocation by default ([23d61b3](https://github.com/facebook/react-native/commit/23d61b35fb6fdbfb84f77b6d99ff155a0ff868e6))
- Ensure cookies with illegal characters are not sent to okhttp ([04028bf](https://github.com/facebook/react-native/commit/04028bf2169b01f79bd86ecd6b0d8aa5f99599f1))
- Update app icons to match recent Android releases ([94393f8](https://github.com/facebook/react-native/commit/94393f8652c414806fc861c214ad36e9ac1b6114))
- Better error messages for `ReadableNativeMap` ([30d06b4](https://github.com/facebook/react-native/commit/30d06b42862fc5e8704e109db652d62f86f8eabc))
- Update Fresco to v1.9.0, okhttp3 to v3.10.0 ([6b07602](https://github.com/facebook/react-native/commit/6b07602915157f54c39adbf0f9746ac056ad2d13))
- Add tint color to inline icons ([e8e2a6e](https://github.com/facebook/react-native/commit/e8e2a6e4102c1ba0ee3d068769e47fa61c160524))
- Fix antialiasing rounded background ([7500b3e](https://github.com/facebook/react-native/commit/7500b3ec839ada6d8e1f7a88d30743dfb0ad7e70))
- `react-native link` will now replace '/' by '\_' when linking projects. If you previously linked scoped packages, they will get linked again. ([dbd4759](https://github.com/facebook/react-native/commit/dbd47592a18ed09ee6e94c79bed16d63be625af6))
- New project template now uses project-wide properties ([5ae80f9](https://github.com/facebook/react-native/commit/5ae80f91fb54f8b6947dc60b2d98ee73ccd04da0))

---

### Fixed: bugs that have been resolved

- `VirtualizedList` now accounts for `ListHeaderComponent` length when calculating offset ([537731f](https://github.com/facebook/react-native/commit/537731f8a52d5adbeaadb44bd9edcbd98e8455e0))
- Prevent showing a hidden status bar when opening modals ([076b1ce](https://github.com/facebook/react-native/commit/076b1cea3563cae30e11d63cc100ceaed9082692))
- Fix crash when reloading while Perf Monitor is enabled ([4fcd997](https://github.com/facebook/react-native/commit/4fcd9970bd2dfb24890bc87e9c82e16dab71ec09))
- Fixed concurrency issue in remote debugger ([e5aa5b7](https://github.com/facebook/react-native/commit/e5aa5b7c508c5e0e51f7abfcee350e27bef24ba2))
- Fix `Modal` + `FlatList` scrolling ([8799047](https://github.com/facebook/react-native/commit/8799047dd0bc8dd93f05fa97d4b9a59f7dfeb324))
- Fix bug in `RCTNetworking` where not all tasks/handlers were being cleared during invalidation ([b805172](https://github.com/facebook/react-native/commit/b8051720344f3716e964eaf7cfdd2a91dc703602))
- Fix keyboard handling with `keyboardShouldPersistTaps: never` ([ffe6c11](https://github.com/facebook/react-native/commit/ffe6c110f7ce33460fe0399ccbda16a6adbe90ca))
- Fix Responder Logic in `Text` ([e2ce22b](https://github.com/facebook/react-native/commit/e2ce22b823661a7dcf6b70a825921a2910383bd1))
- Fix `VirtualizedSectionList` lint warnings ([26a1eba](https://github.com/facebook/react-native/commit/26a1eba1cef853b0dab7aad5731699c06d36b781))
- Fix `VirtualizedSectionList:ItemWithSeparators` ([488a4c7](https://github.com/facebook/react-native/commit/488a4c7e1c86ac5900ff9194106511fbf5a8e3cb))
- Fix `TextInput`'s initial layout measurements ([c6b4f9f](https://github.com/facebook/react-native/commit/c6b4f9f2ce59bc757d9e211f46294faa03df55c6))
- Fix `requireNativeComponent` check ([1c90a2b](https://github.com/facebook/react-native/commit/1c90a2b47b420a4b6aa16a55a344cc08f0eacbe3))
- Fix `TextInput` autocapitalization bug ([ff70ecf](https://github.com/facebook/react-native/commit/ff70ecf868cf12fc66b45dc1496391d0a1e9011f))
- Add missing events to `ViewPropTypes` ([41a9403](https://github.com/facebook/react-native/commit/41a940392cea497bc5eb627b24083d0211d1eb89))
- Add missing Jest mock in `StatusBarManager` ([4a2c560](https://github.com/facebook/react-native/commit/4a2c560768abb2d8407900fdb2fbe4971ae00a1c))
- Add Flow declaration for Metro module ([1853e15](https://github.com/facebook/react-native/commit/1853e1519030caaeeb7f31017d98823aa5696daf))
- Fix type for `ReactNative.NativeComponent` (1/2) ([de11ba2](https://github.com/facebook/react-native/commit/de11ba2a5ee90929dbc67d914de59bdd2ebc29ca))
- Fix type for `ReactNative.NativeComponent` (2/2) ([7528636](https://github.com/facebook/react-native/commit/752863629d63bca6d96a101bfeccc4e7ad3e953e))
- Move Image PropTypes to new file ([6765699](https://github.com/facebook/react-native/commit/67656991b32075e8b4a99c6409b0a131206c6941))
- Tests: Fix JUnit report location when running Jest ([85fc98d](https://github.com/facebook/react-native/commit/85fc98d437c08cdec883a73161e120478737ba72))
- Tests: Fix ReactImagePropertyTest SoLoader failures (#19607) ([a52d84d](https://github.com/facebook/react-native/commit/a52d84d7e1cdb287f2877c4d85f2e9866c248d43))
- Tests: Fix jest snapshot testing on Windows ([216bce3](https://github.com/facebook/react-native/commit/216bce31632480ce70cc03b1b2a57ec12440afd7))
- Fixes "Cannot resolve module" errors in new `react-native init` projects ([27a497d](https://github.com/facebook/react-native/commit/27a497dd5ae51b6a7fdf3df7504f9082bdfae61e))
- Haste hotfix for `react-native-windows` ([600747f](https://github.com/facebook/react-native/commit/600747ffd17022e2077f74f345ee6ee26f6dd49b))

#### iOS specific fixes

- Fix undefined_arch error in Xcode 10 beta - 3861dbef5b34734283563e28b454b68d3265d21a
- Make `react-native run-ios` command play nicely with multiple Xcode versions ([302699a](https://github.com/facebook/react-native/commit/302699a4721d8e721bc222909f92b754eb14140d))
- Correct fishhook import ([ca515e9](https://github.com/facebook/react-native/commit/ca515e99a39dcadbbfb653205e2929dec7e7096b))
- Fix bug where a Backspace event was emitted when entering characters after clearing a text in `TextInput` by an empty string ([1ffb2b6](https://github.com/facebook/react-native/commit/1ffb2b63be4c4af331fece0b4286e5c92b1e575d))
- Expose `InputAccessoryView` so it can be imported ([80fc415](https://github.com/facebook/react-native/commit/80fc415cf179ffe26d020bc8d6e4451352da94fd))
- Fix `InputAccessoryView` safe area comformance ([490f22a](https://github.com/facebook/react-native/commit/490f22ae72ba43fa9364ce0f6c238744c07ac830))
- Fix use of C++ syntax in header file ([bfcfe79](https://github.com/facebook/react-native/commit/bfcfe7961db0970e2575eafe2f3c9c668bd8940d))
- Fix install step when running `run-ios` ([0934c17](https://github.com/facebook/react-native/commit/0934c1778f0e3c0b691e1a3ca2df1d486eb905dd))
- Fix `run-ios` not turning on Simulator ([9736ddc](https://github.com/facebook/react-native/commit/9736ddc061e9c4291df8a3185c7f9d6f73e435c7))
- Use correct library reference for Fishhook. This fixes the build for the new Xcode build system, on both Xcode 9 and Xcode 10 ([a8b7457](https://github.com/facebook/react-native/commit/a8b74576da6f1a42fde4e39f97e88c8f45a3a51d))
- Add missing `onChange` event definition to `DatePickerIOS` ([3b53091](https://github.com/facebook/react-native/commit/3b53091869b673ea33a4af34242e2227ca944768))
- Fix crash during Archive phase on Xcode 9.3 ([344c205](https://github.com/facebook/react-native/commit/344c205070d5ad670c97984dd86ec9ac13c73f81))
- `RNTesterPods`: Add missing folly include ([128c934](https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a))
- `RNTesterPods`: folly::Optional's `has_value()` to `hasValue()` until folly is upgraded ([128c934](https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a))
- `RNTesterPods`: Fix import for `RCTTestAttributes.h` ([128c934](https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a))
- `RNTesterPods`: Fix `conversions.h` to use namespaced includes ([128c934](https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a))
- Fix or mark enum conversions surfaced by `-Wenum-conversion` ([b8f30db](https://github.com/facebook/react-native/commit/b8f30db0ae21d5f96547702abbf50aefa93b1094))
- Fix CocoaPods integration without DevSupport subspec ([c09d509](https://github.com/facebook/react-native/commit/c09d509c2b8a5a02701829e1f0ace8081ce64277))
- Update Yoga to handle being in a Xcode framework project ([cf036db](https://github.com/facebook/react-native/commit/cf036dbc7af16a8453c115372694dc51e8086fcf))
- Fix Blob memory leak ([122b379](https://github.com/facebook/react-native/commit/122b3791ede095345f44666691aa9ce5aa7f725a))
- Avoid double reload event when reloading JS ([b348aa1](https://github.com/facebook/react-native/commit/b348aa14d483cc6b33ba92637647c4987c9478c1))
- Suppress spurious warning about RCTCxxModule ([af76473](https://github.com/facebook/react-native/commit/af76473c2e344c13ecac054b5a5568a0b94128e5))

#### Android specific fixes

- Fix extreme `TextInput` slowness on Android ([1b4187f](https://github.com/facebook/react-native/commit/1b4187fc414352cd3724e2d4df2009f5a045fe3f))
- Correct draw path dimensions while doing even border, fixes blurred borders ([c5ca26a](https://github.com/facebook/react-native/commit/c5ca26a0e5c0660196300ee34d6007c63879611f))
- Don't pass additional arguments to `requireNativeComponent` in `.android.js` files ([a51e8b1](https://github.com/facebook/react-native/commit/a51e8b19cc4dc36dee42ac95278b883c06b2e40f))
- Prevent `RefreshControl` from getting stuck when a parent is scrolled horizontally ([33ffa79](https://github.com/facebook/react-native/commit/33ffa79a51d4db9ba69148861f2da304646175cd))
- Prevent crash due to unsupported ellipsize mode ([85e33aa](https://github.com/facebook/react-native/commit/85e33aaf908996e99220bff4a2bdbbdf7c0d12b0))
- Fix okhttp3 response handling in `DevServerHelper` ([56d48bd](https://github.com/facebook/react-native/commit/56d48bd9ecd2d0f08625259121312531064a09f2))
- Fix `ReactInstanceManager` unmountApplication to support `ReactRootView` recycling ([4a9b2a7](https://github.com/facebook/react-native/commit/4a9b2a73021fb547febe1fa193c3effb7ff8da4e))
- Fix `NullPointerException` when emiting event using `UIManagerModule` ([291c01f](https://github.com/facebook/react-native/commit/291c01f4ffe614760852e36b05d78b42cb4271df))
- Fix link to Android build guide ([57e7556](https://github.com/facebook/react-native/commit/57e7556b8db61e5fcc3ccea56c1b163b82a091a6))
- Fix Android open source test failures ([3e0ebc7](https://github.com/facebook/react-native/commit/3e0ebc76632238f21c60caa92c7a2b5ee8102b71))
- Fix view indices with LayoutAnimation ([d8fcdb9](https://github.com/facebook/react-native/commit/d8fcdb9bd7a308ed70caeac1b53da0a05abe452f))
- Fix originalNode memory leak ([8102e35](https://github.com/facebook/react-native/commit/8102e35271ab68e0525a9c60d86a855bbeef9c1a))
- Fix `ScrollView` with a `TextInput` ([2f1421d](https://github.com/facebook/react-native/commit/2f1421dec7cd3a35779caceac108e872033c7d72))
- Disable onKeyPRess logic when handler not defined ([41975f7](https://github.com/facebook/react-native/commit/41975f75d96ef4b606b4618461bf24d5db063b77))
- fix permission requests on pre-M android ([6d27bd1](https://github.com/facebook/react-native/commit/6d27bd182fa87cab0c68ca281c869b987cbd2ca6))

---

### Removed: features that have been removed; these are breaking

- Deprecate `focusTextInput` and `blurTextInput` ([ce3b7b8](https://github.com/facebook/react-native/commit/ce3b7b8204dad0fd62a76a0ce66472eca4b25bc8))
- _[BREAKING]_ `ImageResizeMode` on `Image` is no longer exposed; check your usage of `resizeMode`; the same resize modes exist, but pass them as strings instead ([870775e](https://github.com/facebook/react-native/commit/870775e) by [@TheSavior](https://github.com/TheSavior))

#### Android specific removals

- Remove native extensions ([7c5845a](https://github.com/facebook/react-native/commit/7c5845a5a26592598c9380df078766a680a23f06))
- Remove Fresco ProGuard rules ([07df365](https://github.com/facebook/react-native/commit/07df36557c8cbbaee5e870460162aa725a606ff4))

#### iOS specific removals

- Disallow nesting of `<View>` within `<Text>` (e.g. `<Text><View /></Text>`) ([6a1b416](https://github.com/facebook/react-native/commit/6a1b41643a5f5035c61a96263220d11d3462e8f2)
- Removed deprecated `UIActionSheetDelegate` methods ([5863b56](https://github.com/facebook/react-native/commit/5863b564f84b9fe97b256f8cde0f7f2e1db9b641))

---

### Known issues

During the RC testing of this version, a few issues that have been opened don't have yet a finalized solution ( [19827](https://github.com/facebook/react-native/issues/19827), [19763](https://github.com/facebook/react-native/issues/19763), [19859](https://github.com/facebook/react-native/issues/19859), [19955](https://github.com/facebook/react-native/issues/19955) ). We are aware of them and we hope that by releasing 0.56.0 the surface of developers interacting to find solutions to them will allow for faster resolution and an even better 0.56.1 release. So please check the already opened issues before submitting new ones.

If you are using Windows to develop React Native apps, we suggest you keep an eye on [this issue in particular](https://github.com/facebook/react-native/issues/19953) since there have been many reports of issues related to Win 10 and RN 0.56.

## [0.55]

Welcome to the March 2018 release of React Native ! Over 81 contributors made 247 commits since February. Thanks for another exciting release.

Here are a few highlights:

- React Native is now using the MIT license
- Android TV device support

[![RNAndroidTVDemo](http://img.youtube.com/vi/EzIQErHhY20/0.jpg)](http://www.youtube.com/watch?v=EzIQErHhY20)

- Animated tracking with native driver - check out the [silky smooth framerate](https://t.co/dE1KST1i3g)
- Lots of Flow improvements
- Bugfixes

### Added: new features

- Added support for animated tracking to native driver. Now you can use `useNativeDriver` flag with animations that track other `Animated.Values` ([b48f7e5](https://github.com/facebook/react-native/commit/b48f7e5) by [@kmagiera](https://github.com/kmagiera))
- There's a new UTFSequence module in the library for common Unicode sequences (Emoji!) ([54870e0](https://github.com/facebook/react-native/commit/54870e0) and [4761d5a](https://github.com/facebook/react-native/commit/4761d5a) by [@sahrens](https://github.com/sahrens))
- Added `contextMenuHidden` property for **TextInput** ([2dd2529](https://github.com/facebook/react-native/commit/2dd2529) by [@amhinson](https://github.com/amhinson))
- Add `testOnly_pressed` to **TouchableHighlight** for snapshot tests ([3756d41](https://github.com/facebook/react-native/commit/3756d41) by [@sahrens](https://github.com/sahrens))

#### Android specific additions

- Added support for Android TV devices ([b7bb2e5](https://github.com/facebook/react-native/commit/b7bb2e5) by [@krzysztofciombor](https://github.com/krzysztofciombor))
- Implemented style `letterSpacing` for **Text** and **TextInput** ([5898817](https://github.com/facebook/react-native/commit/5898817) by [@motiz88](https://github.com/motiz88))
- Bundle download progress is now shown [d06e143](https://github.com/facebook/react-native/commit/d06e143) by [@janicduplessis](https://github.com/janicduplessis))
- **AndroidInfoModule** now also returns Android ID ([216c8ec](https://github.com/facebook/react-native/commit/216c8ec) by [@L33tcodex0r](https://github.com/L33tcodex0r))

#### iOS specific additions

- Introducing **InputAccessoryView**, "a component which enables customization of the keyboard input accessory view" ([38197c8](https://github.com/facebook/react-native/commit/38197c8), [84ef7bc](https://github.com/facebook/react-native/commit/84ef7bc), and [6d9fe45](https://github.com/facebook/react-native/commit/6d9fe45) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- `base-line` metric exposure for **Text** and **TextInput** ([51b3529](https://github.com/facebook/react-native/commit/51b3529), [0dbe183](https://github.com/facebook/react-native/commit/0dbe183), and [7630a61](https://github.com/facebook/react-native/commit/7630a61) by [@shergin](https://github.com/shergin))
- **DatePickerIOS** now has `initialDate` prop ([446ce49](https://github.com/facebook/react-native/commit/446ce49))
- Expose version via `RCTVersion.h`'s `RCTGetReactNativeVersion()` ([30469ed](https://github.com/facebook/react-native/commit/30469ed) by [@LeoNatan](https://github.com/LeoNatan))
- Allow running multiple simulators simultaneously with `react-native run-ios --simulator ...` ([2ad3407](https://github.com/facebook/react-native/commit/2ad3407) by [@koenpunt](https://github.com/koenpunt))
- Introduced **RCTSurfaceHostingProxyRootView** for migration to **RCTSurfaceHostingView** ([34b8876](https://github.com/facebook/react-native/commit/34b8876) by [@fkgozali](https://github.com/fkgozali))
- New UIManager API allowing intercept/delay mounting process ([402ae2f](https://github.com/facebook/react-native/commit/402ae2f) and [b90c1cf](https://github.com/facebook/react-native/commit/b90c1cf) by [@shergin](https://github.com/shergin))

### Changes: existing functionality that is now different

- React Native has now adopted the MIT license ([1490ab1](https://github.com/facebook/react-native/commit/1490ab1) and [26684cf](https://github.com/facebook/react-native/commit/26684cf) by [@sophiebits](https://github.com/sophiebits))
- The HelloWorld template now exclude `*.jsbundle` files from Git ([2123108](https://github.com/facebook/react-native/commit/2123108) by [@aneophyte](https://github.com/aneophyte))
- `react-native-git-upgrade` now shows files merged with conflicts in red ([e53a8f7](https://github.com/facebook/react-native/commit/e53a8f7) by [@alvinthen](https://github.com/alvinthen))
- `ResolvedAssetSource` type to have all read-only members ([4d0ee37](https://github.com/facebook/react-native/commit/4d0ee37) by [@sahrens](https://github.com/sahrens))
- Flow types improvements ([b6c7e55](https://github.com/facebook/react-native/commit/b6c7e55), [b98bf1e](https://github.com/facebook/react-native/commit/b98bf1e), [80c1839](https://github.com/facebook/react-native/commit/80c1839), [70a3ece](https://github.com/facebook/react-native/commit/70a3ece), [f734357](https://github.com/facebook/react-native/commit/f734357), [a817c64](https://github.com/facebook/react-native/commit/a817c64), [3fd82d3](https://github.com/facebook/react-native/commit/3fd82d3), [cd8128b](https://github.com/facebook/react-native/commit/cd8128b), [5035af8](https://github.com/facebook/react-native/commit/5035af8), [26734a8](https://github.com/facebook/react-native/commit/26734a8), [321ba06](https://github.com/facebook/react-native/commit/321ba06), [b6b80f6](https://github.com/facebook/react-native/commit/b6b80f6), [f1316ca](https://github.com/facebook/react-native/commit/f1316ca), [2520c64](https://github.com/facebook/react-native/commit/2520c64), [214da52](https://github.com/facebook/react-native/commit/214da52), [dbdf43b](https://github.com/facebook/react-native/commit/dbdf43b), [49396aa](https://github.com/facebook/react-native/commit/49396aa), [4895c64](https://github.com/facebook/react-native/commit/4895c64), [a3c07c9](https://github.com/facebook/react-native/commit/a3c07c9), [49ffc9f](https://github.com/facebook/react-native/commit/49ffc9f), and [c129457](https://github.com/facebook/react-native/commit/c129457) by [@TheSavior](https://github.com/TheSavior), [@yungsters](https://github.com/yungsters), and [@alex288ms](https://github.com/alex288ms))
- Better enable cross-platform support of WebSocket.js ([b9be289](https://github.com/facebook/react-native/commit/b9be289) by [@rozele](https://github.com/rozele))
- Better error handling in the CLI around making directories ([d2817f4](https://github.com/facebook/react-native/commit/d2817f4) by [@BridgeAR](https://github.com/BridgeAR))
- Verify that the component passed to createAnimatedComponent is not functional ([10b642a](https://github.com/facebook/react-native/commit/10b642a) by [@janicduplessis](https://github.com/janicduplessis))
- Don't truncate in the middle of an emoji ([9c8c597](https://github.com/facebook/react-native/commit/9c8c597) by [@Vince0613](https://github.com/Vince0613))
- Loosen Platform check to allow better code sharing for out-of-tree platforms ([84affbd](https://github.com/facebook/react-native/commit/84affbd))
- In CLI, fix issue with `isInstalled` check for Android and references to unregister ([ec88489](https://github.com/facebook/react-native/commit/ec88489) by [@rozele](https://github.com/rozele))

#### iOS specific changes

- tvOS `onPress` magnification animation now works via the `tvParallaxProperties` prop object taking `pressMagnification`, `pressDuration`, and `pressDelay` ([6c353fd](https://github.com/facebook/react-native/commit/6c353fd) by [@JulienKode](https://github.com/JulienKode))

### Fixed: bugs that have been resolved

- In **TouchableOpacity**, trigger animation on `opacity` upon change in `disabled` prop ([9366ce4](https://github.com/facebook/react-native/commit/9366ce4) by [@maxkomarychev](https://github.com/maxkomarychev))
- Fixed an issue encountered when using `react-native-vector-icons` ([a759a44](https://github.com/facebook/react-native/commit/a759a44) and [54dc11a](https://github.com/facebook/react-native/commit/54dc11a) by [@jeanlauliac](https://github.com/jeanlauliac) and [@t4deu](https://github.com/t4deu)))
- Add missing mock for Jest for `removeEventListener` method ([59c7b2c](https://github.com/facebook/react-native/commit/59c7b2c) by [@MoOx](https://github.com/MoOx))
- Fix main size calculation from the aspect ratio ([f751c34](https://github.com/facebook/react-native/commit/f751c34))
- Fix crash in Subscribable due to uglify-es ([b57a78c](https://github.com/facebook/react-native/commit/b57a78c) by [@iMagdy](https://github.com/iMagdy))
- Update `node-notifier` dependency to fix memory leak ([860fcd4](https://github.com/facebook/react-native/commit/860fcd4) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix issues with pollParams and link ([ca8ce83](https://github.com/facebook/react-native/commit/ca8ce83) by [@grabbou](https://github.com/grabbou))

#### iOS specific fixes

- DevLoadingView now supports the iPhone X screen shape ([47b36d3](https://github.com/facebook/react-native/commit/47b36d3) by [@mrtnrst](https://github.com/mrtnrst))
- Added bounds check to prevent ScrollView from scrolling to an offset which is out of bounds of the ScrollView ([16c9e5b](https://github.com/facebook/react-native/commit/16c9e5b) by [@siddhantsoni](https://github.com/siddhantsoni))
- **NetInfo** `isConnected` works again ([dbafc29](https://github.com/facebook/react-native/commit/dbafc29) by [@alburdette619](https://github.com/alburdette619))
- In **AlertIOS**, fix duplicate var name declaration ([6893a26](https://github.com/facebook/react-native/commit/6893a26))
- Permit `react-native run-ios --device [id]` by passing port when running on device ([f8fee0a](https://github.com/facebook/react-native/commit/f8fee0a) by [@jozan](https://github.com/jozan))
- Fixed issue with `run-ios` where `Entry, ":CFBundleIdentifier", Does Not Exist` was being received ([5447ca6](https://github.com/facebook/react-native/commit/5447ca6) by [@blackneck](https://github.com/blackneck))
- Fixed problem in Text measurement on iOS ([a534672](https://github.com/facebook/react-native/commit/a534672) by [@shergin](https://github.com/shergin))
- Fix crash when reloading in tvOS ([3a3d884](https://github.com/facebook/react-native/commit/3a3d884) by [@dlowder-salesforce](https://github.com/dlowder-salesforce))
- Fixed a bug with positioning of nested views inside **Text** ([7d20de4](https://github.com/facebook/react-native/commit/7d20de4) by [@shergin](https://github.com/shergin))
- Fix blob response parsing for empty body ([093a78d](https://github.com/facebook/react-native/commit/093a78d) by [@janicduplessis](https://github.com/janicduplessis))
- Fix tvOS react-native init release build ([3002c4e](https://github.com/facebook/react-native/commit/3002c4e) by [@dlowder-salesforce](https://github.com/dlowder-salesforce)
- Fix RedBox from bridge reload due is not re-registering its root view ([2e51fa5](https://github.com/facebook/react-native/commit/2e51fa5) by [@fkgozali](https://github.com/fkgozali))

#### Android specific fixes

- Fix: incorrect line-height calculation ([74e54cb](https://github.com/facebook/react-native/commit/74e54cb) by [@strindhaug](https://github.com/strindhaug))
- Fix crashes with TextInput introduced in 0.53 ([b60a727](https://github.com/facebook/react-native/commit/b60a727) by [@joshyhargreaves](https://github.com/joshyhargreaves))
- Update ReactAndroid build script to support gradle 2.3.0 ([d8bb990](https://github.com/facebook/react-native/commit/d8bb990))
- Allow "unexpected URL" exception to be caught on Android when using fetch ([da84eba](https://github.com/facebook/react-native/commit/da84eba) by [@jcurtis](https://github.com/jcurtis))
- Fix `onLayout` prop for **TextInput** ([8a073c1](https://github.com/facebook/react-native/commit/8a073c1) by [@rozele](https://github.com/rozele))
- Fix ViewPager when using native navigation ([a1295e1](https://github.com/facebook/react-native/commit/a1295e1) by [@ruiaraujo](https://github.com/ruiaraujo))
- Fix localization crash in **DevSettingsActivity** ([427e464](https://github.com/facebook/react-native/commit/427e464) by [@ayc1](https://github.com/ayc1))
- Fix pinch crash in touch-responsive views ([67c3ad4](https://github.com/facebook/react-native/commit/67c3ad4) by [@tobycox](https://github.com/tobycox))
- Fix IllegalStateException thrown in looped timing native animation ([ef9d1fb](https://github.com/facebook/react-native/commit/ef9d1fb) by [@kmagiera](https://github.com/kmagiera))
- Workaround android-only js module resolution issue ([c20e0f9](https://github.com/facebook/react-native/commit/c20e0f9) by [@fkgozali](https://github.com/fkgozali))
- Fix ReadableNativeMap.toHashMap() for nested maps and arrays ([8a6ab14](https://github.com/facebook/react-native/commit/8a6ab14) by [@esamelson](https://github.com/esamelson))
- Fix Android Sanity Buck version check ([e057322](https://github.com/facebook/react-native/commit/e057322) by [@hramos](https://github.com/hramos))
- Fixes the connection to Firestore by following whatwg.org's XMLHttpRequest send() method ([d52569c](https://github.com/facebook/react-native/commit/d52569c) by [@samsafay](https://github.com/samsafay))
- `invertStickyHeaders` can now be set from **SectionList** or **FlatList** ([3d69b5c](https://github.com/facebook/react-native/commit/3d69b5c) by [@dannycochran](https://github.com/dannycochran))

### Removed: features that have been removed; these are breaking

- Removed various types ([b58e377](https://github.com/facebook/react-native/commit/b58e377), [ee26d9b](https://github.com/facebook/react-native/commit/ee26d9b), [d89517d](https://github.com/facebook/react-native/commit/d89517d), [852084a](https://github.com/facebook/react-native/commit/852084a) by [@TheSavior](https://github.com/TheSavior))
- Deleted `Systrace.swizzleJSON()` ([3e141cb](https://github.com/facebook/react-native/commit/3e141cb) by [@yungsters](https://github.com/yungsters))

#### Android specific removals

- `ReactInstanceManager#registerAdditionalPackages` has been removed; Create UIManager interface and extract common classes in uimanager/common ([6b45fb2](https://github.com/facebook/react-native/commit/6b45fb2) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific removals

- Remove callFunctionSync experimental APIs ([19a4a7d](https://github.com/facebook/react-native/commit/19a4a7d) by [@danzimm](https://github.com/danzimm))

## [0.54]

Welcome to the February 2018 release of React Native! This release includes work done by the React Native team and the community in January, and there are some big changes here after the holidays. Thanks for 270 commits from 87 contributors, you all are great! Here are a few highlights from the release:

- Long awaited **Blob** changes: upload, download, fetch locally, and more
- Sticky headers now work on inverted Lists
- Update to the newest React, which deprecated some lifecycle methods and added new ones – expect Yellowbox until React Native is updated
- `Space-evenly` is now there (sorry for the confusion with 0.52's release notes)
- A lot of under-the-covers work on Yoga, iOS's **Text** and **TextInput**, and a ton of other areas
- Multiple crash fixes

The changelog is arranged by the customary added, removed, changed, and fixed plus internal; the changes are also organized by platform.

### Added

- ✨ **Blob**s now can be: made from Strings, loaded by File using a FileReader API, uploaded and downloaded via `XMLHttpRequest#fetch`, and fetched on files to a local blob consistently ([be56a3e](https://github.com/facebook/react-native/commit/be56a3e) and [854c233](https://github.com/facebook/react-native/commit/854c233) by [@satya164](https://github.com/satya164) and [@fkgozali](https://github.com/fkgozali))
- Dynamic node_module dependencies are now supported ([b5e19ad](https://github.com/facebook/react-native/commit/b5e19ad) by [@jeanlauliac](https://github.com/jeanlauliac))
- Support sticky headers for inverted Lists with `invertStickyHeaders` ([ecaca80](https://github.com/facebook/react-native/commit/ecaca80) by [@janicduplessis](https://github.com/janicduplessis))
- `space-evenly` is now supported (sorry for the confusion with 0.52 notes) ([b1cdb7d](https://github.com/facebook/react-native/commit/b1cdb7d) by [@gedeagas](https://github.com/gedeagas))
- Platform plugins can participate in RNConfig, `link`, and `unlink` – keep an eye on [react-native-window's use of it](https://github.com/Microsoft/react-native-windows/pull/1601)! ([a40bfa7](https://github.com/facebook/react-native/commit/a40bfa7) by [@rozele](https://github.com/rozele))
- Add `minify` flag to react-native bundle command ([3f969cb](https://github.com/facebook/react-native/commit/3f969cb) by [@tomduncalf](https://github.com/tomduncalf))

#### VR Specific Additions

- Added **ScrollView** support ([6fa039d](https://github.com/facebook/react-native/commit/6fa039d) by [@MartinSherburn](https://github.com/MartinSherburn))

#### Android Specific Additions

- Bundle download progress is now shown like iOS ([675f142](https://github.com/facebook/react-native/commit/675f142) by [@janicduplessis](https://github.com/janicduplessis))
- Add back ability to customise OkHttp client ([22efd95](https://github.com/facebook/react-native/commit/22efd95) by [@cdlewis](https://github.com/cdlewis))

#### iOS specific additions

- **ScrollView** now supports smooth bi-directional content loading and takes new prop `maintainVisibleContentPosition` ([cae7179](https://github.com/facebook/react-native/commit/cae7179) and [65184ec](https://github.com/facebook/react-native/commit/65184ec) by [@sahrens](https://github.com/sahrens))
- Allow substituting a default font handler ([a9c684a](https://github.com/facebook/react-native/commit/a9c684a) by [@mmmulani](https://github.com/mmmulani))
- Add `accessibilityElementsHidden` prop ([3128816](https://github.com/facebook/react-native/commit/3128816) by [@aputinski](https://github.com/aputinski))
- Add EXTRA_PACKAGER_ARGS extensibility point on `scripts/react-native-xcode.sh` (PR rev [2122140](https://github.com/facebook/react-native/commit/2122140) by [@brunolemos](https://github.com/brunolemos) with landing assists [b8c86b8](https://github.com/facebook/react-native/commit/b8c86b8) and [0d4ff1b](https://github.com/facebook/react-native/commit/0d4ff1b))

### Removed

- Remove internal `utf8` utility - use the **utf8** package now instead ([431670f](https://github.com/facebook/react-native/commit/431670f) by [@mathiasbynens](https://github.com/mathiasbynens))

#### iOS specific removals

- Removed outdated assertion in RCTShadowView related to breaking change in Yoga ([e3ff3cf](https://github.com/facebook/react-native/commit/e3ff3cf) by [@shergin](https://github.com/shergin))

#### Android specific removals

- Fix an issue when swapping to and from the `visible-password` or `phone-pad` keyboard types. ([164f6b6](https://github.com/facebook/react-native/commit/164f6b6) by [@BrandonWilliamsCS](https://github.com/BrandonWilliamsCS))
- Remove redundant config in AndroidManifest.xml ([d7a9ca2](https://github.com/facebook/react-native/commit/d7a9ca2) by [@gengjiawen](https://github.com/gengjiawen))

#### iOS specific removals

- Delete RCTBatchedBridge ([816d417](https://github.com/facebook/react-native/commit/816d417) by [@mhorowitz](https://github.com/mhorowitz))

### Changed

- Docs clarifications ([7abffc3](https://github.com/facebook/react-native/commit/7abffc3) by [@IgorGanapolsky](https://github.com/IgorGanapolsky))

#### iOS Specific Changes

- ⚡️ **Text** and **TextInput** have been re-implemented from the ground up for performance, flexibility, and reduced technical debt ([2716f53](https://github.com/facebook/react-native/commit/2716f53), [ef4214a](https://github.com/facebook/react-native/commit/ef4214a), [0009909](https://github.com/facebook/react-native/commit/0009909), [74963eb](https://github.com/facebook/react-native/commit/74963eb), [6c4ef28](https://github.com/facebook/react-native/commit/6c4ef28), [ebc9884](https://github.com/facebook/react-native/commit/ebc9884), [d7fa81f](https://github.com/facebook/react-native/commit/d7fa81f), [7d1ec7a](https://github.com/facebook/react-native/commit/7d1ec7a), [5264832](https://github.com/facebook/react-native/commit/5264832), [6bb8617](https://github.com/facebook/react-native/commit/6bb8617), [5dbb3c5](https://github.com/facebook/react-native/commit/5dbb3c5), [7e7d00a](https://github.com/facebook/react-native/commit/7e7d00a), [46fd864](https://github.com/facebook/react-native/commit/46fd864), [9dfa2e7](https://github.com/facebook/react-native/commit/9dfa2e7), [8a882fe](https://github.com/facebook/react-native/commit/8a882fe), and [0f9fc4b](https://github.com/facebook/react-native/commit/0f9fc4b) by [@shergin](https://github.com/shergin) and [@hovox](https://github.com/hovox))
- **Image**'s `resizeMode="center"` is now documented and has an example present ([be7037f](https://github.com/facebook/react-native/commit/be7037f) by [@motiz88](https://github.com/motiz88))
- Geolocation API no longer timeouts when `skipPermissionRequests: true` ([5c17db8](https://github.com/facebook/react-native/commit/5c17db8) by [@ngandhy](https://github.com/ngandhy))
- Rounding pixels is now done with an algorithm from Yoga rather than React Native, reducing debt and improving performance ([ceb1d1c](https://github.com/facebook/react-native/commit/ceb1d1c) and [114c258](https://github.com/facebook/react-native/commit/114c258) by [@shergin](https://github.com/shergin))

#### Android specific changes

- Numerous refactors around bundle handling and the `DevServerHelper` ([644123a](https://github.com/facebook/react-native/commit/644123a), [e756251](https://github.com/facebook/react-native/commit/e756251), [6e44356](https://github.com/facebook/react-native/commit/6e44356), [1019bda](https://github.com/facebook/react-native/commit/1019bda), [06d8f96](https://github.com/facebook/react-native/commit/06d8f96), [f88c9d6](https://github.com/facebook/react-native/commit/f88c9d6), and [108f966](https://github.com/facebook/react-native/commit/108f966) by [@davidaurelio](https://github.com/davidaurelio))

### Fixed

- Fix JS debugger issues related to CORS ([29f8354](https://github.com/facebook/react-native/commit/29f8354) by [@njbmartin](https://github.com/njbmartin))
- Keep the `.gitignore`d files during the `react-native-git-upgrade` process ([7492860](https://github.com/facebook/react-native/commit/7492860) by [@ncuillery](https://github.com/ncuillery))
- Fix re-render case on SwipeableRow ([a580a44](https://github.com/facebook/react-native/commit/a580a44))
- Fix display of syntax error messages when HMR is enabled ([2b80cdf](https://github.com/facebook/react-native/commit/2b80cdf) by [@ide](https://github.com/ide))
- Add fixtures to metro blacklist in order to let build succeed ([4194bb2](https://github.com/facebook/react-native/commit/4194bb2) by [@t4deu](https://github.com/t4deu))

#### Android specific fixes

- Don't crash when using decimal `Animated.modulo` values with `useNativeDriver: true` ([6c38972](https://github.com/facebook/react-native/commit/6c38972) by [@motiz88](https://github.com/motiz88))
- Don't crash when receiving unknown websocket IDs ([1a790f8](https://github.com/facebook/react-native/commit/1a790f8) by [@sunweiyang](https://github.com/sunweiyang))
- Dont crash when `NativeModules.UIManager.showPopupMenu` method calls error callback ([0c18ec5](https://github.com/facebook/react-native/commit/0c18ec5) by [@dryganets](https://github.com/dryganets))
- Maintain cursor position when **TextInput**'s `secureTextEntry` changes ([09b43e4](https://github.com/facebook/react-native/commit/09b43e4) by [@jainkuniya](https://github.com/jainkuniya))
- Race condition fix in Dialogs module ([d5e3f08](https://github.com/facebook/react-native/commit/d5e3f08) by [@dryganets](https://github.com/dryganets))
- Fix NPE in Android Switch during measure ([7b1915e](https://github.com/facebook/react-native/commit/7b1915e) by [@4ndroidev](https://github.com/4ndroidev))
- Fix initialScrollIndex ([ef596de](https://github.com/facebook/react-native/commit/ef596de) by [@olegbl](https://github.com/olegbl))
- Fix redbox style ([f363dfe](https://github.com/facebook/react-native/commit/f363dfe) by [@ayc1](https://github.com/ayc1))
- Fix crash due to mishandling of UTF-8 in progressive download. ([9024f56](https://github.com/facebook/react-native/commit/9024f56) by [@dryganets](https://github.com/dryganets))
- Fix crash because ClassCastException fix: getText() returns CharSequence not Spanned ([46cc490](https://github.com/facebook/react-native/commit/46cc490) by [@dryganets](https://github.com/dryganets))
- Fix and re-enable "view flattening" optimizations ([877f1cd](https://github.com/facebook/react-native/commit/877f1cd) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific fixes

- Fix Crash when **CameraRoll** is getting assets from iCloud and no filename is provided ([2ae2436](https://github.com/facebook/react-native/commit/2ae2436) by [@pentarex](https://github.com/pentarex))
- Fix Xcode Archive task failing if project path contains whitespace ([8aa568e](https://github.com/facebook/react-native/commit/8aa568e) by [@jevakallio](https://github.com/jevakallio))
- `react-native link` has been fixed to correctly link iOS and tvOS targets ([a63fd37](https://github.com/facebook/react-native/commit/a63fd37) by [@dlowder-salesforce](https://github.com/dlowder-salesforce))
- `GLog` fix on case sensitive APFS macOS ([2fef1ba](https://github.com/facebook/react-native/commit/2fef1ba) by [@hovox](https://github.com/hovox))
- Fixed issue where you cannot launch tvOS app on Apple TV simulator ([afd988f](https://github.com/facebook/react-native/commit/afd988f))

### Internal work

- A **massive** amount of Yoga optimizations, cleanups, refactors, and test fixes ([62d0100](https://github.com/facebook/react-native/commit/62d0100), [1475fc4](https://github.com/facebook/react-native/commit/1475fc4), [9daa174](https://github.com/facebook/react-native/commit/9daa174), [d4517dd](https://github.com/facebook/react-native/commit/d4517dd), [ca91f0e](https://github.com/facebook/react-native/commit/ca91f0e), [34b7ec8](https://github.com/facebook/react-native/commit/34b7ec8), [fda861a](https://github.com/facebook/react-native/commit/fda861a), [9f7cedb](https://github.com/facebook/react-native/commit/9f7cedb), [ac1c8c2](https://github.com/facebook/react-native/commit/ac1c8c2), [fcf2c7c](https://github.com/facebook/react-native/commit/fcf2c7c), [2b27f1a](https://github.com/facebook/react-native/commit/2b27f1a), [210ae5b](https://github.com/facebook/react-native/commit/210ae5b), [8208858](https://github.com/facebook/react-native/commit/8208858), [7f94bff](https://github.com/facebook/react-native/commit/7f94bff), [bd7bf94](https://github.com/facebook/react-native/commit/bd7bf94), [2fe65b0](https://github.com/facebook/react-native/commit/2fe65b0), [9658d9f](https://github.com/facebook/react-native/commit/9658d9f), [ee5c91c](https://github.com/facebook/react-native/commit/ee5c91c), [64d530b](https://github.com/facebook/react-native/commit/64d530b), [400a29e](https://github.com/facebook/react-native/commit/400a29e), [f75e21f](https://github.com/facebook/react-native/commit/f75e21f), [528bbac](https://github.com/facebook/react-native/commit/528bbac), [be8e7c6](https://github.com/facebook/react-native/commit/be8e7c6), [d0f7d4d](https://github.com/facebook/react-native/commit/d0f7d4d), [4b4959a](https://github.com/facebook/react-native/commit/4b4959a), [fdef378](https://github.com/facebook/react-native/commit/fdef378), [831a1bb](https://github.com/facebook/react-native/commit/831a1bb), [2a22d99](https://github.com/facebook/react-native/commit/2a22d99), [9f57ded](https://github.com/facebook/react-native/commit/9f57ded), and [ff2658c](https://github.com/facebook/react-native/commit/ff2658c) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar), [@passy](https://github.com/passy), [@ryu2](https://github.com/ryu2), and others)
- 🚧 Lifecycle methods were renamed to be consistent with [React RFC6](https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md) – note that there are Yellowbox warnings right now because of this, it's work-in-progress ([6f007e8](https://github.com/facebook/react-native/commit/6f007e8) by [@bvaughn](https://github.com/bvaughn))
- Some autogenerated mystery string files were added ([c7846c4](https://github.com/facebook/react-native/commit/c7846c4), [bb6fcea](https://github.com/facebook/react-native/commit/bb6fcea), [8bd00a2](https://github.com/facebook/react-native/commit/8bd00a2), [faa9519](https://github.com/facebook/react-native/commit/faa9519), [f49f793](https://github.com/facebook/react-native/commit/f49f793))
- Improvements to the cli's implementation ([2c5fbd7](https://github.com/facebook/react-native/commit/2c5fbd7), [752427b](https://github.com/facebook/react-native/commit/752427b), and [619a8c9](https://github.com/facebook/react-native/commit/619a8c9) by [@arcanis](https://github.com/arcanis), [@voideanvalue](https://github.com/voideanvalue), and [@rozele](https://github.com/rozele))
- Measure touch events from nearest "root view" ([a70fdac](https://github.com/facebook/react-native/commit/a70fdac) by [@mmmulani](https://github.com/mmmulani))
- Allow to attach the HMR server to an external http server ([8c6b816](https://github.com/facebook/react-native/commit/8c6b816) by [@rafeca](https://github.com/rafeca))
- Split folly/Memory out from headers-only targets in Buck ([b8e79a7](https://github.com/facebook/react-native/commit/b8e79a7) by [@mzlee](https://github.com/mzlee))
- Code cleanup of **ReactHorizontalScrollView** in Android ([71ec85f](https://github.com/facebook/react-native/commit/71ec85f) by [@mdvacca](https://github.com/mdvacca))
- Always create a debugger websocket connection when in iOS dev builds ([fa334ce](https://github.com/facebook/react-native/commit/fa334ce) by [@bnham](https://github.com/bnham))
- Make the React Native HMR client extend from the generic metro HMR client ([9a19867](https://github.com/facebook/react-native/commit/9a19867) by [@rafeca](https://github.com/rafeca))
- Removed use of xip.io ([40a8434](https://github.com/facebook/react-native/commit/40a8434) by [@jvranish](https://github.com/jvranish))
- Fix Buck dependencies ([cec2e80](https://github.com/facebook/react-native/commit/cec2e80), [4f6c157](https://github.com/facebook/react-native/commit/4f6c157) by [@swolchok](https://github.com/swolchok))
- Fix permissions on test script ([42c410a](https://github.com/facebook/react-native/commit/42c410a) by [@mzlee](https://github.com/mzlee))
- Better handling exception in loadScript() ([3fbf785](https://github.com/facebook/react-native/commit/3fbf785))
- Fix ESLint upgrade "parsing error" ([9d21496](https://github.com/facebook/react-native/commit/9d21496) by [@zertosh](https://github.com/zertosh))
- Fixing 🤡 in RCTSurfaceRootShadowView ([5fba82d](https://github.com/facebook/react-native/commit/5fba82d) by [@shergin](https://github.com/shergin))
- Handle invalidation error in RCTObjcExecutor ([493f3e8](https://github.com/facebook/react-native/commit/493f3e8) by [@fromcelticpark](https://github.com/fromcelticpark))
- Check for nullptr when accessing isInspectable method ([70d23e8](https://github.com/facebook/react-native/commit/70d23e8) by [@fromcelticpark](https://github.com/fromcelticpark))
- Introduce new Fabric API in RNAndroid ([2d35bde](https://github.com/facebook/react-native/commit/2d35bde) by [@mdvacca](https://github.com/mdvacca))
- Fixing Prepack model for latest global.nativeExtensions changes. ([01a58d1](https://github.com/facebook/react-native/commit/01a58d1) by [@NTillmann](https://github.com/NTillmann))
- General code cleanup: unused code and configurations ([e233646](https://github.com/facebook/react-native/commit/e233646) and [e701034](https://github.com/facebook/react-native/commit/e701034) by [@bvaughn](https://github.com/bvaughn) and others)
- Add support for finding multiple views with NativeIds using a single listener to Android ([f5efc46](https://github.com/facebook/react-native/commit/f5efc46) by [@axe-fb](https://github.com/axe-fb))
- Add CountingOutputStream ([a5e135a](https://github.com/facebook/react-native/commit/a5e135a) by [@hramos](https://github.com/hramos))
- Changes from Prettier ([b815eb5](https://github.com/facebook/react-native/commit/b815eb5), [e758cb7](https://github.com/facebook/react-native/commit/e758cb7), [bf9cabb](https://github.com/facebook/react-native/commit/bf9cabb), and [a5af841](https://github.com/facebook/react-native/commit/a5af841) by [@shergin](https://github.com/shergin))
- Typos in code ([8ffc16c](https://github.com/facebook/react-native/commit/8ffc16c) by [@ss18](https://github.com/ss18))
- Support for inherited events in view managers ([2afe7d4](https://github.com/facebook/react-native/commit/2afe7d4) by [@shergin](https://github.com/shergin))
- Flow types changes ([3fc33bb](https://github.com/facebook/react-native/commit/3fc33bb), [e485cde](https://github.com/facebook/react-native/commit/e485cde), [83ed9d1](https://github.com/facebook/react-native/commit/83ed9d1), [52ffa5d](https://github.com/facebook/react-native/commit/52ffa5d), [d37cdd9](https://github.com/facebook/react-native/commit/d37cdd9), [6e7fb01](https://github.com/facebook/react-native/commit/6e7fb01), [d99ba70](https://github.com/facebook/react-native/commit/d99ba70), [bcfbdf4](https://github.com/facebook/react-native/commit/bcfbdf4), and [a1c479f](https://github.com/facebook/react-native/commit/a1c479f) by [@alexeylang](https://github.com/alexeylang), [@sahrens](https://github.com/sahrens), [@yungsters](https://github.com/yungsters), and [@zjj010104](https://github.com/zjj010104))
- Give IInspector a virtual destructor for correct InspectorImpl destruction ([2a3c37f](https://github.com/facebook/react-native/commit/2a3c37f) by [@toulouse](https://github.com/toulouse))
- Migrated `SourceCode` and `DeviceInfoModule` out of Native Modules ([47fe523](https://github.com/facebook/react-native/commit/47fe523) and [429fcc8](https://github.com/facebook/react-native/commit/429fcc8))
- Jest config change as part of bringing back support for the `assetPlugin` option in Metro ([af6450c](https://github.com/facebook/react-native/commit/af6450c) by [@ide](https://github.com/ide))
- Nested virtualized lists should receive recordInteration events ([ae2d5b1](https://github.com/facebook/react-native/commit/ae2d5b1))
- Upgrade connect dependency ([709ede7](https://github.com/facebook/react-native/commit/709ede7) by [@rafeca](https://github.com/rafeca))
- xplat/js: asyncRequire: redirect async modules to control modules ([5e11b88](https://github.com/facebook/react-native/commit/5e11b88) by [@jeanlauliac](https://github.com/jeanlauliac))
- More progress towards split bundle support ([1a1a956](https://github.com/facebook/react-native/commit/1a1a956) and [9e34cbd](https://github.com/facebook/react-native/commit/9e34cbd) by [@fromcelticpark](https://github.com/fromcelticpark))
- Implement bundle sync status ([88980f2](https://github.com/facebook/react-native/commit/88980f2))
- Various improvements to RCTSurface and RCTShadowView ([7d9e902](https://github.com/facebook/react-native/commit/7d9e902), [06ebaf2](https://github.com/facebook/react-native/commit/06ebaf2), [6882132](https://github.com/facebook/react-native/commit/6882132), and [193a2bd](https://github.com/facebook/react-native/commit/193a2bd) by [@shergin](https://github.com/shergin))
- Progress towards experimental ReactFabric and FabricUIManager ([b1e5c01](https://github.com/facebook/react-native/commit/b1e5c01), [fa0ac92](https://github.com/facebook/react-native/commit/fa0ac92), [94dac23](https://github.com/facebook/react-native/commit/94dac23) by [@fkgozali](https://github.com/fkgozali))
- (almost) kill fbjsc ([702b7e8](https://github.com/facebook/react-native/commit/702b7e8) by [@michalgr](https://github.com/michalgr))
- Refactored bridge ReadableNativeMap and ReadableNativeArray to add centralized accesses ([7891805](https://github.com/facebook/react-native/commit/7891805), [28be33a](https://github.com/facebook/react-native/commit/28be33a), and [5649aed](https://github.com/facebook/react-native/commit/5649aed))
- Removed unused core from Image.android.js ([ce3146a](https://github.com/facebook/react-native/commit/ce3146a) by [@shergin](https://github.com/shergin))
- Capture StackOverflowExceptions triggered when drawing a ReactViewGroup or ReactRootView and log more debugging information for it ([1aac962](https://github.com/facebook/react-native/commit/1aac962) and [4d3519c](https://github.com/facebook/react-native/commit/4d3519c) by [@mdvacca](https://github.com/mdvacca))
- `babel-preset-react-native`: only require plugins once ([df6c48c](https://github.com/facebook/react-native/commit/df6c48c) by [@davidaurelio](https://github.com/davidaurelio))
- Report module id as string and as double, in case of invalid values are passed to nativeRequire ([8f358a2](https://github.com/facebook/react-native/commit/8f358a2) by [@fromcelticpark](https://github.com/fromcelticpark))
- More work moving build configurations to Skylark ([d3db764](https://github.com/facebook/react-native/commit/d3db764), [869866c](https://github.com/facebook/react-native/commit/869866c), [a8c95d2](https://github.com/facebook/react-native/commit/a8c95d2), and [79a63d0](https://github.com/facebook/react-native/commit/79a63d0) by [@mzlee](https://github.com/mzlee), [@ttsugriy](https://github.com/ttsugriy), and others)
- `[RCTShadowView isHidden]` was removed ([c19bc79](https://github.com/facebook/react-native/commit/c19bc79) by [@shergin](https://github.com/shergin))
- Remove unused `packagerInstance` option and rename it to `server` ([bbbc18c](https://github.com/facebook/react-native/commit/bbbc18c))
- The blog has moved to [react-native-website](https://github.com/facebook/react-native-website/tree/master/website/blog) ([e16d673](https://github.com/facebook/react-native/commit/e16d673) by [@hramos](https://github.com/hramos))
- Remove SoLoaderShim, use SoLoader ([fc6dd78](https://github.com/facebook/react-native/commit/fc6dd78) by [@foghina](https://github.com/foghina))
- Removed broken link for 'Getting Help' in the README ([b3a306a](https://github.com/facebook/react-native/commit/b3a306a) by [@rickydam](https://github.com/rickydam))
- Changed to use boost-for-react-native cocoapod, which speeds up `pod install` a ton; this was in 0.53 originally but had to be re-added ([d40db3a](https://github.com/facebook/react-native/commit/d40db3a) by [@CFKevinRef](https://github.com/CFKevinRef))
- Remove fbobjc's RN copy ([af0c863](https://github.com/facebook/react-native/commit/af0c863))
- Measure time to create **ReactInstanceManager** ([6224ef5](https://github.com/facebook/react-native/commit/6224ef5) by [@alexeylang](https://github.com/alexeylang))
- Upgrade create-react-class to v15.6.3 ([74f3866](https://github.com/facebook/react-native/commit/74f3866) by [@bvaughn](https://github.com/bvaughn))
- Upgrade react-devtools to v3.1.0 ([8235a49](https://github.com/facebook/react-native/commit/8235a49) by [@bvaughn](https://github.com/bvaughn))
- Upgrade flow to v0.65.0 ([7aba456](https://github.com/facebook/react-native/commit/7aba456) and [298f3bb](https://github.com/facebook/react-native/commit/298f3bb) by [@avikchaudhuri](https://github.com/avikchaudhuri) and [@mroch](https://github.com/mroch))
- Upgrade Jest to v22.2.1 ([46f4d3e](https://github.com/facebook/react-native/commit/46f4d3e) and [24e521c](https://github.com/facebook/react-native/commit/24e521c) by [@mjesun](https://github.com/mjesun))
- Upgrade ESLint to v4.17.0 (plus update related deps) ([bba19e8](https://github.com/facebook/react-native/commit/bba19e8) by [@zertosh](https://github.com/zertosh))
- Upgrade React to v16.3.0-alpha.1 ([03d7b2a](https://github.com/facebook/react-native/commit/03d7b2a) and [5e80d95](https://github.com/facebook/react-native/commit/5e80d95) by [@grabbou](https://github.com/grabbou) and [@hramos](https://github.com/hramos))
- Synced React and ReactFabric render ([c7ed03a](https://github.com/facebook/react-native/commit/c7ed03a), [1382975](https://github.com/facebook/react-native/commit/1382975), and [d676746](https://github.com/facebook/react-native/commit/d676746) by [@bvaughn](https://github.com/bvaughn))
- Upgrade metro to v0.26.0 ([9e6f3b8](https://github.com/facebook/react-native/commit/9e6f3b8), [ce50f25](https://github.com/facebook/react-native/commit/ce50f25), [e9b83e6](https://github.com/facebook/react-native/commit/e9b83e6), [2fe7483](https://github.com/facebook/react-native/commit/2fe7483), [0f96ebd](https://github.com/facebook/react-native/commit/0f96ebd), [0de470e](https://github.com/facebook/react-native/commit/0de470e), [e8893a0](https://github.com/facebook/react-native/commit/e8893a0), and [f4fde9d](https://github.com/facebook/react-native/commit/f4fde9d) by [@rafeca](https://github.com/rafeca) and [@grabbou](https://github.com/grabbou))
- Add Context to Redbox report api ([e3c27f5](https://github.com/facebook/react-native/commit/e3c27f5) by [@ayc1](https://github.com/ayc1))
- GitHub bot commands have been disabled in the short term ([b973fe4](https://github.com/facebook/react-native/commit/b973fe4) by [@hramos](https://github.com/hramos))
- Various CI configuration changes ([17bd6c8](https://github.com/facebook/react-native/commit/17bd6c8), [51b6749](https://github.com/facebook/react-native/commit/51b6749), [a2f3ba8](https://github.com/facebook/react-native/commit/a2f3ba8), [2ef9b7f](https://github.com/facebook/react-native/commit/2ef9b7f), [40b1792](https://github.com/facebook/react-native/commit/40b1792), [613afba](https://github.com/facebook/react-native/commit/613afba), [da8bec9](https://github.com/facebook/react-native/commit/da8bec9), [fa11fae](https://github.com/facebook/react-native/commit/fa11fae), [f50af7f](https://github.com/facebook/react-native/commit/f50af7f), [9227ba7](https://github.com/facebook/react-native/commit/9227ba7), [365a4d4](https://github.com/facebook/react-native/commit/365a4d4), [b58d848](https://github.com/facebook/react-native/commit/b58d848), [c8e98bb](https://github.com/facebook/react-native/commit/c8e98bb), [f5975a9](https://github.com/facebook/react-native/commit/f5975a9), and [605a6e4](https://github.com/facebook/react-native/commit/605a6e4) by [@hramos](https://github.com/hramos), [@grabbou](https://github.com/grabbou), and [@dryganets](https://github.com/dryganets))
- Restore copyright header ([4f883bd](https://github.com/facebook/react-native/commit/4f883bd) by [@hramos](https://github.com/hramos))
- Trim docs that are already present in the open source docs site ([28d60b6](https://github.com/facebook/react-native/commit/28d60b6) by [@hramos](https://github.com/hramos))
- Fix obsolete instructions about editing docs ([2f46712](https://github.com/facebook/react-native/commit/2f46712) by [@ExplodingCabbage](https://github.com/ExplodingCabbage))
- Fix links to beginner friendly issues ([c355a34](https://github.com/facebook/react-native/commit/c355a34) by [@hotchemi](https://github.com/hotchemi))
- Typos in comments and log messages ([d2c5697](https://github.com/facebook/react-native/commit/d2c5697) by [@ss18](https://github.com/ss18))
- Don't run the Danger CI tool through Flow ([1ea3065](https://github.com/facebook/react-native/commit/1ea3065) by [@hramos](https://github.com/hramos))
- Namespace custom ESLint rules through eslint-plugin-lint ([488b682](https://github.com/facebook/react-native/commit/488b682) by [@zertosh](https://github.com/zertosh))

- ... and now we're at 0.54 🎉 ([67e67ec](https://github.com/facebook/react-native/commit/67e67ec), [21dd3dd](https://github.com/facebook/react-native/commit/21dd3dd), [49e35bd](https://github.com/facebook/react-native/commit/49e35bd), [829f675](https://github.com/facebook/react-native/commit/829f675), and [294d95a](https://github.com/facebook/react-native/commit/294d95a) by [@grabbou](https://github.com/grabbou) and [@hramos](https://github.com/hramos))

## [0.53]

Welcome to the January 2018 release of React Native. The CLI now supports `--port` for both platforms, a few components were made to support consistent props across both platforms, and various fixes were made. There was a lot of under-the-cover work done with more test improvements and dependency updates. 118 commits were made by 43 contributors 🎉.

### Added

- ✨ **Keyboard** events now include `easing` and `duration` ([4d33080](https://github.com/facebook/react-native/commit/4d33080) by [@sahrens](https://github.com/sahrens))

#### iOS exclusive additions

- `react-native run-ios` now supports the `--port` argument for metro ([33d710e](https://github.com/facebook/react-native/commit/33d710e))

#### Android exclusive additions

- On Android, **ScrollView** now takes `snapToInterval` like iOS ([ddd65f1](https://github.com/facebook/react-native/commit/ddd65f1) and [b2848a5](https://github.com/facebook/react-native/commit/b2848a5) )
- On Android, **TextInput** now takes `onKeyPress` like iOS ([c9ff0bc](https://github.com/facebook/react-native/commit/c9ff0bc) by [@joshyhargreaves](https://github.com/joshyhargreaves))

### Changed

- ⬆️ Metro to v0.24.2 ([2e008bc](https://github.com/facebook/react-native/commit/2e008bc) and [0b5e8b4](https://github.com/facebook/react-native/commit/0b5e8b4) by [@rafeca](https://github.com/rafeca))
- ⬆️ Flow to v0.63 ([6b95c4f](https://github.com/facebook/react-native/commit/6b95c4f) by [@gabelevi](https://github.com/gabelevi))
- ⬆️ Danger to v2.0 ([b750e3b](https://github.com/facebook/react-native/commit/b750e3b) by [@hramos](https://github.com/hramos))
- ⬆️ Jest to v22.0.0 ([4803419](https://github.com/facebook/react-native/commit/4803419) by [@mjesun](https://github.com/mjesun))
- 💄 Bundler is now called Metro Bundler in the terminal ([654d759](https://github.com/facebook/react-native/commit/654d759) by [@edcs](https://github.com/edcs))
- 📝 Update getting started url on Android CLI ([6661633](https://github.com/facebook/react-native/commit/6661633))
- 🐳 Dockerfile uses newest Android SDK, Buck, and new Docker tags have been pushed ([4fbfbe6](https://github.com/facebook/react-native/commit/4fbfbe6) and [c547f78](https://github.com/facebook/react-native/commit/c547f78) by [@hramos](https://github.com/hramos))
- 📝 Update repo docs to use HTTPS ([33a2e53](https://github.com/facebook/react-native/commit/33a2e53) by [@him2him2](https://github.com/him2him2))
- 🎨 Make **ScrollResponder** follow code style ([45e6fcd](https://github.com/facebook/react-native/commit/45e6fcd) by [@TheSavior](https://github.com/TheSavior))
- **VirtualizedList** now requires a windowSize greater than 0 ([3559e42](https://github.com/facebook/react-native/commit/3559e42))
- react-devtools works with emulator and real devices now without needing to tweak the devServer value ([fa574c6](https://github.com/facebook/react-native/commit/fa574c6) by [@jhen0409](https://github.com/jhen0409))
- 📝 Clarify use of Flow props types in react-native-cli's template project ([9b147a5](https://github.com/facebook/react-native/commit/9b147a5) by [@hramos](https://github.com/hramos))
- 📝 Add docs for `isInspectable` ([59c7967](https://github.com/facebook/react-native/commit/59c7967) by [@bnham](https://github.com/bnham))
- ✅ More Flow improvements (**Text**, **SectionList**, and others) ([f71f4e7](https://github.com/facebook/react-native/commit/f71f4e7), [632f120](https://github.com/facebook/react-native/commit/632f120), and [a8391bd](https://github.com/facebook/react-native/commit/a8391bd) by [@yungsters](https://github.com/yungsters), [@samwgoldman](https://github.com/samwgoldman), and others)
- Various code cleanup to satisfy linting errors and standards ([b0319f3](https://github.com/facebook/react-native/commit/b0319f3), [dd46117](https://github.com/facebook/react-native/commit/dd46117), and [7f58189](https://github.com/facebook/react-native/commit/7f58189) by [@ayc1](https://github.com/ayc1), [@grabbou](https://github.com/grabbou), and [@ide](https://github.com/ide))

#### iOS exclusive changes

- 🔥⚡️ iOS UI Manager cleanup and optimizations ([7d1deda](https://github.com/facebook/react-native/commit/7d1deda), [0ae4c47](https://github.com/facebook/react-native/commit/0ae4c47), [2679f3e](https://github.com/facebook/react-native/commit/2679f3e),and [d9e5b31](https://github.com/facebook/react-native/commit/d9e5b31) by [@shergin](https://github.com/shergin))
- If the inspector tries to handle a wrapped event but there is no connection, log a warning rather than a Redbox ([30da262](https://github.com/facebook/react-native/commit/30da262) by [@bnham](https://github.com/bnham))
- Various under-the-covers changes around the bridge, RCTShadowView, RCTSurface, and a few others ([c3139d7](https://github.com/facebook/react-native/commit/c3139d7), [2789ba0](https://github.com/facebook/react-native/commit/2789ba0), [b8e60a3](https://github.com/facebook/react-native/commit/b8e60a3), [099b280](https://github.com/facebook/react-native/commit/099b280), [b263560](https://github.com/facebook/react-native/commit/b263560), [19a9c5e](https://github.com/facebook/react-native/commit/19a9c5e), [d3b41e0](https://github.com/facebook/react-native/commit/d3b41e0), [b2a2519](https://github.com/facebook/react-native/commit/b2a2519), [870bc48](https://github.com/facebook/react-native/commit/870bc48), [176a578](https://github.com/facebook/react-native/commit/176a578), [c491b22](https://github.com/facebook/react-native/commit/c491b22), [c756122](https://github.com/facebook/react-native/commit/c756122), and[c01a171](https://github.com/facebook/react-native/commit/c01a171) by [@shergin](https://github.com/shergin))
- Changed to use _boost-for-react-native_ cocoapod, which speeds up `pod install` a ton ([cf19833](https://github.com/facebook/react-native/commit/cf19833) by [@CFKevinRef](https://github.com/CFKevinRef))

#### Android exclusive changes

- Include scroll momentum info when there are scroll events from Android ([c49d249](https://github.com/facebook/react-native/commit/c49d249) by [@wwalser](https://github.com/wwalser))
- Yoga's mkfile for Android now uses wildcard instead of manual file addition ([d89901f](https://github.com/facebook/react-native/commit/d89901f) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))

### Removed

- **TextInput** no longer has the `autoGrow` prop, since this is platform-default behavior now ([dabb78b](https://github.com/facebook/react-native/commit/dabb78b) by [@shergin](https://github.com/shergin))

#### iOS exclusive removals

- Updates to the bridge in order to enable future rendering optimizations ([d2dc451](https://github.com/facebook/react-native/commit/d2dc451) by [@shergin](https://github.com/shergin))

### Fixed

- Do not set `minify=true` when calculating the list of dependencies for the CLI ([4a1bb8f](https://github.com/facebook/react-native/commit/4a1bb8f) by [@rafeca](https://github.com/rafeca))
- 👷 Update CODEOWNERS now that the docs are in a separate repository ([85ff264](https://github.com/facebook/react-native/commit/85ff264) by [@hramos](https://github.com/hramos))
- Fixed a broken link in react-native-git-upgrade's readme ([bbedf2d](https://github.com/facebook/react-native/commit/bbedf2d) by [@Taym95](https://github.com/Taym95))
- 🤡 Do not use Node 8.x specific Stream.final for FS mocks ([4216cde](https://github.com/facebook/react-native/commit/4216cde) by [@hramos](https://github.com/hramos))
- Fix virtualized cell keys for list headers and footers ([a010a0c](https://github.com/facebook/react-native/commit/a010a0c))
- Fix warnings of casting and null pointer handling in Yoga ([a8d4666](https://github.com/facebook/react-native/commit/a8d4666) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Fix broken buck failures on master ([4e76701](https://github.com/facebook/react-native/commit/4e76701) by [@hramos](https://github.com/hramos))
- **RefreshControl** appears correctly when expected on initial render of a **FlatList** again ([9b877d6](https://github.com/facebook/react-native/commit/9b877d6) by [@vonovak](https://github.com/vonovak))
- Fixed JS debugger CORS issue ([df8da3b](https://github.com/facebook/react-native/commit/df8da3b) by [@njbmartin](https://github.com/njbmartin))

#### Android exclusive fixes

- Fix position of dev loading view on Android API < 20 ([7ff6657](https://github.com/facebook/react-native/commit/7ff6657) by [@kmagiera](https://github.com/kmagiera))
- Fix Modal not disappearing when navigating from inside a Modal to another activity ([e5c2a66](https://github.com/facebook/react-native/commit/e5c2a66)

#### iOS exclusive fixes

- Fix regression introduced where layout wouldn't occur in some situations ([46be5bf](https://github.com/facebook/react-native/commit/46be5bf) by [@shergin](https://github.com/shergin))
- Fixed double initial prop applying for newly created views ([0ec1017](https://github.com/facebook/react-native/commit/0ec1017) by [@shergin](https://github.com/shergin))
- tvOS build now works again ([3bd8986](https://github.com/facebook/react-native/commit/3bd8986) by [@dlowder-salesforce](https://github.com/dlowder-salesforce))

### Other

Below is a list of the remaining, low-level changes that made it into this release of React Native.

- Remove "prepareReact" call from the bridge ([80f9e1f](https://github.com/facebook/react-native/commit/80f9e1f) and [56a42e5](https://github.com/facebook/react-native/commit/56a42e5) by [@fromcelticpark](https://github.com/fromcelticpark))
- Add explicit componentControllerClass to CKComponent for RCTSurface ([ab97270](https://github.com/facebook/react-native/commit/ab97270))
- Changes to RCTShadowView to increase RCTSurface performance ([f96f9c5](https://github.com/facebook/react-native/commit/f96f9c5) by [@shergin](https://github.com/shergin))
- Designated methods to control dirty propagation ([af226ef](https://github.com/facebook/react-native/commit/af226ef) by [@shergin](https://github.com/shergin))
- Add missing tvOS header ([49cbca7](https://github.com/facebook/react-native/commit/49cbca7) by [@grabbou](https://github.com/grabbou))
- On Android, seperate logic to initialize JS from starting the app ([4996b9a](https://github.com/facebook/react-native/commit/4996b9a) by [@axe-fb](https://github.com/axe-fb))
- ♻️ JS linting was cleaned up: removed unused libs, strengthened the rules, removed unneeded rules, prevent disabled tests, and more ([2815ada](https://github.com/facebook/react-native/commit/2815ada), [183c316](https://github.com/facebook/react-native/commit/183c316), [9c67e74](https://github.com/facebook/react-native/commit/9c67e74), [79902f9](https://github.com/facebook/react-native/commit/79902f9), [9a36872](https://github.com/facebook/react-native/commit/9a36872), [67a3c42](https://github.com/facebook/react-native/commit/67a3c42), [b826596](https://github.com/facebook/react-native/commit/b826596), [a1a0a69](https://github.com/facebook/react-native/commit/a1a0a69), and [11a495c](https://github.com/facebook/react-native/commit/11a495c) by [@TheSavior](https://github.com/TheSavior))
- 👷 Separate JS lint and flow checks from tests ([5ea5683](https://github.com/facebook/react-native/commit/5ea5683) by [@hramos](https://github.com/hramos))
- 👷 Fix Buck in build config to enable CI ([796122d](https://github.com/facebook/react-native/commit/796122d), [7c3a61f](https://github.com/facebook/react-native/commit/7c3a61f), [82b123e](https://github.com/facebook/react-native/commit/82b123e) by [@grabbou](https://github.com/grabbou))
- ♻️ Various refactoring within the YGNode implementation ([28968e2](https://github.com/facebook/react-native/commit/28968e2), [0a9e652](https://github.com/facebook/react-native/commit/0a9e652), [6627d77](https://github.com/facebook/react-native/commit/6627d77), and [d85da86](https://github.com/facebook/react-native/commit/d85da86), [a163f70](https://github.com/facebook/react-native/commit/a163f70) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Fix ReactLegacy and delete RCTViewControllerProtocol ([a0ff8c7](https://github.com/facebook/react-native/commit/a0ff8c7) by [@javache](https://github.com/javache))
- Define internal FB macro for OSS builds; remove some unused definitions ([077c3ab](https://github.com/facebook/react-native/commit/077c3ab) and ([a6a66c5](https://github.com/facebook/react-native/commit/a6a66c5) by [@ttsugriy](https://github.com/ttsugriy))
- RNTester: Relax Bridge Release Check ([e3c6f38](https://github.com/facebook/react-native/commit/e3c6f38) by [@yungsters](https://github.com/yungsters))
- Remove embeddedBundleURL from the asset resolver ([489b98b](https://github.com/facebook/react-native/commit/489b98b))
- Do not set FB_ASSERTION_ENABLED ([4cdbb77](https://github.com/facebook/react-native/commit/4cdbb77) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- JSBigString to MAP_PRIVATE not MAP_SHARED ([f9f40cd](https://github.com/facebook/react-native/commit/f9f40cd))
- Fixed black ARTSurfaceView ([5c8481e](https://github.com/facebook/react-native/commit/5c8481e) by [@shergin](https://github.com/shergin))
- Kill orphaned marker end in JSCExecutor ([6ad1f09](https://github.com/facebook/react-native/commit/6ad1f09) by [@michalgr](https://github.com/michalgr))
- Make YGNode as c++ struct with properties exposed through accessors ([f1055bc](https://github.com/facebook/react-native/commit/f1055bc) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- 🔖 ...and now we're at 0.53.0-rc.0 🎁 ([0b99657](https://github.com/facebook/react-native/commit/0b99657) by [@grabbou](https://github.com/grabbou))

## [0.52.0] - 2018-01-07

> This changelog has been prepared by Ryan Turner (@turnrye) - thank you for
> your time and making such a detailed changelog 🔥🔥

This release had a lot of work around the bundler and packager, a ton of
bugfixes, and updates to many of React Native's dependencies. Lots of
under-the-hood work was done as well to improve the layout engine. Happy new
year!

> If you would like to help us with the next release changelog, please contact
> @grabbou

### Added

- Prettier has a config and an npm script; try it out with `npm run prettier`
  ([1645912](https://github.com/facebook/react-native/commit/1645912) by
  [@janicduplessis](https://github.com/janicduplessis))
- **Debug JS in Nuclide** is now an option in the dev menu 🐜
  ([7c7108a](https://github.com/facebook/react-native/commit/7c7108a) and
  [de424cc](https://github.com/facebook/react-native/commit/de424cc))
- Introducing **PlatformOS** – it looks a lot like **Platform**, but with a
  simplified API
  ([5ee27ff](https://github.com/facebook/react-native/commit/5ee27ff) by
  [@brishin](https://github.com/brishin))
- New experimental _RCTSurface_: measure and layout a UI in a thread-safe and
  synchronous manner
  ([be6976d](https://github.com/facebook/react-native/commit/be6976d),
  [7df58e2](https://github.com/facebook/react-native/commit/7df58e2),
  [e75bd87](https://github.com/facebook/react-native/commit/e75bd87),
  [aa83b5a](https://github.com/facebook/react-native/commit/aa83b5a),
  [081f7d1](https://github.com/facebook/react-native/commit/081f7d1),
  [da17b23](https://github.com/facebook/react-native/commit/da17b23),
  [e9e0cd7](https://github.com/facebook/react-native/commit/e9e0cd7),
  [43b2509](https://github.com/facebook/react-native/commit/43b2509),
  [ba60751](https://github.com/facebook/react-native/commit/ba60751),
  [d71d28f](https://github.com/facebook/react-native/commit/d71d28f),
  [4d37cf0](https://github.com/facebook/react-native/commit/4d37cf0), and
  [d021dd2](https://github.com/facebook/react-native/commit/d021dd2) by
  [@maicki](https://github.com/maicki) and
  [@shergin](https://github.com/shergin))
- Experimental **SwipeableRow**'s datasource now has a `getLastRowID` method
  ([d79e245](https://github.com/facebook/react-native/commit/d79e245))
- [React Native monthly
  #5](https://facebook.github.io/react-native/blog/2017/11/06/react-native-monthly-5.html)
  was added ([3c5a55d](https://github.com/facebook/react-native/commit/3c5a55d)
  by [@tenodi](https://github.com/tenodi))

#### iOS Specific

- **DatePickerIOS** now takes **locale** 🌍
  ([fd9c361](https://github.com/facebook/react-native/commit/fd9c361) by
  [@RobertPaul01](https://github.com/RobertPaul01))
- **CameraRoll** can now **deletePhotos** 📸
  ([554e873](https://github.com/facebook/react-native/commit/554e873) by
  [@fxfactorial](https://github.com/fxfactorial))
- There's now an API to specify a different directory for iOS image assets
  ([8f9b291](https://github.com/facebook/react-native/commit/8f9b291))
- Support for [custom accessibility
  actions](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction)
  on iOS ([36ad813](https://github.com/facebook/react-native/commit/36ad813) by
  [@ericdavmsft](https://github.com/ericdavmsft))

### Deprecated

- Ignore YellowBox warnings with `YellowBox.ignoreWarnings([...])` rather than
  `console.ignoredYellowBox = [...]`
  ([26038f5](https://github.com/facebook/react-native/commit/26038f5) by
  [@wli](https://github.com/wli))

### Changed

- Metro-bundler is now metro, and it's v0.24.1; there were some performance
  increases at the cost of a few breaking changes; improved tests of the bundler
  too ([0bbd9f0](https://github.com/facebook/react-native/commit/0bbd9f0),
  [a2fd3fc](https://github.com/facebook/react-native/commit/a2fd3fc),
  [503b452](https://github.com/facebook/react-native/commit/503b452),
  [654fed4](https://github.com/facebook/react-native/commit/654fed4),
  [0091496](https://github.com/facebook/react-native/commit/0091496),
  [aba148f](https://github.com/facebook/react-native/commit/aba148f),
  [3d5dc87](https://github.com/facebook/react-native/commit/3d5dc87),
  [48019a0](https://github.com/facebook/react-native/commit/48019a0),
  [ecec431](https://github.com/facebook/react-native/commit/ecec431),
  [f4d627c](https://github.com/facebook/react-native/commit/f4d627c),
  [f871d25](https://github.com/facebook/react-native/commit/f871d25),
  [a7b231a](https://github.com/facebook/react-native/commit/a7b231a),
  [830b431](https://github.com/facebook/react-native/commit/830b431),
  [29dafa1](https://github.com/facebook/react-native/commit/29dafa1),
  [7a5d5a4](https://github.com/facebook/react-native/commit/7a5d5a4),
  [4cd685a](https://github.com/facebook/react-native/commit/4cd685a),
  [d326c86](https://github.com/facebook/react-native/commit/d326c86),
  [231c7a0](https://github.com/facebook/react-native/commit/231c7a0),
  [7d969a0](https://github.com/facebook/react-native/commit/7d969a0),
  [ae51730](https://github.com/facebook/react-native/commit/ae51730),
  [f587f8d](https://github.com/facebook/react-native/commit/f587f8d),
  [fbf0aed](https://github.com/facebook/react-native/commit/fbf0aed),
  [e9393f6](https://github.com/facebook/react-native/commit/e9393f6), and
  [968c88d](https://github.com/facebook/react-native/commit/968c88d) by
  [@cpojer](https://github.com/cpojer), [@hramos](https://github.com/hramos),
  [@jeanlauliac](https://github.com/jeanlauliac), and
  [@rafeca](https://github.com/rafeca)
  )
- React is now v16.2.0, and it took react-test-renderer along with it; [now with
  more
  fragments!](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)
  🎉 ([c7f3707](https://github.com/facebook/react-native/commit/c7f3707) and
  [cd938d7](https://github.com/facebook/react-native/commit/cd938d7) by
  [@bvaughn](https://github.com/bvaughn))
- Jest is now v21.3.0-beta.13
  ([16bbd90](https://github.com/facebook/react-native/commit/16bbd90) and
  [ec2ea58](https://github.com/facebook/react-native/commit/ec2ea58) by
  [@mjesun](https://github.com/mjesun))
- Flow is now v0.61.0, and there were a ton of Flow fixes/coverage improvements
  made ([914ae93](https://github.com/facebook/react-native/commit/914ae93),
  [eb0d647](https://github.com/facebook/react-native/commit/eb0d647),
  [c8e72bb](https://github.com/facebook/react-native/commit/c8e72bb),
  [2d4bedb](https://github.com/facebook/react-native/commit/2d4bedb),
  [e0202e4](https://github.com/facebook/react-native/commit/e0202e4),
  [2be3ae1](https://github.com/facebook/react-native/commit/2be3ae1),
  [22a1419](https://github.com/facebook/react-native/commit/22a1419),
  [6ae0b34](https://github.com/facebook/react-native/commit/6ae0b34),
  [76a2ca4](https://github.com/facebook/react-native/commit/76a2ca4),
  [3259353](https://github.com/facebook/react-native/commit/3259353),
  [e6c1fb7](https://github.com/facebook/react-native/commit/e6c1fb7),
  [61d046b](https://github.com/facebook/react-native/commit/61d046b),
  [820cfa1](https://github.com/facebook/react-native/commit/820cfa1),
  [240039c](https://github.com/facebook/react-native/commit/240039c),
  [343c5a9](https://github.com/facebook/react-native/commit/343c5a9),
  [5f8d8e9](https://github.com/facebook/react-native/commit/5f8d8e9), and
  [da04796](https://github.com/facebook/react-native/commit/da04796) by
  [@Ashoat](https://github.com/Ashoat),
  [@calebmer](https://github.com/calebmer),
  [@cdlewis](https://github.com/cdlewis),
  [@deecewan](https://github.com/deecewan),
  [@grabbou](https://github.com/grabbou),
  [@jamesisaac](https://github.com/jamesisaac),
  [@mroch](https://github.com/mroch), [@nmn](https://github.com/nmn),
  [@nmote](https://github.com/nmote), [@sahrens](https://github.com/sahrens),
  [@samwgoldman](https://github.com/samwgoldman),
  [@TheSavior](https://github.com/TheSavior), and others)
- react-devtools-core is now v3.0.0
  ([a7d46ea](https://github.com/facebook/react-native/commit/a7d46ea) by
  [@rsnara](https://github.com/rsnara))
- Split out docs to [their own
  repo](https://github.com/facebook/react-native-website/tree/master/docs) (and
  a few formatting fixes along the journey) 👋
  ([2d86618](https://github.com/facebook/react-native/commit/2d86618),
  [64d80b1](https://github.com/facebook/react-native/commit/64d80b1),
  [3362da4](https://github.com/facebook/react-native/commit/3362da4),
  [75123c6](https://github.com/facebook/react-native/commit/75123c6), and
  [79e24ed](https://github.com/facebook/react-native/commit/79e24ed) by
  [@hramos](https://github.com/hramos)).
- **TouchableHighlight** now has a default delayPressOut value of 100; it was
  also refactored a bit for style
  ([ee8a7b4](https://github.com/facebook/react-native/commit/ee8a7b4) by
  [@sahrens](https://github.com/sahrens))
- When in a dev build, more robustly validate arguments for native methods
  ([ea2e2c5](https://github.com/facebook/react-native/commit/ea2e2c5) by
  [@mhorowitz](https://github.com/mhorowitz))
- On integration tests, report _all_ errors
  ([3bcb912](https://github.com/facebook/react-native/commit/3bcb912) by
  [@sahrens](https://github.com/sahrens))
- Yoga has less technical debt, thanks to replacing _YGNodeList_ with vectors
  ([b08a912](https://github.com/facebook/react-native/commit/b08a912) by
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Yoga is now cpp, compiled as _c++1y_
  ([d7ab949](https://github.com/facebook/react-native/commit/d7ab949) by
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Bundle segments are handled better and used more
  ([6812789](https://github.com/facebook/react-native/commit/6812789),
  [a47431e](https://github.com/facebook/react-native/commit/a47431e),
  [963c61d](https://github.com/facebook/react-native/commit/963c61d),
  [b9f21dc](https://github.com/facebook/react-native/commit/b9f21dc),
  [f125818](https://github.com/facebook/react-native/commit/f125818), and
  [1988ba1](https://github.com/facebook/react-native/commit/1988ba1) by
  [@fromcelticpark](https://github.com/fromcelticpark) and
  [@jeanlauliac](https://github.com/jeanlauliac))
- _packager-worker-for-buck_ has better tests
  ([7fd5aa8](https://github.com/facebook/react-native/commit/7fd5aa8) by
  [@jeanlauliac](https://github.com/jeanlauliac))
- _RCTUIManager_ has less technical debt
  ([71b498b](https://github.com/facebook/react-native/commit/71b498b),
  [60dc9be](https://github.com/facebook/react-native/commit/60dc9be), and
  [21714fe](https://github.com/facebook/react-native/commit/21714fe) by
  [@shergin](https://github.com/shergin))
- Numerous bridge changes, especially around URL resolution
  ([e7bd0f0](https://github.com/facebook/react-native/commit/e7bd0f0),
  [260e6d2](https://github.com/facebook/react-native/commit/260e6d2),
  [4894ac4](https://github.com/facebook/react-native/commit/4894ac4),
  [b983de9](https://github.com/facebook/react-native/commit/b983de9),
  [b0193b0](https://github.com/facebook/react-native/commit/b0193b0),
  [ae5ef65](https://github.com/facebook/react-native/commit/ae5ef65), and
  [1d6ce23](https://github.com/facebook/react-native/commit/1d6ce23) by
  [@fromcelticpark](https://github.com/fromcelticpark) and others)
- Various cleanup and refactoring
  ([0537763](https://github.com/facebook/react-native/commit/0537763),
  [0984f29](https://github.com/facebook/react-native/commit/0984f29),
  [6c70975](https://github.com/facebook/react-native/commit/6c70975),
  [d950dc6](https://github.com/facebook/react-native/commit/d950dc6),
  [70c3590](https://github.com/facebook/react-native/commit/70c3590),
  [cfa2bbf](https://github.com/facebook/react-native/commit/cfa2bbf), and
  [850efa8](https://github.com/facebook/react-native/commit/850efa8) by
  [@bnham](https://github.com/bnham),
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar), and others)
- Jest preprocessing now uses the AST from metro
  ([2ae255a](https://github.com/facebook/react-native/commit/2ae255a) and
  [d5b5951](https://github.com/facebook/react-native/commit/d5b5951) by
  [@rafeca](https://github.com/rafeca))
- `renderApplication()` now supports async initial render
  ([1b22d49](https://github.com/facebook/react-native/commit/1b22d49) by
  [@bvaughn](https://github.com/bvaughn))
- Welcome [@lwinkyawmyat](https://github.com/lwinkyawmyat) to the React Native
  GitHub Issue Task Force
  ([4ebe76d](https://github.com/facebook/react-native/commit/4ebe76d) by
  [@lwinkyawmyat](https://github.com/lwinkyawmyat))

#### Android exclusive changes

- Native components on Android register lazily rather than via ViewManager
  ([1b71e03](https://github.com/facebook/react-native/commit/1b71e03))
- Android debug overlays (like **RedBox**, dev menu, loading) are no longer are
  system overlays; they're now part of the _currentActivity_
  ([d19afc7](https://github.com/facebook/react-native/commit/d19afc7) by
  [@kmagiera](https://github.com/kmagiera))

#### iOS exclusive changes

- Improve iOS's _accessibilityLabel_ performance by up to 20% 📈
  ([19b0a65](https://github.com/facebook/react-native/commit/19b0a65) by
  [@chendo](https://github.com/chendo))

### Fixed

- Fix `backgroundColor` on **TouchableHighlight**
  ([5a1171e](https://github.com/facebook/react-native/commit/5a1171e) by
  [@sahrens](https://github.com/sahrens))
- Various corrections in messages, comments, and docblocks
  ([58c3bc4](https://github.com/facebook/react-native/commit/58c3bc4),
  [354e1cb](https://github.com/facebook/react-native/commit/354e1cb),
  [58edf02](https://github.com/facebook/react-native/commit/58edf02),
  [b9e7006](https://github.com/facebook/react-native/commit/b9e7006),
  [d2f0abd](https://github.com/facebook/react-native/commit/d2f0abd),
  [94cd9f5](https://github.com/facebook/react-native/commit/94cd9f5),
  [8547b7e](https://github.com/facebook/react-native/commit/8547b7e),
  [44c1649](https://github.com/facebook/react-native/commit/44c1649),
  [c91d872](https://github.com/facebook/react-native/commit/c91d872),
  [85503a0](https://github.com/facebook/react-native/commit/85503a0), and
  [5b83dbe](https://github.com/facebook/react-native/commit/5b83dbe) by
  [@behrends](https://github.com/behrends),
  [@bvaughn](https://github.com/bvaughn),
  [@charpeni](https://github.com/charpeni),
  [@dsandmark](https://github.com/dsandmark),
  [@gusgard](https://github.com/gusgard),
  [@nkabrown](https://github.com/nkabrown),
  [@petterh](https://github.com/petterh), [@solon](https://github.com/solon),
  [@swashcap](https://github.com/swashcap), and others)
- Various dev doc and project doc fixes for correctness and completeness
  ([92c0980](https://github.com/facebook/react-native/commit/92c0980),
  [3c9092a](https://github.com/facebook/react-native/commit/3c9092a),
  [e906525](https://github.com/facebook/react-native/commit/e906525),
  [6082856](https://github.com/facebook/react-native/commit/6082856),
  [c49b97c](https://github.com/facebook/react-native/commit/c49b97c),
  [45ed142](https://github.com/facebook/react-native/commit/45ed142),
  [cb6ec7c](https://github.com/facebook/react-native/commit/cb6ec7c),
  [9ec9567](https://github.com/facebook/react-native/commit/9ec9567),
  [e5a4ea9](https://github.com/facebook/react-native/commit/e5a4ea9),
  [c544c0d](https://github.com/facebook/react-native/commit/c544c0d),
  [33d5e5b](https://github.com/facebook/react-native/commit/33d5e5b),
  [95dac8d](https://github.com/facebook/react-native/commit/95dac8d),
  [6e1db1f](https://github.com/facebook/react-native/commit/6e1db1f),
  [e11d496](https://github.com/facebook/react-native/commit/e11d496),
  [6da8979](https://github.com/facebook/react-native/commit/6da8979),
  [0ff5760](https://github.com/facebook/react-native/commit/0ff5760),
  [1ee64cc](https://github.com/facebook/react-native/commit/1ee64cc),
  [3aa3856](https://github.com/facebook/react-native/commit/3aa3856),
  [6b26971](https://github.com/facebook/react-native/commit/6b26971), and
  [de3976a](https://github.com/facebook/react-native/commit/de3976a) by
  [@adrianomelo](https://github.com/adrianomelo),
  [@blargity](https://github.com/blargity),
  [@charpeni](https://github.com/charpeni),
  [@garlic-rice-with-butter](https://github.com/garlic-rice-with-butter),
  [@gwmccull](https://github.com/gwmccull),
  [@harikrishnanp](https://github.com/harikrishnanp),
  [@hramos](https://github.com/hramos),
  [@johnthewilson](https://github.com/johnthewilson),
  [@jsdario](https://github.com/jsdario), [@kelset](https://github.com/kelset),
  [@patrickkempff](https://github.com/patrickkempff),
  [@ryanml](https://github.com/ryanml),
  [@tiagomoraismorgado88](https://github.com/tiagomoraismorgado88),
  [@timwangdev](https://github.com/timwangdev), and others)
- Stop `RCTRefreshControl` from jumping around
  ([2e1707d](https://github.com/facebook/react-native/commit/2e1707d) by
  [@sophiebits](https://github.com/sophiebits))
- Fix a race condition in the animation module
  ([515eb0e](https://github.com/facebook/react-native/commit/515eb0e) by
  [@mhorowitz](https://github.com/mhorowitz))
- Fix Windows local-cli's to not wrongfully identify as globally installed
  ([ca10604](https://github.com/facebook/react-native/commit/ca10604) by
  [@sballew](https://github.com/sballew))
- Fix Jest mocks for **NetInfo**, **Dimensions**, and **ScrollView** modules
  ([7fb3a92](https://github.com/facebook/react-native/commit/7fb3a92),
  [11a2a35](https://github.com/facebook/react-native/commit/11a2a35), and
  [0c8a3e4](https://github.com/facebook/react-native/commit/0c8a3e4) by
  [@alvaromb](https://github.com/alvaromb),
  [@timwangdev](https://github.com/timwangdev), and
  [@uk-ar](https://github.com/uk-ar))
- packager-worker-for-buck: `transformCommand`: add missing test
  ([73a01be](https://github.com/facebook/react-native/commit/73a01be) by
  [@jeanlauliac](https://github.com/jeanlauliac))
- Fixed issue where CLI wasn't following the config value for postMinifyProcess
  when its running with `dev=false`
  ([6d92046](https://github.com/facebook/react-native/commit/6d92046) by
  [@rafeca](https://github.com/rafeca))
- Fix asset resolver url handling
  ([28d5d6b](https://github.com/facebook/react-native/commit/28d5d6b) by
  [@fkgozali](https://github.com/fkgozali))
- Fix crash when destroying catalyst
  ([f101566](https://github.com/facebook/react-native/commit/f101566))
- You can now `justifyContent` while you're `minWidth`ing and `marginLeft`ing;
  before the justification wasn't honored
  ([f5beceb](https://github.com/facebook/react-native/commit/f5beceb) by
  [@woehrl01](https://github.com/woehrl01))
- `marginLeft: auto` and `alignItem: stretch` now play nicely together; before
  the width and height ended up incorrect
  ([5f99b1a](https://github.com/facebook/react-native/commit/5f99b1a) by
  [@woehrl01](https://github.com/woehrl01))
- Fix assertion preventing YGNodeLayoutGet\* with YGEdgeEnd
  ([a383b8c](https://github.com/facebook/react-native/commit/a383b8c) by
  [@justjake](https://github.com/justjake))
- Fix shrinking in non-strech alignments
  ([1d62848](https://github.com/facebook/react-native/commit/1d62848) by
  [@woehrl01](https://github.com/woehrl01))
- Correctly calculate min/max percentage constraints
  ([4fdaf2d](https://github.com/facebook/react-native/commit/4fdaf2d) by
  [@woehrl01](https://github.com/woehrl01))
- When running `react-native-git-upgrade`, don't execute git's hooks
  ([0182086](https://github.com/facebook/react-native/commit/0182086) by
  [@adrienthiery](https://github.com/adrienthiery))
- When running `react-native-git-upgrade` and failing with a signal, return that
  to the terminal
  ([b9a5862](https://github.com/facebook/react-native/commit/b9a5862) by
  [@mateusz-](https://github.com/mateusz-))
- In **KeyboardAvoidingView**, don't mistakenly try to layout when a hardware
  keyboard changes
  ([ad4450a](https://github.com/facebook/react-native/commit/ad4450a) by
  [@koenpunt](https://github.com/koenpunt))
- Don't endlessly collect websockets when not connected to the packager (dev
  memory leak)
  ([1e1e491](https://github.com/facebook/react-native/commit/1e1e491) by
  [@mmmulani](https://github.com/mmmulani))
- Fixed a bug in the sample project random `selection` prop that made it
  not-so-random
  ([766f020](https://github.com/facebook/react-native/commit/766f020) by
  [@rozele](https://github.com/rozele))

#### Android exclusive fixes

- Explicitly `#define isnan __builtin_isnan` for Android _clang-5_ to mimic
  **gcc**'s default behavior
  ([f8fe6b0](https://github.com/facebook/react-native/commit/f8fe6b0))
- Correctly update **NetInfo** on Android even if connection types change while
  the app is in the background
  ([e6f542d](https://github.com/facebook/react-native/commit/e6f542d) by
  [@berickson1](https://github.com/berickson1))
- Direction-aware borders now work with Android APIs >= 17
  ([7170543](https://github.com/facebook/react-native/commit/7170543) by
  [@rsnara](https://github.com/rsnara))
- Don't throw _BadTokenException_ and _IllegalArgmentException_ when showing or
  dismissing Modal on Android
  ([c465599](https://github.com/facebook/react-native/commit/c465599))
- Fix Android crash when blurRadius is between 0 and 1
  ([dc01eff](https://github.com/facebook/react-native/commit/dc01eff) by
  [@jamesreggio](https://github.com/jamesreggio))
- Fix `borderRadius` with Android API level < 18
  ([5aa1fb3](https://github.com/facebook/react-native/commit/5aa1fb3) and
  [ca7fe72](https://github.com/facebook/react-native/commit/ca7fe72) by
  [@rsnara](https://github.com/rsnara))
- Make Android `lineHeight` behavior match iOS's 📏
  ([3f1b021](https://github.com/facebook/react-native/commit/3f1b021))
- Fixed autoscroll to cursor on Android **TextInput**
  ([0bef872](https://github.com/facebook/react-native/commit/0bef872) by
  [@shergin](https://github.com/shergin))
- Fix logging unpacking time on Android when it happens concurrently with eager
  unpacking ([028b64b](https://github.com/facebook/react-native/commit/028b64b)
  by [@alexeylang](https://github.com/alexeylang))
- Prevent an Android crash when **TextInput** has `selectionColor` defined but
  there is no drawable cursor
  ([1e18d90](https://github.com/facebook/react-native/commit/1e18d90) by
  [@gpeal](https://github.com/gpeal))

#### iOS exclusive fixes

- Don't have Xcode warnings for _YGDefaultLog_ in newly created projects
  ([72e762d](https://github.com/facebook/react-native/commit/72e762d) by
  [@woehrl01](https://github.com/woehrl01))
- iOS _RCTEventEmitter_ uses a `double` for count, not _NSInteger_
  ([eaa8499](https://github.com/facebook/react-native/commit/eaa8499))
- Fix `isNuclideDebuggingAvailable` on iOS
  ([59c3e33](https://github.com/facebook/react-native/commit/59c3e33))
- iOS ScrollView is now rendered correctly with RefreshControl
  ([75d62bf](https://github.com/facebook/react-native/commit/75d62bf) by
  [@vonovak](https://github.com/vonovak))
- Fix a crash when keyboard is visible and bridge reload happens on iOS
  ([d9c6585](https://github.com/facebook/react-native/commit/d9c6585) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- **RedBox** now appears beneath the status bar on iOS
  ([33cefc1](https://github.com/facebook/react-native/commit/33cefc1) by
  [@adamjernst](https://github.com/adamjernst))
- Fractional border widths on iOS are now the right size, honoring insets
  ([15179f1](https://github.com/facebook/react-native/commit/15179f1) by
  [@Nikita2k](https://github.com/Nikita2k))
- Implement `requiresMainQueueSetup` in _RCTTVNavigationEventEmitter_ to satisfy
  Xcode warning
  ([ee3532b](https://github.com/facebook/react-native/commit/ee3532b) by
  [@charpeni](https://github.com/charpeni))
- Support the iPhone X in the sample project's header
  ([ad4b124](https://github.com/facebook/react-native/commit/ad4b124) by
  [@vincentriemer](https://github.com/vincentriemer))
- `testID` works on **TabBarItem** on iOS
  ([e19d9de](https://github.com/facebook/react-native/commit/e19d9de))
- On iOS, don't error on the first live-reload of large codebases because of too
  little wait time
  ([b6f1a60](https://github.com/facebook/react-native/commit/b6f1a60) by
  [@lelandrichardson](https://github.com/lelandrichardson))
- Prevent iOS crash on receiving bad unicode in _XMLHTTPRequest_
  ([1c04cee](https://github.com/facebook/react-native/commit/1c04cee) by
  [@cdlewis](https://github.com/cdlewis))
- Define `pod_target_xcconfig` for PrivateDatabase
  ([38b96cd](https://github.com/facebook/react-native/commit/38b96cd) by
  [@ide](https://github.com/ide))
- Fixed podspec include/excludes around tvOS
  ([ba1d7e9](https://github.com/facebook/react-native/commit/ba1d7e9) by
  [@yygene](https://github.com/yygene))
- Don't spam the logs for iOS when receiving `ECONNREFUSED` on connecting to
  packager ([b1701cc](https://github.com/facebook/react-native/commit/b1701cc)
  and [ff3dc2e](https://github.com/facebook/react-native/commit/ff3dc2e) by
  [@adamjernst](https://github.com/adamjernst))
- Don't crash Systrace when debugging JS remotely on iOS
  ([e8eec24](https://github.com/facebook/react-native/commit/e8eec24) by
  [@alexeylang](https://github.com/alexeylang))

### Removed

- Removing `reactBridgeDidFinishTransaction` from _RCTScrollView_
  ([a255204](https://github.com/facebook/react-native/commit/a255204) by
  [@shergin](https://github.com/shergin))
- Removing inherited background color optimization from _RCTText_ to reduce code
  complexity – please give feedback if you find performance differences!
  ([8c8944c](https://github.com/facebook/react-native/commit/8c8944c) by
  [@shergin](https://github.com/shergin))

### Other

Below is a list of the remaining, low-level changes that made it into this
release of React Native.

- Foundational work for a new justifyContent value **space-evenly**
  ([1050e0b](https://github.com/facebook/react-native/commit/1050e0b) by
  [@woehrl01](https://github.com/woehrl01))
- Add Systrace-based telemetry to Hermes GC
  ([05e862d](https://github.com/facebook/react-native/commit/05e862d))
- Unify Systrace native hook argument passing
  ([52e3ae9](https://github.com/facebook/react-native/commit/52e3ae9) by
  [@amnn](https://github.com/amnn))
- Use different symbols for SystraceSection depending on `WITH_FBYSTRACE`
  ([03956c4](https://github.com/facebook/react-native/commit/03956c4))
- Don't set global.performance to undefined if it was initialized already
  ([dfebcb7](https://github.com/facebook/react-native/commit/dfebcb7) by
  [@alexeylang](https://github.com/alexeylang))
- Autofixes for migrating to Buck's source-only ABI feature
  ([801cbdb](https://github.com/facebook/react-native/commit/801cbdb) by
  [@jkeljo](https://github.com/jkeljo))
- Add remote API to uninstall the global error handler in RN
  ([1d16923](https://github.com/facebook/react-native/commit/1d16923))
- Add _RCTLibraryPathForURL_ in _RCTUtil_
  ([2fecbf6](https://github.com/facebook/react-native/commit/2fecbf6))
- Fix sections that come from React Fiber
  ([1f40c95](https://github.com/facebook/react-native/commit/1f40c95) by
  [@alexeylang](https://github.com/alexeylang))
- Fix boolean conversion in sync RN method calls.
  ([dd888d3](https://github.com/facebook/react-native/commit/dd888d3))
- Fix `embeddedBundleURL` update situation
  ([d1fc8ef](https://github.com/facebook/react-native/commit/d1fc8ef))
- Remove `android_react_native_perf.use_separate_ui_bg_thread` experiment.
  ([4f886a2](https://github.com/facebook/react-native/commit/4f886a2))
- ScrollView related files were moved to dedicated folder
  ([098a63a](https://github.com/facebook/react-native/commit/098a63a) by
  [@shergin](https://github.com/shergin))
- move page registration logic in to jsinspector
  ([bef7967](https://github.com/facebook/react-native/commit/bef7967) by
  [@bnham](https://github.com/bnham))
- Type global hooks as function pointers
  ([eca51eb](https://github.com/facebook/react-native/commit/eca51eb) by
  [@johnislarry](https://github.com/johnislarry))
- `std::string` to `const char*`
  ([b952365](https://github.com/facebook/react-native/commit/b952365) by
  [@johnislarry](https://github.com/johnislarry))
- Allow extending props supported by native animations
  ([71751e9](https://github.com/facebook/react-native/commit/71751e9) by
  [@andrewimm](https://github.com/andrewimm))
- Meyers singleton jsc error extractor
  ([434f432](https://github.com/facebook/react-native/commit/434f432) by
  [@johnislarry](https://github.com/johnislarry))
- Do not overwrite the same text in **TextInput**
  ([29f3f55](https://github.com/facebook/react-native/commit/29f3f55))
- Renaming _uiManagerWillFlushUIBlocks_ -> _uiManagerWillPerformMounting_
  ([0a8721c](https://github.com/facebook/react-native/commit/0a8721c) by
  [@shergin](https://github.com/shergin))
- Skylarkify flags macros.
  ([ed2bfcb](https://github.com/facebook/react-native/commit/ed2bfcb) by
  [@ttsugriy](https://github.com/ttsugriy))
- Skylarkify `config_utils_defs` macros.
  ([88f6f69](https://github.com/facebook/react-native/commit/88f6f69) by
  [@ttsugriy](https://github.com/ttsugriy))
- Round size geometry for Button and RichText components.
  ([4034feb](https://github.com/facebook/react-native/commit/4034feb) by
  [@iaroslav-pavlov](https://github.com/iaroslav-pavlov)
- Temporarily patched Map/Set non-extensible check into RN dev renderer
  ([a99f0d6](https://github.com/facebook/react-native/commit/a99f0d6) by
  [@bvaughn](https://github.com/bvaughn))
- Run buildifier over all BUCK files
  ([d674d48](https://github.com/facebook/react-native/commit/d674d48) by
  [@zertosh](https://github.com/zertosh))
- Pass `scriptURL` to _RCTTestRunner_
  ([266ab7a](https://github.com/facebook/react-native/commit/266ab7a))
- Make _RCTNativeModule::invokeInner_ explicitely return `folly::none` in case
  of error ([0ac5a52](https://github.com/facebook/react-native/commit/0ac5a52)
  by [@fromcelticpark](https://github.com/fromcelticpark))
- Make _RCTPackagerConnection_ a singleton
  ([9180d4e](https://github.com/facebook/react-native/commit/9180d4e) by
  [@adamjernst](https://github.com/adamjernst))
- Register split segment paths with _RAMBundleRegistry_
  ([cff0d8e](https://github.com/facebook/react-native/commit/cff0d8e) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- check if listener is still in the set before calling `onHostResume`
  ([ad89ea7](https://github.com/facebook/react-native/commit/ad89ea7))
- export _SeparatorsObj_ type for re-use in **ListItem**s etc.
  ([c6fe101](https://github.com/facebook/react-native/commit/c6fe101) by
  [@sahrens](https://github.com/sahrens))
- Do not mark node as dirty if, new and old values are undefined
  ([41da6e3](https://github.com/facebook/react-native/commit/41da6e3) by
  [@woehrl01](https://github.com/woehrl01))
- Remove _RAMBundleRegistry_ subclasses
  ([6ecae73](https://github.com/facebook/react-native/commit/6ecae73) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- Fix `minimumViewTime` in _ViewabilityHelper_
  ([d19d137](https://github.com/facebook/react-native/commit/d19d137))

[0.56]: https://github.com/facebook/react-native/compare/0.55-stable...0.56-stable
[0.55]: https://github.com/facebook/react-native/compare/0.54-stable...0.55-stable
[0.54]: https://github.com/facebook/react-native/compare/0.53-stable...0.54-stable
[0.53]: https://github.com/facebook/react-native/compare/0.52-stable...0.53-stable
[0.52.0]: https://github.com/facebook/react-native/compare/0.51-stable...0.52-stable
