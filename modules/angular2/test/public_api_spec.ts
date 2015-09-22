import {
  AsyncTestCompleter,
  beforeEach,
  ddescribe,
  describe,
  expect,
  iit,
  inject,
  it,
  xdescribe,
  xit
} from 'angular2/test_lib';

import {getSymbolsFromLibrary} from './symbol_inspector/symbol_inspector';
import {SymbolsDiff} from './symbol_inspector/symbol_differ';

// =================================================================================================
// =================================================================================================
// =========== S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P   -  S T O P  ===========
// =================================================================================================
// =================================================================================================
//
// DO NOT EDIT THIS LIST OF PUBLIC APIS UNLESS YOU GET IT CLEARED BY: mhevery, vsavkin, or tbosch!
//
// =================================================================================================
// =================================================================================================

var NG_API = [
  'APP_COMPONENT',
  'APP_ID',
  'AbstractBindingError',
  'AbstractBindingError.addKey()',
  'AbstractBindingError.constructResolvingMessage',
  'AbstractBindingError.constructResolvingMessage=',
  'AbstractBindingError.context',
  'AbstractBindingError.injectors',
  'AbstractBindingError.injectors=',
  'AbstractBindingError.keys',
  'AbstractBindingError.keys=',
  'AbstractBindingError.message',
  'AbstractBindingError.message=',
  'AbstractBindingError.stackTrace',
  'AbstractControl',
  'AbstractControl.dirty',
  'AbstractControl.errors',
  'AbstractControl.find()',
  'AbstractControl.getError()',
  'AbstractControl.hasError()',
  'AbstractControl.markAsDirty()',
  'AbstractControl.markAsTouched()',
  'AbstractControl.pristine',
  'AbstractControl.setParent()',
  'AbstractControl.status',
  'AbstractControl.touched',
  'AbstractControl.untouched',
  'AbstractControl.updateValidity()',
  'AbstractControl.updateValueAndValidity()',
  'AbstractControl.valid',
  'AbstractControl.validator',
  'AbstractControl.validator=',
  'AbstractControl.value',
  'AbstractControl.valueChanges',
  'AbstractControlDirective',
  'AbstractControlDirective.control',
  'AbstractControlDirective.dirty',
  'AbstractControlDirective.errors',
  'AbstractControlDirective.pristine',
  'AbstractControlDirective.touched',
  'AbstractControlDirective.untouched',
  'AbstractControlDirective.valid',
  'AbstractControlDirective.value',
  'AppRootUrl',
  'AppRootUrl.value',
  'AppRootUrl.value=',
  'AppViewManager',
  'AppViewManager.attachViewInContainer()',
  'AppViewManager.createEmbeddedViewInContainer()',
  'AppViewManager.createHostViewInContainer()',
  'AppViewManager.createRootHostView()',
  'AppViewManager.destroyRootHostView()',
  'AppViewManager.destroyViewInContainer()',
  'AppViewManager.detachViewInContainer()',
  'AppViewManager.getComponent()',
  'AppViewManager.getHostElement()',
  'AppViewManager.getNamedElementInComponentView()',
  'AppViewManager.getViewContainer()',
  'ApplicationRef',
  'ApplicationRef.bootstrap()',
  'ApplicationRef.dispose()',
  'ApplicationRef.injector',
  'ApplicationRef.registerBootstrapListener()',
  'ApplicationRef.zone',
  'AsyncPipe',
  'AsyncPipe.onDestroy()',
  'AsyncPipe.transform()',
  'Attribute',
  'Attribute.attributeName',
  'Attribute.token',
  'AttributeMetadata',
  'AttributeMetadata.attributeName',
  'AttributeMetadata.token',
  'Binding',
  'Binding.dependencies',
  'Binding.multi',
  'Binding.toAlias',
  'Binding.toClass',
  'Binding.toFactory',
  'Binding.toValue',
  'Binding.token',
  'BindingBuilder',
  'BindingBuilder.toAlias()',
  'BindingBuilder.toClass()',
  'BindingBuilder.toFactory()',
  'BindingBuilder.toValue()',
  'BindingBuilder.token',
  'BindingBuilder.token=',
  'By#all()',
  'By#css()',
  'By#directive()',
  'By',
  'CORE_DIRECTIVES',
  'ChangeDetectionError',
  'ChangeDetectionError.context',
  'ChangeDetectionError.location',
  'ChangeDetectionError.location=',
  'ChangeDetectionError.message',
  'ChangeDetectionError.stackTrace',
  'ChangeDetectionError.wrapperMessage',
  'ChangeDetectionStrategy#CheckAlways',
  'ChangeDetectionStrategy#CheckOnce',
  'ChangeDetectionStrategy#Checked',
  'ChangeDetectionStrategy#Default',
  'ChangeDetectionStrategy#Detached',
  'ChangeDetectionStrategy#OnPush',
  'ChangeDetectionStrategy#OnPushObserve',
  'ChangeDetectionStrategy#values',
  'ChangeDetectionStrategy',
  'ChangeDetectionStrategy.index',
  'ChangeDetectorRef',
  'ChangeDetectorRef.detach()',
  'ChangeDetectorRef.detectChanges()',
  'ChangeDetectorRef.markForCheck()',
  'ChangeDetectorRef.reattach()',
  'CheckboxControlValueAccessor',
  'CheckboxControlValueAccessor.ngClassDirty',
  'CheckboxControlValueAccessor.ngClassInvalid',
  'CheckboxControlValueAccessor.ngClassPristine',
  'CheckboxControlValueAccessor.ngClassTouched',
  'CheckboxControlValueAccessor.ngClassUntouched',
  'CheckboxControlValueAccessor.ngClassValid',
  'CheckboxControlValueAccessor.onChange',
  'CheckboxControlValueAccessor.onChange=',
  'CheckboxControlValueAccessor.onTouched',
  'CheckboxControlValueAccessor.onTouched=',
  'CheckboxControlValueAccessor.registerOnChange()',
  'CheckboxControlValueAccessor.registerOnTouched()',
  'CheckboxControlValueAccessor.writeValue()',
  'Class:js',
  'Compiler',
  'Compiler.compileInHost()',
  'Component',
  'Component.bindings',
  'Component.changeDetection',
  'Component.compileChildren',
  'Component.events',
  'Component.exportAs',
  'Component.host',
  'Component.moduleId',
  'Component.properties',
  'Component.queries',
  'Component.selector',
  'Component.viewBindings',
  'ComponentMetadata',
  'ComponentMetadata.bindings',
  'ComponentMetadata.changeDetection',
  'ComponentMetadata.compileChildren',
  'ComponentMetadata.events',
  'ComponentMetadata.exportAs',
  'ComponentMetadata.host',
  'ComponentMetadata.moduleId',
  'ComponentMetadata.properties',
  'ComponentMetadata.queries',
  'ComponentMetadata.selector',
  'ComponentMetadata.viewBindings',
  'ComponentRef',
  'ComponentRef.componentType',
  'ComponentRef.componentType=',
  'ComponentRef.dispose()',
  'ComponentRef.hostComponent',
  'ComponentRef.hostComponentType',
  'ComponentRef.hostView',
  'ComponentRef.injector',
  'ComponentRef.injector=',
  'ComponentRef.instance',
  'ComponentRef.instance=',
  'ComponentRef.location',
  'ComponentRef.location=',
  'ComponentUrlMapper',
  'ComponentUrlMapper.getUrl()',
  'ContentChild',
  'ContentChild.descendants',
  'ContentChild.first',
  'ContentChild.isVarBindingQuery',
  'ContentChild.isViewQuery',
  'ContentChild.selector',
  'ContentChild.token',
  'ContentChild.varBindings',
  'ContentChildMetadata',
  'ContentChildMetadata.descendants',
  'ContentChildMetadata.first',
  'ContentChildMetadata.isVarBindingQuery',
  'ContentChildMetadata.isViewQuery',
  'ContentChildMetadata.selector',
  'ContentChildMetadata.token',
  'ContentChildMetadata.varBindings',
  'ContentChildren',
  'ContentChildren.descendants',
  'ContentChildren.first',
  'ContentChildren.isVarBindingQuery',
  'ContentChildren.isViewQuery',
  'ContentChildren.selector',
  'ContentChildren.token',
  'ContentChildren.varBindings',
  'ContentChildrenMetadata',
  'ContentChildrenMetadata.descendants',
  'ContentChildrenMetadata.first',
  'ContentChildrenMetadata.isVarBindingQuery',
  'ContentChildrenMetadata.isViewQuery',
  'ContentChildrenMetadata.selector',
  'ContentChildrenMetadata.token',
  'ContentChildrenMetadata.varBindings',
  'Control',
  'Control.dirty',
  'Control.errors',
  'Control.find()',
  'Control.getError()',
  'Control.hasError()',
  'Control.markAsDirty()',
  'Control.markAsTouched()',
  'Control.pristine',
  'Control.registerOnChange()',
  'Control.setParent()',
  'Control.status',
  'Control.touched',
  'Control.untouched',
  'Control.updateValidity()',
  'Control.updateValue()',
  'Control.updateValueAndValidity()',
  'Control.valid',
  'Control.validator',
  'Control.validator=',
  'Control.value',
  'Control.valueChanges',
  'ControlArray',
  'ControlArray.at()',
  'ControlArray.controls',
  'ControlArray.controls=',
  'ControlArray.dirty',
  'ControlArray.errors',
  'ControlArray.find()',
  'ControlArray.getError()',
  'ControlArray.hasError()',
  'ControlArray.insert()',
  'ControlArray.length',
  'ControlArray.markAsDirty()',
  'ControlArray.markAsTouched()',
  'ControlArray.pristine',
  'ControlArray.push()',
  'ControlArray.removeAt()',
  'ControlArray.setParent()',
  'ControlArray.status',
  'ControlArray.touched',
  'ControlArray.untouched',
  'ControlArray.updateValidity()',
  'ControlArray.updateValueAndValidity()',
  'ControlArray.valid',
  'ControlArray.validator',
  'ControlArray.validator=',
  'ControlArray.value',
  'ControlArray.valueChanges',
  'ControlContainer',
  'ControlContainer.control',
  'ControlContainer.dirty',
  'ControlContainer.errors',
  'ControlContainer.formDirective',
  'ControlContainer.name',
  'ControlContainer.name=',
  'ControlContainer.path',
  'ControlContainer.pristine',
  'ControlContainer.touched',
  'ControlContainer.untouched',
  'ControlContainer.valid',
  'ControlContainer.value',
  'ControlGroup',
  'ControlGroup.addControl()',
  'ControlGroup.contains()',
  'ControlGroup.controls',
  'ControlGroup.controls=',
  'ControlGroup.dirty',
  'ControlGroup.errors',
  'ControlGroup.exclude()',
  'ControlGroup.find()',
  'ControlGroup.getError()',
  'ControlGroup.hasError()',
  'ControlGroup.include()',
  'ControlGroup.markAsDirty()',
  'ControlGroup.markAsTouched()',
  'ControlGroup.pristine',
  'ControlGroup.removeControl()',
  'ControlGroup.setParent()',
  'ControlGroup.status',
  'ControlGroup.touched',
  'ControlGroup.untouched',
  'ControlGroup.updateValidity()',
  'ControlGroup.updateValueAndValidity()',
  'ControlGroup.valid',
  'ControlGroup.validator',
  'ControlGroup.validator=',
  'ControlGroup.value',
  'ControlGroup.valueChanges',
  'CurrencyPipe',
  'CurrencyPipe.transform()',
  'CyclicDependencyError',
  'CyclicDependencyError.addKey()',
  'CyclicDependencyError.constructResolvingMessage',
  'CyclicDependencyError.constructResolvingMessage=',
  'CyclicDependencyError.context',
  'CyclicDependencyError.injectors',
  'CyclicDependencyError.injectors=',
  'CyclicDependencyError.keys',
  'CyclicDependencyError.keys=',
  'CyclicDependencyError.message',
  'CyclicDependencyError.message=',
  'CyclicDependencyError.stackTrace',
  'DEFAULT_PIPES',
  'DEFAULT_PIPES_TOKEN',
  'DOCUMENT',
  'DatePipe',
  'DatePipe.supports()',
  'DatePipe.transform()',
  'DebugElement',
  'DebugElement.children',
  'DebugElement.componentInstance',
  'DebugElement.componentViewChildren',
  'DebugElement.elementRef',
  'DebugElement.getDirectiveInstance()',
  'DebugElement.getLocal()',
  'DebugElement.hasDirective()',
  'DebugElement.inject()',
  'DebugElement.nativeElement',
  'DebugElement.query()',
  'DebugElement.queryAll()',
  'DebugElement.triggerEventHandler()',
  'DecimalPipe',
  'DecimalPipe.transform()',
  'DefaultValidators',
  'DefaultValueAccessor',
  'DefaultValueAccessor.ngClassDirty',
  'DefaultValueAccessor.ngClassInvalid',
  'DefaultValueAccessor.ngClassPristine',
  'DefaultValueAccessor.ngClassTouched',
  'DefaultValueAccessor.ngClassUntouched',
  'DefaultValueAccessor.ngClassValid',
  'DefaultValueAccessor.onChange',
  'DefaultValueAccessor.onChange=',
  'DefaultValueAccessor.onTouched',
  'DefaultValueAccessor.onTouched=',
  'DefaultValueAccessor.registerOnChange()',
  'DefaultValueAccessor.registerOnTouched()',
  'DefaultValueAccessor.writeValue()',
  'Dependency#fromKey()',
  'Dependency',
  'Dependency.key',
  'Dependency.key=',
  'Dependency.lowerBoundVisibility',
  'Dependency.lowerBoundVisibility=',
  'Dependency.optional',
  'Dependency.optional=',
  'Dependency.properties',
  'Dependency.properties=',
  'Dependency.upperBoundVisibility',
  'Dependency.upperBoundVisibility=',
  'DependencyMetadata',
  'DependencyMetadata.token',
  'Directive',
  'Directive.bindings',
  'Directive.compileChildren',
  'Directive.events',
  'Directive.exportAs',
  'Directive.host',
  'Directive.moduleId',
  'Directive.properties',
  'Directive.queries',
  'Directive.selector',
  'DirectiveMetadata',
  'DirectiveMetadata.bindings',
  'DirectiveMetadata.compileChildren',
  'DirectiveMetadata.events',
  'DirectiveMetadata.exportAs',
  'DirectiveMetadata.host',
  'DirectiveMetadata.moduleId',
  'DirectiveMetadata.properties',
  'DirectiveMetadata.queries',
  'DirectiveMetadata.selector',
  'DirectiveResolver',
  'DirectiveResolver.resolve()',
  'DynamicComponentLoader',
  'DynamicComponentLoader.loadAsRoot()',
  'DynamicComponentLoader.loadIntoLocation()',
  'DynamicComponentLoader.loadNextToLocation()',
  'ELEMENT_PROBE_BINDINGS',
  'ElementRef',
  'ElementRef.boundElementIndex',
  'ElementRef.boundElementIndex=',
  'ElementRef.nativeElement',
  'ElementRef.parentView',
  'ElementRef.parentView=',
  'ElementRef.renderBoundElementIndex',
  'ElementRef.renderBoundElementIndex=',
  'ElementRef.renderView',
  'ElementRef.renderView=',
  'Event',
  'Event.bindingPropertyName',
  'EventEmitter',
  'EventEmitter.add():dart',
  'EventEmitter.addError():dart',
  'EventEmitter.any():dart',
  'EventEmitter.asBroadcastStream():dart',
  'EventEmitter.asyncExpand():dart',
  'EventEmitter.asyncMap():dart',
  'EventEmitter.close():dart',
  'EventEmitter.contains():dart',
  'EventEmitter.distinct():dart',
  'EventEmitter.drain():dart',
  'EventEmitter.elementAt():dart',
  'EventEmitter.every():dart',
  'EventEmitter.expand():dart',
  'EventEmitter.first:dart',
  'EventEmitter.firstWhere():dart',
  'EventEmitter.fold():dart',
  'EventEmitter.forEach():dart',
  'EventEmitter.handleError():dart',
  'EventEmitter.isBroadcast:dart',
  'EventEmitter.isEmpty:dart',
  'EventEmitter.join():dart',
  'EventEmitter.last:dart',
  'EventEmitter.lastWhere():dart',
  'EventEmitter.length:dart',
  'EventEmitter.listen():dart',
  'EventEmitter.map():dart',
  'EventEmitter.next():js',
  'EventEmitter.observer():js',
  'EventEmitter.pipe():dart',
  'EventEmitter.reduce():dart',
  'EventEmitter.return():js',
  'EventEmitter.single:dart',
  'EventEmitter.singleWhere():dart',
  'EventEmitter.skip():dart',
  'EventEmitter.skipWhile():dart',
  'EventEmitter.take():dart',
  'EventEmitter.takeWhile():dart',
  'EventEmitter.throw():js',
  'EventEmitter.timeout():dart',
  'EventEmitter.toList():dart',
  'EventEmitter.toRx():js',
  'EventEmitter.toSet():dart',
  'EventEmitter.transform():dart',
  'EventEmitter.where():dart',
  'EventMetadata',
  'EventMetadata.bindingPropertyName',
  'ExpressionChangedAfterItHasBeenCheckedException',
  'ExpressionChangedAfterItHasBeenCheckedException.message',
  'ExpressionChangedAfterItHasBeenCheckedException.stackTrace',
  'FORM_BINDINGS',
  'FORM_DIRECTIVES',
  'FormBuilder',
  'FormBuilder.array()',
  'FormBuilder.control()',
  'FormBuilder.group()',
  'Host',
  'HostBinding',
  'HostBinding.hostPropertyName',
  'HostBindingMetadata',
  'HostBindingMetadata.hostPropertyName',
  'HostListener',
  'HostListener.args',
  'HostListener.eventName',
  'HostListenerMetadata',
  'HostListenerMetadata.args',
  'HostListenerMetadata.eventName',
  'HostMetadata',
  'Inject',
  'Inject.token',
  'InjectMetadata',
  'InjectMetadata.token',
  'Injectable',
  'InjectableMetadata',
  'Injector#fromResolvedBindings()',
  'Injector#resolve()',
  'Injector#resolveAndCreate()',
  'Injector',
  'Injector.createChildFromResolved()',
  'Injector.debugContext()',
  'Injector.displayName',
  'Injector.get()',
  'Injector.getAt()',
  'Injector.getOptional()',
  'Injector.instantiateResolved()',
  'Injector.internalStrategy',
  'Injector.parent',
  'Injector.resolveAndCreateChild()',
  'Injector.resolveAndInstantiate()',
  'InstantiationError',
  'InstantiationError.addKey()',
  'InstantiationError.causeKey',
  'InstantiationError.context',
  'InstantiationError.injectors',
  'InstantiationError.injectors=',
  'InstantiationError.keys',
  'InstantiationError.keys=',
  'InstantiationError.message',
  'InstantiationError.stackTrace',
  'InstantiationError.wrapperMessage',
  'InvalidBindingError',
  'InvalidBindingError.message',
  'InvalidBindingError.stackTrace',
  'IterableDiffers#create()',
  'IterableDiffers#extend()',
  'IterableDiffers',
  'IterableDiffers.factories',
  'IterableDiffers.find()',
  'JsonPipe',
  'JsonPipe.transform()',
  'Key#get()',
  'Key#numberOfKeys',
  'Key',
  'Key.displayName',
  'Key.id',
  'Key.id=',
  'Key.token',
  'Key.token=',
  'KeyValueDiffers#create()',
  'KeyValueDiffers#extend()',
  'KeyValueDiffers',
  'KeyValueDiffers.factories',
  'KeyValueDiffers.find()',
  'LifeCycle',  // TODO: replace with ApplicationRef
  'LifeCycle.registerWith()',
  'LifeCycle.tick()',
  'LowerCasePipe',
  'LowerCasePipe.transform()',
  'MAX_IN_MEMORY_ELEMENTS_PER_TEMPLATE',
  'NG_VALIDATORS',
  'NgClass',
  'NgClass.doCheck()',
  'NgClass.initialClasses=',
  'NgClass.onDestroy()',
  'NgClass.rawClass=',
  'NgControl',
  'NgControl.control',
  'NgControl.dirty',
  'NgControl.errors',
  'NgControl.name',
  'NgControl.name=',
  'NgControl.path',
  'NgControl.pristine',
  'NgControl.touched',
  'NgControl.untouched',
  'NgControl.valid',
  'NgControl.validator',
  'NgControl.value',
  'NgControl.valueAccessor',
  'NgControl.valueAccessor=',
  'NgControl.viewToModelUpdate()',
  'NgControlGroup',
  'NgControlGroup.control',
  'NgControlGroup.dirty',
  'NgControlGroup.errors',
  'NgControlGroup.formDirective',
  'NgControlGroup.name',
  'NgControlGroup.name=',
  'NgControlGroup.onDestroy()',
  'NgControlGroup.onInit()',
  'NgControlGroup.path',
  'NgControlGroup.pristine',
  'NgControlGroup.touched',
  'NgControlGroup.untouched',
  'NgControlGroup.valid',
  'NgControlGroup.value',
  'NgControlName',
  'NgControlName.control',
  'NgControlName.dirty',
  'NgControlName.errors',
  'NgControlName.formDirective',
  'NgControlName.model',
  'NgControlName.model=',
  'NgControlName.name',
  'NgControlName.name=',
  'NgControlName.onChanges()',
  'NgControlName.onDestroy()',
  'NgControlName.path',
  'NgControlName.pristine',
  'NgControlName.touched',
  'NgControlName.untouched',
  'NgControlName.update',
  'NgControlName.update=',
  'NgControlName.valid',
  'NgControlName.validator',
  'NgControlName.validators',
  'NgControlName.validators=',
  'NgControlName.value',
  'NgControlName.valueAccessor',
  'NgControlName.valueAccessor=',
  'NgControlName.viewModel',
  'NgControlName.viewModel=',
  'NgControlName.viewToModelUpdate()',
  'NgFor',
  'NgFor.doCheck()',
  'NgFor.ngForOf=',
  'NgForm',
  'NgForm.addControl()',
  'NgForm.addControlGroup()',
  'NgForm.control',
  'NgForm.controls',
  'NgForm.dirty',
  'NgForm.errors',
  'NgForm.form',
  'NgForm.form=',
  'NgForm.formDirective',
  'NgForm.getControl()',
  'NgForm.getControlGroup()',
  'NgForm.name',
  'NgForm.name=',
  'NgForm.ngSubmit',
  'NgForm.ngSubmit=',
  'NgForm.onSubmit()',
  'NgForm.path',
  'NgForm.pristine',
  'NgForm.removeControl()',
  'NgForm.removeControlGroup()',
  'NgForm.touched',
  'NgForm.untouched',
  'NgForm.updateModel()',
  'NgForm.valid',
  'NgForm.value',
  'NgFormControl',
  'NgFormControl.control',
  'NgFormControl.dirty',
  'NgFormControl.errors',
  'NgFormControl.form',
  'NgFormControl.form=',
  'NgFormControl.model',
  'NgFormControl.model=',
  'NgFormControl.name',
  'NgFormControl.name=',
  'NgFormControl.onChanges()',
  'NgFormControl.path',
  'NgFormControl.pristine',
  'NgFormControl.touched',
  'NgFormControl.untouched',
  'NgFormControl.update',
  'NgFormControl.update=',
  'NgFormControl.valid',
  'NgFormControl.validator',
  'NgFormControl.validators',
  'NgFormControl.validators=',
  'NgFormControl.value',
  'NgFormControl.valueAccessor',
  'NgFormControl.valueAccessor=',
  'NgFormControl.viewModel',
  'NgFormControl.viewModel=',
  'NgFormControl.viewToModelUpdate()',
  'NgFormModel',
  'NgFormModel.addControl()',
  'NgFormModel.addControlGroup()',
  'NgFormModel.control',
  'NgFormModel.directives',
  'NgFormModel.directives=',
  'NgFormModel.dirty',
  'NgFormModel.errors',
  'NgFormModel.form',
  'NgFormModel.form=',
  'NgFormModel.formDirective',
  'NgFormModel.getControl()',
  'NgFormModel.getControlGroup()',
  'NgFormModel.name',
  'NgFormModel.name=',
  'NgFormModel.ngSubmit',
  'NgFormModel.ngSubmit=',
  'NgFormModel.onChanges()',
  'NgFormModel.onSubmit()',
  'NgFormModel.path',
  'NgFormModel.pristine',
  'NgFormModel.removeControl()',
  'NgFormModel.removeControlGroup()',
  'NgFormModel.touched',
  'NgFormModel.untouched',
  'NgFormModel.updateModel()',
  'NgFormModel.valid',
  'NgFormModel.value',
  'NgIf',
  'NgIf.ngIf=',
  'NgModel',
  'NgModel.control',
  'NgModel.dirty',
  'NgModel.errors',
  'NgModel.model',
  'NgModel.model=',
  'NgModel.name',
  'NgModel.name=',
  'NgModel.onChanges()',
  'NgModel.path',
  'NgModel.pristine',
  'NgModel.touched',
  'NgModel.untouched',
  'NgModel.update',
  'NgModel.update=',
  'NgModel.valid',
  'NgModel.validator',
  'NgModel.validators',
  'NgModel.validators=',
  'NgModel.value',
  'NgModel.valueAccessor',
  'NgModel.valueAccessor=',
  'NgModel.viewModel',
  'NgModel.viewModel=',
  'NgModel.viewToModelUpdate()',
  'NgNonBindable',
  'NgSelectOption',
  'NgStyle',
  'NgStyle.doCheck()',
  'NgStyle.rawStyle=',
  'NgSwitch',
  'NgSwitch.ngSwitch=',
  'NgSwitchDefault',
  'NgSwitchWhen',
  'NgSwitchWhen.ngSwitchWhen=',
  'NgZone',
  'NgZone.overrideOnErrorHandler()',
  'NgZone.overrideOnEventDone()',
  'NgZone.overrideOnTurnDone()',
  'NgZone.overrideOnTurnStart()',
  'NgZone.run()',
  'NgZone.runOutsideAngular()',
  'NoAnnotationError',
  'NoAnnotationError.message',
  'NoAnnotationError.stackTrace',
  'NoBindingError',
  'NoBindingError.addKey()',
  'NoBindingError.constructResolvingMessage',
  'NoBindingError.constructResolvingMessage=',
  'NoBindingError.context',
  'NoBindingError.injectors',
  'NoBindingError.injectors=',
  'NoBindingError.keys',
  'NoBindingError.keys=',
  'NoBindingError.message',
  'NoBindingError.message=',
  'NoBindingError.stackTrace',
  'NumberPipe',
  'Observable.observer():js',
  'Observable:js',
  'ObservableListDiff.check():dart',
  'ObservableListDiff.collection:dart',
  'ObservableListDiff.diff():dart',
  'ObservableListDiff.forEachAddedItem():dart',
  'ObservableListDiff.forEachItem():dart',
  'ObservableListDiff.forEachMovedItem():dart',
  'ObservableListDiff.forEachPreviousItem():dart',
  'ObservableListDiff.forEachRemovedItem():dart',
  'ObservableListDiff.isDirty:dart',
  'ObservableListDiff.length:dart',
  'ObservableListDiff.onDestroy():dart',
  'ObservableListDiff:dart',
  'ObservableListDiffFactory.create():dart',
  'ObservableListDiffFactory.supports():dart',
  'ObservableListDiffFactory:dart',
  'OpaqueToken',
  'Optional',
  'OptionalMetadata',
  'OutOfBoundsError',
  'OutOfBoundsError.message',
  'OutOfBoundsError.stackTrace',
  'PercentPipe',
  'PercentPipe.transform()',
  'Pipe',
  'Pipe.name',
  'Pipe.pure',
  'PipeMetadata',
  'PipeMetadata.name',
  'PipeMetadata.pure',
  'PlatformRef',
  'PlatformRef.application()',
  'PlatformRef.asyncApplication()',
  'PlatformRef.dispose()',
  'PlatformRef.injector',
  'Predicate:dart',
  'Property',
  'Property.bindingPropertyName',
  'PropertyMetadata',
  'PropertyMetadata.bindingPropertyName',
  'ProtoViewRef',
  'Query',
  'Query.descendants',
  'Query.first',
  'Query.isVarBindingQuery',
  'Query.isViewQuery',
  'Query.selector',
  'Query.token',
  'Query.varBindings',
  'QueryList',
  'QueryList.add()',
  'QueryList.any():dart',
  'QueryList.contains():dart',
  'QueryList.elementAt():dart',
  'QueryList.every():dart',
  'QueryList.expand():dart',
  'QueryList.fireCallbacks():',
  'QueryList.first',
  'QueryList.firstWhere():dart',
  'QueryList.fold():dart',
  'QueryList.forEach():dart',
  'QueryList.isEmpty',
  'QueryList.isNotEmpty',
  'QueryList.iterator',
  'QueryList.join():dart',
  'QueryList.last',
  'QueryList.lastWhere():dart',
  'QueryList.length',
  'QueryList.map()',
  'QueryList.onChange()',
  'QueryList.reduce():dart',
  'QueryList.removeAllCallbacks()',
  'QueryList.removeCallback()',
  'QueryList.reset()',
  'QueryList.single',
  'QueryList.singleWhere():dart',
  'QueryList.skip():dart',
  'QueryList.skipWhile():dart',
  'QueryList.take():dart',
  'QueryList.takeWhile():dart',
  'QueryList.toList():dart',
  'QueryList.toSet():dart',
  'QueryList.where():dart',
  'QueryMetadata',
  'QueryMetadata.descendants',
  'QueryMetadata.first',
  'QueryMetadata.isVarBindingQuery',
  'QueryMetadata.isViewQuery',
  'QueryMetadata.selector',
  'QueryMetadata.token',
  'QueryMetadata.varBindings',
  'RenderDirectiveMetadata#COMPONENT_TYPE',
  'RenderDirectiveMetadata#DIRECTIVE_TYPE',
  'RenderDirectiveMetadata#create()',
  'RenderDirectiveMetadata',
  'RenderDirectiveMetadata.callAfterContentChecked',
  'RenderDirectiveMetadata.callAfterContentChecked=',
  'RenderDirectiveMetadata.callAfterContentInit',
  'RenderDirectiveMetadata.callAfterContentInit=',
  'RenderDirectiveMetadata.callAfterViewChecked',
  'RenderDirectiveMetadata.callAfterViewChecked=',
  'RenderDirectiveMetadata.callAfterViewInit',
  'RenderDirectiveMetadata.callAfterViewInit=',
  'RenderDirectiveMetadata.callDoCheck',
  'RenderDirectiveMetadata.callDoCheck=',
  'RenderDirectiveMetadata.callOnChanges',
  'RenderDirectiveMetadata.callOnChanges=',
  'RenderDirectiveMetadata.callOnDestroy',
  'RenderDirectiveMetadata.callOnDestroy=',
  'RenderDirectiveMetadata.callOnInit',
  'RenderDirectiveMetadata.callOnInit=',
  'RenderDirectiveMetadata.changeDetection',
  'RenderDirectiveMetadata.changeDetection=',
  'RenderDirectiveMetadata.compileChildren',
  'RenderDirectiveMetadata.compileChildren=',
  'RenderDirectiveMetadata.events',
  'RenderDirectiveMetadata.events=',
  'RenderDirectiveMetadata.exportAs',
  'RenderDirectiveMetadata.exportAs=',
  'RenderDirectiveMetadata.hostAttributes',
  'RenderDirectiveMetadata.hostAttributes=',
  'RenderDirectiveMetadata.hostListeners',
  'RenderDirectiveMetadata.hostListeners=',
  'RenderDirectiveMetadata.hostProperties',
  'RenderDirectiveMetadata.hostProperties=',
  'RenderDirectiveMetadata.id',
  'RenderDirectiveMetadata.id=',
  'RenderDirectiveMetadata.properties',
  'RenderDirectiveMetadata.properties=',
  'RenderDirectiveMetadata.queries',
  'RenderDirectiveMetadata.queries=',
  'RenderDirectiveMetadata.readAttributes',
  'RenderDirectiveMetadata.readAttributes=',
  'RenderDirectiveMetadata.selector',
  'RenderDirectiveMetadata.selector=',
  'RenderDirectiveMetadata.type',
  'RenderDirectiveMetadata.type=',
  'RenderFragmentRef',
  'RenderProtoViewRef',
  'RenderViewRef',
  'RenderViewWithFragments',
  'RenderViewWithFragments.fragmentRefs',
  'RenderViewWithFragments.fragmentRefs=',
  'RenderViewWithFragments.viewRef',
  'RenderViewWithFragments.viewRef=',
  'Renderer',
  'Renderer.attachFragmentAfterElement()',
  'Renderer.attachFragmentAfterFragment()',
  'Renderer.createRootHostView()',
  'Renderer.createView()',
  'Renderer.dehydrateView()',
  'Renderer.destroyView()',
  'Renderer.detachFragment()',
  'Renderer.getNativeElementSync()',
  'Renderer.hydrateView()',
  'Renderer.invokeElementMethod()',
  'Renderer.setElementAttribute()',
  'Renderer.setElementClass()',
  'Renderer.setElementProperty()',
  'Renderer.setElementStyle()',
  'Renderer.setEventDispatcher()',
  'Renderer.setText()',
  'ResolvedBinding',
  'ResolvedBinding.key',
  'ResolvedBinding.key=',
  'ResolvedBinding.multiBinding',
  'ResolvedBinding.multiBinding=',
  'ResolvedBinding.resolvedFactories',
  'ResolvedBinding.resolvedFactories=',
  'ResolvedBinding.resolvedFactory',
  'ResolvedFactory',
  'ResolvedFactory.dependencies',
  'ResolvedFactory.dependencies=',
  'ResolvedFactory.factory',
  'ResolvedFactory.factory=',
  'Scope#all()',
  'Scope#light()',
  'Scope#view()',
  'Scope',  // TODO(misko): rename?
  'SelectControlValueAccessor',
  'SelectControlValueAccessor.ngClassDirty',
  'SelectControlValueAccessor.ngClassInvalid',
  'SelectControlValueAccessor.ngClassPristine',
  'SelectControlValueAccessor.ngClassTouched',
  'SelectControlValueAccessor.ngClassUntouched',
  'SelectControlValueAccessor.ngClassValid',
  'SelectControlValueAccessor.onChange',
  'SelectControlValueAccessor.onChange=',
  'SelectControlValueAccessor.onTouched',
  'SelectControlValueAccessor.onTouched=',
  'SelectControlValueAccessor.registerOnChange()',
  'SelectControlValueAccessor.registerOnTouched()',
  'SelectControlValueAccessor.value',
  'SelectControlValueAccessor.value=',
  'SelectControlValueAccessor.writeValue()',
  'Self',
  'SelfMetadata',
  'SkipSelf',
  'SkipSelfMetadata',
  'SlicePipe',
  'SlicePipe.supports()',
  'SlicePipe.transform()',
  'TemplateRef',
  'TemplateRef.elementRef',
  'TemplateRef.elementRef=',
  'TemplateRef.hasLocal()',
  'TemplateRef.protoViewRef',
  'Type:js',
  'TypeLiteral',
  'TypeLiteral.type',
  'UpperCasePipe',
  'UpperCasePipe.transform()',
  'UrlResolver',
  'UrlResolver.packagePrefix',
  'UrlResolver.resolve()',
  'Validators#array()',
  'Validators#compose()',
  'Validators#group()',
  'Validators#nullValidator()',
  'Validators#required()',
  'Validators',
  'View',
  'View.directives',
  'View.encapsulation',
  'View.pipes',
  'View.styleUrls',
  'View.styles',
  'View.template',
  'View.templateUrl',
  'ViewChild',
  'ViewChild.descendants',
  'ViewChild.first',
  'ViewChild.isVarBindingQuery',
  'ViewChild.isViewQuery',
  'ViewChild.selector',
  'ViewChild.token',
  'ViewChild.varBindings',
  'ViewChildMetadata',
  'ViewChildMetadata.descendants',
  'ViewChildMetadata.first',
  'ViewChildMetadata.isVarBindingQuery',
  'ViewChildMetadata.isViewQuery',
  'ViewChildMetadata.selector',
  'ViewChildMetadata.token',
  'ViewChildMetadata.varBindings',
  'ViewChildren',
  'ViewChildren.descendants',
  'ViewChildren.first',
  'ViewChildren.isVarBindingQuery',
  'ViewChildren.isViewQuery',
  'ViewChildren.selector',
  'ViewChildren.token',
  'ViewChildren.varBindings',
  'ViewChildrenMetadata',
  'ViewChildrenMetadata.descendants',
  'ViewChildrenMetadata.first',
  'ViewChildrenMetadata.isVarBindingQuery',
  'ViewChildrenMetadata.isViewQuery',
  'ViewChildrenMetadata.selector',
  'ViewChildrenMetadata.token',
  'ViewChildrenMetadata.varBindings',
  'ViewContainerRef',
  'ViewContainerRef.clear()',
  'ViewContainerRef.createEmbeddedView()',
  'ViewContainerRef.createHostView()',
  'ViewContainerRef.detach()',
  'ViewContainerRef.element',
  'ViewContainerRef.element=',
  'ViewContainerRef.get()',
  'ViewContainerRef.indexOf()',
  'ViewContainerRef.insert()',
  'ViewContainerRef.length',
  'ViewContainerRef.remove()',
  'ViewContainerRef.viewManager',
  'ViewContainerRef.viewManager=',
  'ViewDefinition',
  'ViewDefinition.componentId',
  'ViewDefinition.componentId=',
  'ViewDefinition.directives',
  'ViewDefinition.directives=',
  'ViewDefinition.encapsulation',
  'ViewDefinition.encapsulation=',
  'ViewDefinition.styleAbsUrls',
  'ViewDefinition.styleAbsUrls=',
  'ViewDefinition.styles',
  'ViewDefinition.styles=',
  'ViewDefinition.template',
  'ViewDefinition.template=',
  'ViewDefinition.templateAbsUrl',
  'ViewDefinition.templateAbsUrl=',
  'ViewEncapsulation#Emulated',
  'ViewEncapsulation#Native',
  'ViewEncapsulation#None',
  'ViewEncapsulation#values',
  'ViewEncapsulation',
  'ViewEncapsulation.index',
  'ViewMetadata',
  'ViewMetadata.directives',
  'ViewMetadata.encapsulation',
  'ViewMetadata.pipes',
  'ViewMetadata.styleUrls',
  'ViewMetadata.styles',
  'ViewMetadata.template',
  'ViewMetadata.templateUrl',
  'ViewQuery',
  'ViewQuery.descendants',
  'ViewQuery.first',
  'ViewQuery.isVarBindingQuery',
  'ViewQuery.isViewQuery',
  'ViewQuery.selector',
  'ViewQuery.token',
  'ViewQuery.varBindings',
  'ViewQueryMetadata',
  'ViewQueryMetadata.descendants',
  'ViewQueryMetadata.first',
  'ViewQueryMetadata.isVarBindingQuery',
  'ViewQueryMetadata.isViewQuery',
  'ViewQueryMetadata.selector',
  'ViewQueryMetadata.token',
  'ViewQueryMetadata.varBindings',
  'ViewRef',
  'ViewRef.changeDetectorRef',
  'ViewRef.changeDetectorRef=',
  'ViewRef.render',
  'ViewRef.renderFragment',
  'ViewRef.setLocal()',
  'WrappedException',
  'WrappedException.context',
  'WrappedException.message',
  'WrappedException.stackTrace',
  'WrappedException.wrapperMessage',
  'WrappedValue#wrap()',
  'WrappedValue',
  'WrappedValue.wrapped',
  'WrappedValue.wrapped=',
  'WtfScopeFn:dart',
  'applicationCommonBindings()',
  'asNativeElements()',
  'bind()',
  'bootstrap():js',
  'createNgZone()',
  'forwardRef():js',
  'inspectElement()',
  'inspectNativeElement()',
  'platform():js',
  'platformBindings()',
  'platformCommon()',
  'resolveForwardRef():js',
  'wtfCreateScope():js',
  'wtfCreateScope:dart',
  'wtfEndTimeRange():js',
  'wtfEndTimeRange:dart',
  'wtfLeave():js',
  'wtfLeave:dart',
  'wtfStartTimeRange():js',
  'wtfStartTimeRange:dart',
  '{AfterContentChecked}',
  '{AfterContentInit}',
  '{AfterViewChecked}',
  '{AfterViewInit}',
  '{ChangeDetector}',
  '{ChangeDetector}.mode',
  '{ChangeDetector}.mode=',
  '{ChangeDetector}.parent',
  '{ChangeDetector}.parent=',
  '{ChangeDetector}.ref',
  '{ChangeDetector}.ref=',
  '{ControlValueAccessor}',
  '{DoCheck}',
  '{Form}',
  '{HostViewRef}',
  '{HostViewRef}.changeDetectorRef',
  '{HostViewRef}.changeDetectorRef=',
  '{IterableDifferFactory}',
  '{IterableDiffer}',
  '{KeyValueDifferFactory}',
  '{KeyValueDiffer}',
  '{OnChanges}',
  '{OnDestroy}',
  '{OnInit}',
  '{PipeOnDestroy}',
  '{PipeTransform}',
  '{RenderElementRef}',
  '{RenderElementRef}.renderBoundElementIndex',
  '{RenderElementRef}.renderBoundElementIndex=',
  '{RenderElementRef}.renderView',
  '{RenderElementRef}.renderView=',
  '{RenderEventDispatcher}',
  '{Stream}',
  '{Stream}.any()',
  '{Stream}.asBroadcastStream()',
  '{Stream}.asyncExpand()',
  '{Stream}.asyncMap()',
  '{Stream}.contains()',
  '{Stream}.distinct()',
  '{Stream}.drain()',
  '{Stream}.elementAt()',
  '{Stream}.every()',
  '{Stream}.expand()',
  '{Stream}.first',
  '{Stream}.firstWhere()',
  '{Stream}.fold()',
  '{Stream}.forEach()',
  '{Stream}.handleError()',
  '{Stream}.isBroadcast',
  '{Stream}.isEmpty',
  '{Stream}.join()',
  '{Stream}.last',
  '{Stream}.lastWhere()',
  '{Stream}.length',
  '{Stream}.map()',
  '{Stream}.pipe()',
  '{Stream}.reduce()',
  '{Stream}.single',
  '{Stream}.singleWhere()',
  '{Stream}.skip()',
  '{Stream}.skipWhile()',
  '{Stream}.take()',
  '{Stream}.takeWhile()',
  '{Stream}.timeout()',
  '{Stream}.toList()',
  '{Stream}.toSet()',
  '{Stream}.transform()',
  '{Stream}.where()',
  '{Type}'
];

export function main() {
  /**
  var x = getSymbolsFromLibrary('ng');
  x.sort();
  var parts = [];
  x.forEach((i) => parts.push(`'${i}'`));
  print(`[ ${parts.join(',
  ')} ]`);
   */

  describe('public API', () => {
    it('should fail if public API has changed',
       () => { expect(new SymbolsDiff(getSymbolsFromLibrary('ng'), NG_API).errors).toEqual([]); });
  });
}
